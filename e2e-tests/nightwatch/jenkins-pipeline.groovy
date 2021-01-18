// Этот файл сгенерирован автоматически, не редактируйте его вручную

def runParams

def getTestFiles() {
  findFiles(glob: '**/e2e-tests/nightwatch/tests/**/*.test.js').collect {
    it.toString().replace("e2e-tests/nightwatch/tests/", "").replace(".test.js", "")
  }
}

def config = readJSON file: 'e2e-tests/e2e-tools.json'
def browsers = config.tools['@csssr/e2e-tools-nightwatch'].browsers
def browserNames = browsers.keySet().findAll { browsers[it].remote } as List

def basicAuths = browsers.values()
    .findAll { it.basicAuth?.credentialsId }
    .collect { it.basicAuth }

browserCredentials = basicAuths
  .collect {
    usernamePassword(
      credentialsId: it.credentialsId,
      usernameVariable: it.username_env,
      passwordVariable: it.password_env
    )
  } as List

filesCheckboxes = getTestFiles()
  .collect {
    booleanParam(defaultValue: true, name: it)
  }

buildParameters = [
  string(defaultValue: config.defaultLaunchUrl, description: 'Адрес стенда', name: 'LAUNCH_URL', trim: true),
  choice(name: 'BROWSER', choices: browserNames, description: 'Браузер, в котором запускать тесты'),
  booleanParam(name: 'CHECK_SCREENSHOTS', defaultValue: true, description: 'Проверять совпадение скриншотов')
]

buildParameters.addAll(filesCheckboxes)

def customEnv = config.env ? config.env.keySet() as List : []

customEnv.each {
  paramOpts = config.env[it]
  paramName = it
  if (paramOpts.type == "string") {
    buildParameters.add(
      string(defaultValue: paramOpts.default, description: paramOpts.description, name: paramName, trim: true),
    )
  }

  if (paramOpts.type == "boolean") {
    buildParameters.add(
      booleanParam(defaultValue: paramOpts.default, description: paramOpts.description, name: paramName),
    )
  }
}

properties([
  parameters(buildParameters)
])

pipeline {
  agent {
    docker {
      image 'quay.csssr.cloud/csssr/e2e-tools:1'
    }
  }

  options {
    skipDefaultCheckout(true)
    timeout(time: config.maxTestsDurationMinutes ?: 60, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      when {
        triggeredBy "UserIdCause"
      }

      steps {
        checkout scm

        script {
          def previousParams = currentBuild.getPreviousBuild().getRawBuild().actions.find{ it instanceof ParametersAction }?.parameters
          if (!previousParams) {
            throw new Error("Параметры сборки не заданы. Перезапустите сборку")
          }

          previousParamsNames = previousParams.collect{ it.name }.sort(false)
          currentParamsNames = buildParameters.collect{ it.getArguments().name }.sort(false)

          if (previousParamsNames != currentParamsNames) {
            println("Предыдущие параметры:")
            println(previousParamsNames)
            println("Следующие параметры:")
            println(currentParamsNames)
            throw new Error("Параметры сборки обновлены. Перезапустите сборку")
          }

          env.LAUNCH_URL = params.LAUNCH_URL
          env.BROWSER = params.BROWSER

          customEnv.each {
            env[it] = params[it]
          }

          filesToRun = getTestFiles()
            .findAll{ params[it] }
            .collect{ "nightwatch/tests/${it}.test.js" }

          runParams = filesToRun.collect{ "--test='${it}'" }
          runParams.add("--checkScreenshots")
          runParams.add("${params.CHECK_SCREENSHOTS}")

          runParamsString = runParams.join(" ")
        }

        sh """
          pwd
          git lfs install
          git lfs pull
          cd e2e-tests
          rm -f nightwatch/jenkins-report.xml
          rm -rf nightwatch/failure-screenshots/
          rm -rf nightwatch/screenshots/diff/
          yarn install --frozen-lockfile
          touch .env
        """
      }
    }

    stage('Run tests') {
      when {
        triggeredBy "UserIdCause"
      }

      steps {
        script {
          withCredentials(browserCredentials + [usernamePassword(credentialsId: "browserstack", usernameVariable: "BROWSERSTACK_USER", passwordVariable: "BROWSERSTACK_KEY")]) {
            sh """
              pwd
              cd e2e-tests
              set -x
              yarn et nightwatch:run ${runParamsString}
            """
          }
        }
      }

      post {
        always {
          script {
            junit 'e2e-tests/nightwatch/jenkins-report.xml'
          }
        }

        unsuccessful {
          script {
            archiveArtifacts artifacts: 'e2e-tests/nightwatch/failure-screenshots/*.png', allowEmptyArchive: true
            archiveArtifacts artifacts: 'e2e-tests/nightwatch/screenshots/diff/**/*.png', allowEmptyArchive: true
          }
        }
      }
    }
  }
}

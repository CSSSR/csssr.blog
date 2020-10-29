const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const languages = require('../../utils/languages')
const capitalize = require('../../utils/capitalize')

const language = process.argv[2]
const slug = process.argv[3]
if (!languages.includes(language)) {
  throw new Error('Укажите язык, корректное использование: yarn article [en|ru] [article-name]')
}

const mdFileTemplate = fs.readFileSync(path.resolve(__dirname, 'new-article-template.md'), 'utf8')
const newMdFileContent = mdFileTemplate.replace(/{{slug}}/g, slug)

const outputMdFilePath = path.resolve(__dirname, '../../_posts', language, `${slug}.md`)
fs.writeFileSync(outputMdFilePath, newMdFileContent)

const outputImagesDirPath = path.resolve(__dirname, `../../public/images/resize`, language, slug)
fse.copySync(path.resolve(__dirname, 'images'), outputImagesDirPath)

const postsOrderFilePath = path.resolve(__dirname, `../../postsOrder${capitalize(language)}.json`)
const postsOrder = JSON.parse(fs.readFileSync(postsOrderFilePath, 'utf8'))
fs.writeFileSync(postsOrderFilePath, JSON.stringify([[slug, slug]].concat(postsOrder)))

// Используем eslint для форматирования файла с порядком статей на главной
const { CLIEngine } = require('eslint')
const cli = new CLIEngine({ fix: true })
const report = cli.executeOnFiles([`postsOrder${capitalize(language)}.json`])
CLIEngine.outputFixes(report)

console.log(
  [
    `Успех!`,
    `- создан файл статьи ${outputMdFilePath}`,
    `- создана папка с изображениями статьи ${outputImagesDirPath}`,
    '- статья добавлен на главную в двух вариантах',
    `Чтобы правильно расположить статью на главной надо отредактировать файл ${postsOrderFilePath}`,
    `Статья доступна по url http://localhost:3000/${language}/article/${slug}`,
  ].join('\n'),
)

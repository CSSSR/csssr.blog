const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')

const slug = process.argv[2]

const mdFileTemplate = fs.readFileSync(path.resolve(__dirname, 'new-article-template.md'), 'utf8')
const newMdFileContent = mdFileTemplate.replace(/{{slug}}/g, slug)

const outputMdFilePath = path.resolve(__dirname, '../../_posts', `${slug}.md`)
fs.writeFileSync(outputMdFilePath, newMdFileContent)

const outputImagesDirPath = path.resolve(__dirname, `../../public/posts/${slug}`)
fse.copySync(path.resolve(__dirname, 'images'), outputImagesDirPath)

const postsOrderFilePath = path.resolve(__dirname, '../../postsOrder.json')
const postsOrder = JSON.parse(fs.readFileSync(postsOrderFilePath, 'utf8'))
fs.writeFileSync(postsOrderFilePath, JSON.stringify([[slug, slug]].concat(postsOrder)))

// Используем eslint для форматирования файла с порядком статей на главной
const { CLIEngine } = require('eslint')
const cli = new CLIEngine({ fix: true })
const report = cli.executeOnFiles(['postsOrder.json'])
CLIEngine.outputFixes(report)

console.log(
  [
    `Успех!`,
    `- создан файл статьи ${outputMdFilePath}`,
    `- создана папка с изображениями статьи ${outputImagesDirPath}`,
    '- статья добавлен на главную в двух вариантах',
    `Чтобы правильно расположить статью на главной надо отредактировать файл ${postsOrderFilePath}`,
    `Статья доступна по url http://localhost:3000/article/${slug}`,
  ].join('\n'),
)

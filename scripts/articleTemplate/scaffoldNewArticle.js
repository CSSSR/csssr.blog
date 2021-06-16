const fs = require('fs')
const path = require('path')

const fse = require('fs-extra')

const languages = require('../../utils/languages')

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

// eslint-disable-next-line no-console
console.log(
  [
    `Успех!`,
    `- создан файл статьи ${outputMdFilePath}`,
    `- создана папка с изображениями статьи ${outputImagesDirPath}`,
    `Статья доступна по url http://localhost:3000/${language}/article/${slug}`,
  ].join('\n'),
)

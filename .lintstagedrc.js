// https://github.com/okonet/lint-staged#how-can-i-ignore-files-from-eslintignore-
const { ESLint } = require('eslint')

const cli = new ESLint({})

module.exports = {
  '*.{js,jsx}': (files) =>
    'eslint --fix --max-warnings=0 ' + files.filter((file) => !cli.isPathIgnored(file)).join(' '),
  '*.md': 'markdownlint -f',
}

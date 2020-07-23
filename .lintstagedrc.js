// https://github.com/okonet/lint-staged#how-can-i-ignore-files-from-eslintignore-
const { CLIEngine } = require('eslint')

const cli = new CLIEngine({})

module.exports = {
  '*.{js,jsx}': (files) =>
    'eslint --fix --max-warnings=0 ' + files.filter((file) => !cli.isPathIgnored(file)).join(' ')
}

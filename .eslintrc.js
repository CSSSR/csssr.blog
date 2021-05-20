module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    require.resolve('@csssr/linters/eslint/base'),
    require.resolve('@csssr/linters/eslint/react'),
  ],
  plugins: ['@emotion'],
  rules: {
    // Отключения
    'react/prop-types': 'off', // потому что много где нет
    'react/forbid-prop-types': 'off', // чтобы можно было оставить object и не уточнять до shape
    'jsx-a11y/anchor-is-valid': 'off', // потому что Next
    'react/no-danger': 'off', // потому что много где используется
    'no-nested-ternary': 'off',

    // Донастройка
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],

    // Доп. правила
    '@emotion/pkg-renaming': 'error',
  },
}

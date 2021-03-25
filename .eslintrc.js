module.exports = {
  parser: 'babel-eslint',
  extends: [
    require.resolve('csssr-base-lint/eslint/base'),
    require.resolve('csssr-base-lint/eslint/react'),
  ],
  plugins: ['@emotion'],
  rules: {
    // Отключения
    'react/prop-types': 'off', // потому что много где нет
    'react/forbid-prop-types': 'off', // чтобы можно было оставить object и не уточнять до shape
    'jsx-a11y/anchor-is-valid': 'off', // потому что Next

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

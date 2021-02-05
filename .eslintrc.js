module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: '@csssr/eslint-config-core',
  plugins: ['react-hooks', '@emotion'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        printWidth: 100,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@emotion/pkg-renaming': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

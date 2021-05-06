const { getImagesLoaderRules } = require('../utils/getImagesLoaderRules');
const { Plugin } = require('@csssr/csssr.images/dist/webpack/plugin');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config, { configType }) => {
    const isDev = configType === 'DEVELOPMENT';

    config.module.rules = config.module.rules.map((rule) => {
      // Редактируем существующее правило для избежания конфликтов с @csssr/csssr.images
      if (
        rule.test.toString() ===
        '/\\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\\?.*)?$/'
      ) {
        rule.test = /\\.(svg|ico|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\\?.*)?$/;
      }

      return rule;
    });

    config.module.rules.push(
      ...getImagesLoaderRules(isDev, true)
    );

    if (!isDev) {
      // TODO подключить позже, нужен для обхода всех картинок проекта перед выкладкой на прод
      config.plugins.push(new Plugin());
    }

    return config;
  },
};

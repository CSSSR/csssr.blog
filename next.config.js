const { Plugin } = require('@csssr/csssr.images/dist/webpack/plugin')
const withPlugins = require('next-compose-plugins')

const { getImagesLoaderRules } = require('./utils/getImagesLoaderRules')

const withImages = (nextConfig = {}) => ({
  ...nextConfig,
  env: {
    ...nextConfig.env,
    IS_PRODUCTION: process.env.IS_PRODUCTION === 'TRUE',
  },
  webpack(config, { dev, isServer }) {
    config.node = {
      fs: 'empty',
    }

    config.module.rules.push(...getImagesLoaderRules(dev, false, isServer))

    if (!dev) {
      // TODO подключить позже, нужен для обхода всех картинок проекта перед выкладкой на прод
      config.plugins.push(new Plugin())
    }

    return config
  },
})

module.exports = withPlugins([withImages], {
  env: { BLOG_HOST: process.env.BLOG_HOST },
  trailingSlash: true,
})

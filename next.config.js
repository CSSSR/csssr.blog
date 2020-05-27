const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const { defaultTheme } = require('@csssr/core-design')
// const { Plugin } = require('@csssr/csssr.images')

const svgrLoaderConfig = {
  loader: '@svgr/webpack',
  options: {
    svgoConfig: {
      plugins: [
        { inlineStyles: false },
        { prefixIds: false },
        { removeViewBox: false },
        {
          cleanupNumericValues: {
            floatPrecision: 3,
          },
        },
      ],
    },
  },
}

const svgrLoaderConfigWithOutSvgo = {
  ...svgrLoaderConfig,
  options: {
    ...svgrLoaderConfig.options,
    svgo: false,
  },
}

const withImages = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, { dev, isServer }) {
    config.node = {
      fs: 'empty',
    }

    // TODO сделать короче итоговые пути здесь
    const fileLoaderConfig = {
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/images/',
        outputPath: `${isServer ? '../' : ''}static/images/`,
        name: '[path][name]-[hash:8].[ext]',
        esModule: false,
      },
    }

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /original/,
          use: [svgrLoaderConfigWithOutSvgo, fileLoaderConfig],
        },
        {
          use: [svgrLoaderConfig, fileLoaderConfig],
        },
      ],
    })

    let host, imgproxyHost
    if (dev) {
      const ip = require('ip')
      host = `http://${ip.address()}:3000`
      imgproxyHost = 'http://localhost:8080'
    } else {
      host = 'http://master.csssr-new-blog.csssr.cloud/'
      imgproxyHost = 'https://images.csssr.com'
    }

    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico)$/,
      use: [
        {
          loader: '@csssr/csssr.images',
          options: {
            breakpoints: defaultTheme.breakpointsOrdered,
            imgproxy: {
              disable: dev,
              imagesHost: host,
              host: imgproxyHost,
            },
          },
        },
        fileLoaderConfig
      ],
    })

    // TODO подключить позже, нужен для обхода всех картинок проекта перед выкладкой на прод
    // config.plugins.push(new Plugin())

    return config
  },
})

module.exports = withPlugins([withImages, withFonts], { exportTrailingSlash: true })

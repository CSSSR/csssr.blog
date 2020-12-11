const withPlugins = require('next-compose-plugins')
const { defaultTheme } = require('@csssr/core-design')
const { Plugin } = require('@csssr/csssr.images/dist/webpack/plugin')

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
  env: {
    IS_PRODUCTION: process.env.IS_PRODUCTION === 'TRUE',
  },
  webpack(config, { dev, isServer }) {
    config.node = {
      fs: 'empty',
    }

    const fileLoaderConfig = {
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/i/',
        outputPath: `${isServer ? '../' : ''}static/i/`,
        name: '[path][name]-[hash:8].[ext]',
        esModule: false,
      },
    }

    const handleImagesForResize = (originalPixelRatio) => {
      return {
        use: [
          {
            loader: '@csssr/csssr.images',
            options: {
              breakpoints: defaultTheme.breakpointsOrdered,
              imgproxy: {
                disable: dev,
                imagesHost: blogHost,
                host: imgproxyHost,
              },
              originalPixelRatio,
            },
          },
          fileLoaderConfig,
        ],
      }
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

    let blogHost, imgproxyHost
    if (dev) {
      const ip = require('ip')
      blogHost = `http://${ip.address()}:3000`
      imgproxyHost = 'http://localhost:8080'
    } else {
      blogHost = process.env.BLOG_HOST || 'https://blog.csssr.com'
      imgproxyHost = 'https://images.csssr.com'
    }

    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico)$/,
      oneOf: [
        {
          resourceQuery: /dont-resize/,
          ...handleImagesForResize('1x'),
        },
        {
          ...handleImagesForResize('3x'),
        },
        {
          use: [fileLoaderConfig],
        },
      ],
    })

    if (!dev) {
      // TODO подключить позже, нужен для обхода всех картинок проекта перед выкладкой на прод
      config.plugins.push(new Plugin())
    }

    return config
  },
})

module.exports = withPlugins([
  [withImages],
  {
    exportPathMap: async function () {
      return {
        '/404/index.html': { page: '/404' },
      }
    },
  },
])

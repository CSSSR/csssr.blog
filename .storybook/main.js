const { defaultTheme } = require('@csssr/core-design');
const { Plugin } = require('@csssr/csssr.images/dist/webpack/plugin');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config, { configType }) => {
    const isDev = configType === 'DEVELOPMENT'

    const fileLoaderConfig = {
      loader: 'file-loader',
      options: {
        publicPath: 'static/media/',
        outputPath: `${isDev ? '' : '/'}static/media/`,
        name: '[path][name]-[hash:8].[ext]',
        esModule: false,
      },
    }

    let blogHost, imgproxyHost
    if (isDev) {
      const ip = require('ip')
      blogHost = `http://${ip.address()}:3000`
      imgproxyHost = 'http://localhost:8080'
    } else {
      blogHost = `${process.env.BLOG_HOST}/` || 'https://blog.csssr.com'
      imgproxyHost = 'https://images.csssr.com'
    }

    const handleImagesForResize = (originalPixelRatio) => {
      return {
        use: [
          {
            loader: '@csssr/csssr.images',
            options: {
              breakpoints: defaultTheme.breakpointsOrdered,
              imgproxy: {
                disable: isDev,
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

    config.module.rules = config.module.rules.map(
      rule => {
        // Редактируем существующее правило для избежания конфликтов с @csssr/csssr.images
        if (rule.test.toString() === "/\\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\\?.*)?$/") {
          rule.test = /\\.(svg|ico|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\\?.*)?$/
        }

        return rule
      }
    );

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

    if (!isDev) {
      // TODO подключить позже, нужен для обхода всех картинок проекта перед выкладкой на прод
      config.plugins.push(new Plugin())
    }

    return config;
  },
}

const { defaultTheme } = require('@csssr/core-design')

const getImagesLoaderRules = (isDev, isStorybook, isServer) => {
  let blogHost
  let imgproxyHost

  if (isDev) {
    const ip = require('ip')
    blogHost = `http://${ip.address()}:3000`
    imgproxyHost = 'http://localhost:8080'
  } else {
    blogHost = process.env.BLOG_HOST || 'https://blog.csssr.com'
    imgproxyHost = 'https://images.csssr.com'
  }

  const publicPath = isStorybook ? 'static/media/' : '/_next/static/i/'
  const outputPath = isStorybook
    ? `${isDev ? '' : '/'}static/media/`
    : `${isServer ? '../' : ''}static/i/`

  const fileLoaderConfig = {
    loader: 'file-loader',
    options: {
      publicPath,
      outputPath,
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

  return [
    {
      test: /\.(?:jpe?g|png|gif|ico)$/,
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
    },
    {
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
    },
  ]
}

module.exports = { getImagesLoaderRules }

const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')

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
const fileLoaderConfig = {
  loader: 'file-loader',
  options: {
    publicPath: '/_next',
    name: '[path][name]-[hash:8].[ext]',
  },
}

const withImages = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|webp|ico)$/,
        use: [fileLoaderConfig],
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
    )

    return config
  },
})

module.exports = withPlugins([withImages, withFonts], { exportTrailingSlash: true })

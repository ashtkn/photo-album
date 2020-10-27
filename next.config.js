const path = require('path')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@public'] = path.resolve(__dirname, 'public')
    return config
  },
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        imagesName: '[hash].[ext]',
      },
    ],
  ],
  nextConfig
)

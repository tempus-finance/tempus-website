const path = require('path')
const withTM = require('next-transpile-modules')(['gsap', 'lodash-es'])

module.exports = withTM({
  reactStrictMode: true,
  trailingSlash: true,

  webpack(config) {
    const newConfig = config

    newConfig.resolve.modules.push(path.resolve('./'))

    newConfig.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      exclude: /node_modules/,
      use: ['yaml-loader'],
    })

    return newConfig
  },

  async exportPathMap() {
    const routes = {
      '/': { page: '/' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/terms-of-service': { page: '/terms-of-service' },
    }

    return routes
  },

})

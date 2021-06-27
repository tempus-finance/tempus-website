const path = require('path')

module.exports = {
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
    }

    return routes
  },

}

const webpack = require('webpack')
const {merge} = require('webpack-merge')
const base = require('./webpack.base')
const env = require('./config/prod.env')

module.exports = merge(base, {
  mode: 'production',
  // optimization: {
  //   minimizer: {}
  // }
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
})
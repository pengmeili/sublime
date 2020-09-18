const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
console.log(process.env.NODE_ENV)

module.exports = {
  entry: {
    "index" :'./src/index/index.js'
  },
  output: {
    filename: '[name]-[hash:3].js',
    path: path.resolve(__dirname, 'dist')
  },
  // watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: './doc', to: './doc' }
      ]
    }),
    new webpack.BannerPlugin('make from pengml1')
  ]
}
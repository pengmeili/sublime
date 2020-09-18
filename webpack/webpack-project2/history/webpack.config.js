const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  // 多入口
  entry: {
    index: './src/index/index.js',
    other: './src/other/other.js'
  },
  output: {
    filename: '[name]/[name][hash:2].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index/index.html',
      filename: 'index/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/other/index.html',
      filename: 'other/index.html',
      chunks: ['other']
    })
  ]
}
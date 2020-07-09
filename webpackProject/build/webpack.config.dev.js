const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.base.js');
const webpack = require('webpack');
const env = require('../config/dev.config.js')
module.exports = merge(common, {
  devtool: 'inline', //  sourceMap
  devServer: {
    contentBase: 'app/home',
    historyApiFallback: true,
    noInfo: false,
    compress: true,
    host: "0.0.0.0",
    port: 9000,
    publicPath: "/",
    openPage: 'home/index.html',
    hot: true,
    inline: true,
    open: true,
    useLocalIp: true,
    overlay: true,
    after () {
      console.log('\n 你的服务已启动： http://localhost:9000 \n Ctrl+C 结束')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
});

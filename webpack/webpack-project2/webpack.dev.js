const webpack = require('webpack');
const {merge} = require('webpack-merge');
const base = require('./webpack.base');
const env = require('./config/dev.env')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    // 只是前端模拟数据
    before(app) {
      app.get('/user', (req, res)=> {
        res.json({ name: 'pengml1-before' })
      })
    },
    // proxy: {
    //   '/api/user': 'http://localhost:3000' // 配置一个代理
    // }
  },
  // devtool: 'cheap-module-eval-source-map', // 增加映射文件，可以帮助我们调试源代码  source-map: 生成一个单独的sourcemap文件，会标识当前报错的列和行
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
})
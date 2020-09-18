const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log(path.resolve(__dirname, 'dist'))
module.exports = {
  devServer: { // 开发服务器的配置
    port: 3001,
    progress: true,
    contentBase: './dist',
    open: true,
  },
  mode: 'production', // 两种模式 development\production
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'boudle.[hash:3].js',  // 打包后的文件名 [hash:3] 3位hash值
    path: path.resolve(__dirname, 'dist') // 路径必须是一个绝对路径 
  },
  plugins: [ // 数组 放着所有的webpack 插件
    new HtmlWebpackPlugin({
      template: 'index.html', // 打包前的文件路径 
      filename: 'index.html', // 打包后的文件名
      minify: {
        removeAttributeQuotes: true, // 去掉双引号
        collapseWhitespace: true
      },
      hash: true //在js 的后面添加hash 版本号 boudle.js?3b7f9e38555de8393e94
    })
  ]
}
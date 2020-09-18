const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css 抽离插件
const OptimizeCss = require('optimize-css-assets-webpack-plugin') // css 压缩
const TerserWebpackPlugin = require('terser-webpack-plugin')

// console.log(path.resolve(__dirname, 'dist'))
module.exports = {
  devServer: { // 开发服务器的配置
    port: 3001,
    progress: true,
    contentBase: './dist',
    open: true,
    disableHostCheck: false,
    useLocalIp: true
  },
  mode: 'production', // 两种模式 development\production
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'boudle.[hash:3].js', // 打包后的文件名 [hash:3] 3位hash值
    path: path.resolve(__dirname, 'dist')// 路径必须是一个绝对路径
    // publicPath: 'http://www.cdn.com' // 打包后的css 图片和js 路径都是会被这个替换
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: { // 模块
    rules: [
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      // 规则 style-loader 插入到head 标签中
      // loader特点： 单一
      // 一个loader用 字符串，多个loader 使用[]，也可以写成对象的形式
      // loader的排行顺序为从右往左，从下到上执行
      // less less-loader   sass sass-loader  stylus stulus-loader
      {
        test: /\.(c|sc|sa|le)ss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader']
      },
      // {
      //   test: /.(jpg|png|gif)$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       esModule: false
      //     }
      //   }]
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader', // 开发环境使用file-loader
          options: {
            esModule: false,
            limit: 2*1024,
            outputPath: '/images/',
            publicPath: 'https://test.com', // 只给图片上传到cdn
            name: '[name][hash:8].[ext]'
          }
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ // 用babel-loader把 es6 -> es5
              '@babel/preset-env'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', {
                'legacy': true
              }],
              ['@babel/plugin-proposal-class-properties', {
                'loose': true
              }],
              ['@babel/plugin-transform-runtime', {
                'corejs': false
              }]
            ]
          }
        }
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: {
            exposes:['$', 'jQuery']
          }
        }]
      }
      // {
      //   test: /.js$/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       enforce: 'pre' // 强制在普通loader前执行  post
      //     }
      //   }
      // }
    ]
  },
  plugins: [ // 数组 放着所有的webpack 插件
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html', // 打包前的文件路径
      filename: 'index.html', // 打包后的文件名
      minify: {
        removeAttributeQuotes: true, // 去掉双引号
        collapseWhitespace: true
      },
      hash: true // 在js 的后面添加hash 版本号 boudle.js?3b7f9e38555de8393e94
    })
    // new webpack.ProvidePlugin({  // 在每个模块自动注入jquery,并通过$可以直接调用
    //   '$': 'jquery'
    // })
  ],
  optimization: {
    minimizer: [
      new OptimizeCss(),
      new TerserWebpackPlugin({
        cache: true,
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      })
    ]
  }
}

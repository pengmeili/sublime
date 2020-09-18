const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Happypack = require('happypack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'boudle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8090,
    open: true,
    contentBase: './dist'
  },
  module: {
    noParse: /jqurey/, // 不需要解析的包
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve('src'),
        use: 'Happypack/loader?id=js'
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: [
        //       '@babel/preset-env',
        //       '@babel/preset-react'
        //     ]
        //   }
        // }
      }
    ]
  },
  plugins: [
    new Happypack({
      id: 'js',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    })
  ]
}
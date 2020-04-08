const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  name: "development",
  entry: {
    index: __dirname + '/app/js/index.js',
    user: __dirname + '/app/js/user.js'
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g)(\?.*)?$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          name: 'images/[name].[ext]',
          esModule: false,
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '首页',
      template: './app/home/index.html',
      chunks: ['index'],
      filename: 'home/index.html',
      date: new Date(),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      title: '用户',
      template: './app/user/index.html',
      chunks: ['user'],
      filename: 'user/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      title: 'this is detail.html',
      template: './app/home/index.html',
      filename: 'detail/detail.html',
      chunks: ['detail'],
      inject: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'app/home'),
    compress: true,
    historyApiFallback: true
  }
}

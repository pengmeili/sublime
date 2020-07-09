const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: "development",
  entry: {
    index: ['./app/js/index.js'],
    user: ['./app/js/user.js']
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'https://smartdl.lenovo.com.cn/assets/lenovo.software.ui/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname,'app'),
        use:  {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(c|sc|sa)ss/,
        loader: [
          process.env.NODE_ENV === 'development' ? 'style-loader': MiniCssExtractPlugin.loader,
          'css-loader',{
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              ident: 'postcss',
              plugins:(loader) => [
                require('autoprefixer')({
                  overrideBrowserslist: [ "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8"
                  ]
                })
              ]
            }
          },'sass-loader']
      },
      {
        test: /\.html$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        loader: 'html-loader'
      },
      {
        test: /\.tpl$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        loader: 'ejs-loader'
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        exclude: path.resolve(__dirname, '../node_modules'),
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: 'https://smartdl.lenovo.com.cn/assets/lenovo.software.ui/images',
          esModule: false
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
      inject: true
    }),
    new HtmlWebpackPlugin({
      title: '用户',
      template: './app/user/index.html',
      chunks: ['user'],
      filename: 'user/index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          minSize: 0
        }
      }
    }
  }
}

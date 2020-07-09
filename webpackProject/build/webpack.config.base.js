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
    path: path.resolve(__dirname, 'dist')
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
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.s[ac]ss/i,
        loader: [
          'style-loader',
          'css-loader',{
          loader: 'postcss-loader',
          options: {
            sourceMap: 'inline',
            ident: 'postcss',
            plugins:(loader) => [
              require('autoprefixer')({
                browsers: ['last 5 versions']
              })
            ]
          }
        },'sass-loader']
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: '../images',
          esModule: false
        }
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
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
    new HtmlWebpackPlugin({
      title: 'this is detail.html',
      template: './app/home/index.html',
      filename: 'detail/index.html',
      chunks: ['detail'],
      inject: true
    })
  ]
}

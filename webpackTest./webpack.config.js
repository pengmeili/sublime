const path = require('path')
module.exports = {
  mode: 'development',
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/common',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:  {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              module: true,
              localIdentName: '[name]_[local]--[hash:base54:5]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname,'common'),
    compress: true,
    historyApiFallback: true,
    inline: true,
    overlay: {
      warning: true,
      errors: true
    }
  }
}

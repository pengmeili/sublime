const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin  = require('terser-webpack-plugin');
const common = require('./webpack.config.base.js');
const env = require('../config/prod.config.js');
const AliOss = require('webpack-alioss-plugin');
var ossBaseDir = "assets";
var project = 'lenovo.software.ui';


module.exports = merge(common, {
  mode: 'production',
  devtool: false, // 相比inline-source-map 性能好,不在包内部，体积小
  plugins: [ // 压缩JS
    new TerserPlugin ({
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new AliOss({
      ossBaseDir: ossBaseDir,
      project: project,
      exclude: /sw\.js$|\.(html|txt)$/,
      existCheck: false,
      enableLog: true,
      ignoreError: false,
      removeMode: true
    })
  ]
});

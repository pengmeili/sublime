'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.config')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://10.119.126.58:8882"'
})

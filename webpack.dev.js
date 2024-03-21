const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
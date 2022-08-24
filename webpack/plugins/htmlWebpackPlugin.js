const HtmlWebpackPlugin = require('html-webpack-plugin');

const { patches } = require('../lib/patches')

const config = {
  title: 'Aperture Studios',
  template: patches.appHtml,
  minify: false
}

module.exports = new HtmlWebpackPlugin(config)

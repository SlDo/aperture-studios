const { join, resolve } = require('path')

const { patches, extensions } = require('./lib/patches')
const { jsRules, cssRules, imageRules, fontRules } = require('./lib/rules')
const { htmlPlugin, hmrPlugin } = require('./plugins');
const { devServer } = require('./lib/devServer')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: patches.appEntryPoint,
  output: {
    path: patches.appBuild,
    filename: '[name].bundle.js',
    publicPath: '/',
    clean: true
  },
  context: join(__dirname, '../'),
  resolve: {
    extensions: extensions.map((ext) => `.${ext}`),
  },
  devtool: isDevelopment && "source-map",
  target: 'web',
  devServer,
  plugins: [
    htmlPlugin,
    hmrPlugin
  ],
  module: {
    rules: [
      ...jsRules,
      ...cssRules,
      ...imageRules,
      ...fontRules
    ],
  },
}

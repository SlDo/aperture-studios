const { join } = require('path')

const { patches, extensions } = require('./lib/patches')
const { jsRules, cssRules, imageRules, fontRules } = require('./lib/rules')
const { htmlPlugin, hmrPlugin, miniExtractCssPlugin, stylelintPlugin, copyPlugin } = require('./plugins');
const { devServer } = require('./lib/devServer')
const{ aliases }= require('./lib/aliases')

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
    alias: aliases
  },
  devtool: isDevelopment && "source-map",
  mode: isDevelopment ? 'development' : 'production',
  target: 'web',
  devServer,
  plugins: [
    htmlPlugin,
    hmrPlugin,
    miniExtractCssPlugin,
    stylelintPlugin,
    copyPlugin,
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

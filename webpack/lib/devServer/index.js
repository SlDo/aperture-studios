const { resolve } = require('path');

module.exports = {
  devServer: {
    contentBase: resolve(process.cwd(), 'dist'),
    watchContentBase: true,
    port: 8080,
    historyApiFallback: true,
    open: true,
    hot: true
  }
}

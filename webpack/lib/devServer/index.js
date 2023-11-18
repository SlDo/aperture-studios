const { resolve } = require('path');

module.exports = {
  devServer: {
    static: {
      directory: resolve(process.cwd(), 'build'),
    },
    port: 8080,
    historyApiFallback: true,
    open: true,
    hot: true
  }
}

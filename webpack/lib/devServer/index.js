const { resolve } = require('path');

module.exports = {
  devServer: {
    static: {
      directory: resolve(process.cwd(), 'public'),
    },
    port: 8080,
    historyApiFallback: true,
    open: true,
    hot: true
  }
}

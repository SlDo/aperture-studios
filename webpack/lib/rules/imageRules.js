module.exports = [
  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
  }
]

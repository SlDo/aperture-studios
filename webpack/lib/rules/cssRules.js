module.exports = [
  {
    test: /\.css$/i,
    use: {
      loader: 'css-loader',
      options: {
        exportType: "css-style-sheet",
        import: true
      }
    }
  }
]

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // filename: 'bundle.js',
    // filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
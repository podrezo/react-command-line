var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './examples/main.jsx',
  output: {
    path: path.resolve(__dirname, './demo'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: 'babel-loader'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './examples/index.html'),
  })]
}
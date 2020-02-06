var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './examples/js/main.jsx',
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   filename: 'index_bundle.js',
  //   libraryTarget: 'commonjs2'
  // },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: 'babel-loader'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './examples/index.html'),
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
}
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/CommandLineComponent.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'CommandLineComponent.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: 'babel-loader'
    }]
  }
}
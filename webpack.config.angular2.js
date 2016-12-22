var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './angular2/src/index.js'
  },
  output: {
    path: path.join(__dirname, 'angular2/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  }
}

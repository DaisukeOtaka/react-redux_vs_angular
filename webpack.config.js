var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './react-redux/src/app.jsx'
  },
  output: {
    path: path.join(__dirname, 'react-redux/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          comments: false,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

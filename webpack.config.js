var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/bootstrap.js',
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/assets'),
    publicPath: '/assets/',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin(),
  ],
};

var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './node_modules/jquery/dist/jquery.min.js'},
      {from: './src/app.html', to: 'index.html'},
    ]),
  ],
}

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
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './node_modules/jquery/dist/jquery.min.js'},
      {from: './node_modules/bootswatch/paper/bootstrap.min.css'},
      {from: './node_modules/grommet/grommet-hpe.min.css', to: 'grommet.min.css'},
      {from: './src/app.html', to: 'index.html'},
      {from: './src/css/style.css'},
      {from: './src/css/hpe.css'},
      {from: './src/js/app/logo-black.svg'},
      {from: './src/img/mobile_first.jpg', to: './img/mobile_first.jpg'},
    ]),
  ],
}

var path = require('path');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.cwd());

module.exports = {
  entry: {
    app: path.resolve(process.cwd(), 'app/app.js')
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.html$/,
        exclude: path.resolve(process.cwd(), 'index.html'),
        loaders: [
          'ngtemplate',
          'html'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'index.html'),
      inject: true
    })
  ],
  debug: true,
  devtool: 'cheap-module-eval-source-map'
};

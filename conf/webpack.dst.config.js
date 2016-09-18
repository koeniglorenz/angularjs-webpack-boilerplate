var path = require('path');

var webpack = require('webpack');

var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(process.cwd(), 'app/app.js'),
    vendor: ['angular']
  },
  output: {
    path: "./dst/",
    filename: "[hash]-bundle.js"
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.NoErrorsPlugin(),
    new CleanWebpackPlugin(['dst'], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'index.html'),
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[hash]-vendor.js'),
    new ExtractTextPlugin('[hash]-style.css')
  ],
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
        loader: ExtractTextPlugin.extract('style', 'css')
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
  }
};

var path = require('path');

module.exports = {
  plugins: [],
  externals: {
    angular: 'angular'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|\.spec\.js$)/,
        loaders: ['istanbul-instrumenter', 'eslint']
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
  debug: true
};

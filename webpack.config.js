const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-uniq-ids.js',
    library: 'VueUniqIds',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: 'source-map'
};

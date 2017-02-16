const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './vue-uniq-ids.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-uniq-ids.min.js',
    library: 'VueUniqIds',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],
  devtool: 'source-map'
};

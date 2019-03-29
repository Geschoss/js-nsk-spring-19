const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './typerace/src/main.js',
  output: {
    path: path.resolve(__dirname, './typerace/dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './typerace/dist'
  }
};


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    port: 3001,
    open: false,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};
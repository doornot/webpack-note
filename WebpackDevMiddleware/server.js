const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const devWebpackConfig = require('./webpack.config.dev.js');
const prodWebpackConfig = require('./webpack.config.prod.js');

const app = express();
const config = (process.env.NODE_ENV === 'development' ? devWebpackConfig : prodWebpackConfig);
const compiler = webpack(config);

if (process.env.NODE_ENV === 'development') {
  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
  
  app.use(webpackHotMiddleware(compiler));
}

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
/* global __dirname exports */
var path = require('path');

exports.modifyWebpackConfig = ({ config }) =>
  config.merge({
    resolve: {
      root: path.resolve(__dirname, 'src'),
    },
  });

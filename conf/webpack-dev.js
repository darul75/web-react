require('babel-core/register');

module.exports = require('./webpack-config')({
  client: true
});

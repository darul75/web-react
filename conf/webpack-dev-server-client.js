require('babel/register');

module.exports = [require('./webpack-config')({
    client: true,
  	devserver: true
  }),
  require('./webpack-config')({
    server: true,
    devserver: true
  })
];

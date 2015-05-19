require('babel/register');

module.exports = [require('./webpack-config')({
    client: true,
    production: true 
  }),
  require('./webpack-config')({
    server: true
  })
];
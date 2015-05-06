module.exports = [require('./webpack-config')({
    production: false,
    dev: false
  }),
  require('./webpack-config')({
    production: true,
    dev: true
  })
];
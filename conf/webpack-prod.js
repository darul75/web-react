module.exports = [require('./webpack-config')[1]({
    production: true
  }),
  require('./webpack-config')[0]({
    production: true
  })
];
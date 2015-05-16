require('babel/register')({
  sourceMap: 'inline',

  // include superfluous whitespace characters and line terminators
  compact: false
});

require('./server-dev');

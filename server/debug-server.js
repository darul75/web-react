require('babel/register')({
  sourceMap: 'both',
  retainLines: true
});

// include superfluous whitespace characters and line terminators
// compact: false

require('./server-dev');

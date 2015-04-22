// app.js

// https://github.com/webpack/react-starter/blob/master/config/prerender.jsx

// https://github.com/webpack/react-starter/blob/5f910d23e8f1f36f9f66e5b3ed756c37bfc11c17/NOTES/HowStuffWorks.md

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/dist/'));

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
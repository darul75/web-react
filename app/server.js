// app.js

// https://github.com/webpack/react-starter/blob/master/config/prerender.jsx

// https://github.com/webpack/react-starter/blob/5f910d23e8f1f36f9f66e5b3ed756c37bfc11c17/NOTES/HowStuffWorks.md

//require('babel/register');

import express from 'express';
import routes from '../routes';

var http = require('http');
var path = require('path');

var app = express();


app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname)));

app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
import http from 'http';
import fs from 'fs';
import path from 'path';  

import express from 'express';
import React from 'react';
import Router from 'react-router';

import routes from './routes';
import App from './components/App/App';

var html = fs.readFileSync('./dist/index-prod.html', {encoding:'utf8'});

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('dist'));

app.get('*', function(req, res, next) {
  var markup = '';  

  try {      

    Router.run(routes, req.path, function (Root, state) {
      markup += 
      React.renderToString(React.createElement(Root, { bundle: 'bundle-prod.js' }));
      markup = html.replace('CONTENT', markup);
      res.contentType = "text/html; charset=utf8";
      res.send(markup); 
    });

  } catch (e) {
    console.log('error '+ e);
    return next(e);
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
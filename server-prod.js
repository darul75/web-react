import express from 'express';
import routes from './routes';

var http = require('http');
var path = require('path');

var app = express();


app.set('port', process.env.PORT || 3000);


app.use(express.static('dist'));

app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
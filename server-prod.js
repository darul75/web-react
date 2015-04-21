// app.js

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '\\views');

app.set('view engine', 'js');

var options = {
  jsx: {
    extension: '.js'    
  }  
};

/* */

app.engine('js', require('express-react-views').createEngine(options));

app.use(express.static(__dirname + '/build'));

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
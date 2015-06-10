// NODE
import http from 'http';
import path from 'path';

// EXPRESS
import express from 'express';
import favicon from 'serve-favicon';

// CORE
import renderer from './renderer';

let app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, '../app/images/favicon.ico')));

//
// Register API middleware
// -----------------------------------------------------------------------------
require('./api')(app);

renderer.init('prod');

// activate middleware
app.use(renderer.render);

// activate middleware
app.use(renderer.render);

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

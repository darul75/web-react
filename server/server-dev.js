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
app.use(express.static(path.join(__dirname, '/build')));
app.use(favicon(path.join(__dirname, '../app/images/favicon.ico')));

//
// Register API middlewares
// -----------------------------------------------------------------------------
require('./api')(app);

// check if HMR is enabled
if(module.hot) {
  // accept update of dependency
  module.hot.accept('./api', function() {
    require('./api')(app);
  });
}

// init server renderer
renderer.init('dev');

// activate middleware
app.use(renderer.render);

http.createServer(app).listen(app.get('port'), () => {
  console.log('Expresssss server listening on port ' + app.get('port'));
});

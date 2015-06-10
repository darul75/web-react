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

// This is where the magic happens, we take the locals data we have already
// fetched and seed our stores with data.
// Next we use react-router to run the URL that is provided in routes.jsx
// Finally we use iso in order to render this content so it picks back up
// on the client side and bootstraps the stores.
// init server renderer
renderer.init('prod');

// activate middleware
app.use(renderer.render);

// activate middleware
app.use(renderer.render);

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

// NODE
import http from 'http';
import path from 'path';

// EXPRESS
import express from 'express';
import favicon from 'serve-favicon';

// Profile dev or production
let profile = process.env.DEV ? 'dev' : 'prod',
	publicPath = profile === 'dev' ? 'build' : 'dist';

let app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(publicPath));
app.use(favicon(path.join(__dirname, '../app/images/favicon.ico')));

//
// Register middlewares
// --------------------

// renderer
let renderer = require('./routes/renderer');
// apis
let apiRoutes = require('./routes/api');

//
// Configure middlewares
// --------------------
renderer.init(profile);

//
// Activate middlewares
// --------------------
app.use(apiRoutes);
app.use(renderer.render);

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

//
// check if HMR is enabled
// --------------------
if(module.hot) {
  // accept update of dependency
  module.hot.accept(['./routes/api', './routes/renderer'], () => {
    apiRoutes = require('./routes/api');
    app.use(apiRoutes);
    renderer = require('./routes/renderer');
    renderer.init('dev');
  });
}

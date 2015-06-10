// NODE
import http from 'http';
import fs from 'fs';
import path from 'path';

// EXPRESS
import express from 'express';
import favicon from 'serve-favicon';

// EXTERNALS
import _ from 'lodash';
import Iso from 'iso';
import React from 'react';
import Router from 'react-router';

// CORE
import routes from '../app/routes';
import alt from '../app/alt';

let html = fs.readFileSync('./dist/index-prod.html', {encoding: 'utf8'});

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
app.use((req, res, next) => {
  let markup = '',
      iso = new Iso();

  const oneItemBootstraped = {
    'AppStore': {
      'dataByRestApi': {},
      'data': {
        'iaqpor7p': {
          'id': 'iaqpor7p',
          'complete': false,
          'text': 'fsfsdf'
        }
      }
    }
  };

  alt.bootstrap(JSON.stringify(res.locals.data || oneItemBootstraped));

  try {
    Router.run(routes, req.path, (Handler, state) => {
      // alt flux flush
      let content = React.renderToString(React.createElement(Handler));
      iso.add(content, alt.flush());

      res.contentType = 'text/html; charset=utf8';
      let notFound = _.find(state.routes, {isNotFound: true});

      if (notFound !== undefined) {
        res.status(404);
      }

      // rendering back to client
      markup += iso.render();
      markup = html.replace('CONTENT', markup);

      res.send(markup);
    });
  }
  catch (e) {
    return next(e);
  }
});

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});

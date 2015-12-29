// NODE
import fs from 'fs';

// EXTERNALS
import Helmet from 'react-helmet';
import Iso from 'iso';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';

// CORE
import routes from '../../app/routes-server';
import alt from '../../app/alt';

let html = '';

const renderer = {
  init: (type) => {
    html = type === 'dev' ?
      fs.readFileSync('./assets/index-dev.html', {encoding: 'utf8'})
      :
      fs.readFileSync('./dist/index-prod.html', {encoding: 'utf8'});
  },
  render: (req, res, next) => {
    let markup = '',
      iso = new Iso();

/*    const oneItemBootstraped = {
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
*/
    /* This is where the magic happens, we take the locals data we have already
    fetched and seed our stores with data.
    Next we use react-router to run the URL that is provided in routes.jsx
    Finally we use iso in order to render this content so it picks back up
    on the client side and bootstraps the stores.
    init server renderer
    */
    //alt.bootstrap(JSON.stringify(res.locals.data || oneItemBootstraped));
    alt.bootstrap(JSON.stringify({}));

    try {
      let location = createLocation(req.url);

      match({ routes, location }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        }
        else if (error) {
          res.send(500, error.message);
        }
        else if (renderProps == null) {
          res.send(404, 'Not found');
        }
        else {
          // alt flux flush
          let content = renderToString(<RoutingContext {...renderProps}/>);
          iso.add(content, alt.flush());

          res.contentType = 'text/html; charset=utf8';
          /*let notFound = _.find(state.routes, {isNotFound: true});

          if (notFound !== undefined) {
            res.status(404);
          }*/

          // RENDERING back to client
          let markupContent = iso.render();
          // DOM <head> instrumentation
          let head = Helmet.rewind();
          markup = html.replace('META', head.meta).replace('TITLE', head.title).replace('LINK', head.link).replace('CONTENT', markupContent);
          // SEND response
          res.send(markup);
        }
      });
    }
    catch (e) {
      return next(e);
    }
  }
};

module.exports = renderer;

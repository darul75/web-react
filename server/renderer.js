// NODE
import fs from 'fs';

// EXTERNALS
import _ from 'lodash';
import Iso from 'iso';
import React from 'react';
import Router from 'react-router';

// CORE
import routes from '../app/routes';
import alt from '../app/alt';

let html = '';

var renderer = {
  init: function(type) {
    html = type === 'dev' ?
      fs.readFileSync('./assets/index-dev.html', {encoding: 'utf8'})
      :
      fs.readFileSync('./dist/index-prod.html', {encoding: 'utf8'});
  },
  render: function(req, res, next) {
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

    /* This is where the magic happens, we take the locals data we have already
    fetched and seed our stores with data.
    Next we use react-router to run the URL that is provided in routes.jsx
    Finally we use iso in order to render this content so it picks back up
    on the client side and bootstraps the stores.
    init server renderer
    */
    alt.bootstrap(JSON.stringify(res.locals.data || oneItemBootstraped));

    try {
      Router.run(routes, req.path, (Handler, state) => {
				// alt flux flush
        let content = React.renderToString(React.createElement(Handler));
        iso.add(content, alt.flush());

        res.contentType = 'text/shtml; charset=utf8';
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
  }
};

export default renderer;

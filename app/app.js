// LIBRARY
import Iso from 'iso';
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// DEPENDENCY
import alt from './alt';

const routes = require('./routes');

const history = createBrowserHistory();

if(typeof document !== 'undefined' && window) {
  window.onload = () => {
    /*eslint-disable no-unused-vars*/

    Iso.bootstrap((state, _, container) => {
      alt.bootstrap(state);
      render(<Router history={history}>{routes}</Router>, container);

      /*
        // v0.13.x
        Router.run(routes, Router.HistoryLocation, (Handler) => {
          React.render(<Handler/>, container);
        });
      */

    });
    /*eslint-enable no-unused-vars*/
  };
}

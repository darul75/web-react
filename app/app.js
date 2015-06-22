// LIBRARY
import Iso from 'Iso';
import React from 'react';
import Router from 'react-router';

// DEPENDENCY
import alt from './alt';

let routes = require('./routes');

if(typeof document !== 'undefined' && window) {
  window.onload = () => {
    /*eslint-disable no-unused-vars*/
    Iso.bootstrap((state, _, container) => {
      alt.bootstrap(state);
      Router.run(routes, Router.HistoryLocation, (Handler) => {
        React.render(<Handler/>, container);
      });
    });
    /*eslint-enable no-unused-vars*/
  };
}

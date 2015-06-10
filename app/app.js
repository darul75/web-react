import React from 'react';
import Router from 'react-router';
import alt from './alt';
import Iso from 'Iso';

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

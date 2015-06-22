// LIBRARY
import React from 'react';
import Router from 'react-router';

// DEPENDENCY
let routes = require('./routes');

if(typeof document !== 'undefined' && window) {
  window.onload = () => {
    Router.run(routes, Router.HistoryLocation, (Handler) => {
      React.render(<Handler/>, document.getElementById('app'));
    });
  };
}

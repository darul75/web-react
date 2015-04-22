import React from 'react';

import Home from './home';
import Contact from './contact';
import Header from './header';
import Router from 'react-router';

export default class App extends React.Component {
  clickMe() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        coucou
      </div>
    );
  }
};

const routes = require('./routes');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.body);
// });
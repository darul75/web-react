import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import Application from './application';
import Home from './home';
import Contact from './contact';

export default (
  <Route name="app" path="/" handler={Application}>
    <Route name="home" path="/home" handler={Home}/>
    <Route name="contact" path="/contact" handler={Contact}/>
    <DefaultRoute handler={Home} />
  </Route>
);
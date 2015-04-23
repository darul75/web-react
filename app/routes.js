import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import Application from './components/application';
import Home from './components/home';
import Contact from './components/contact';

export default (
  <Route name="app" path="/" handler={Application}>
    <Route name="home" path="/home" handler={Home}/>
    <Route name="contact" path="/contact" handler={Contact}/>
    <DefaultRoute handler={Home} />
  </Route>
);
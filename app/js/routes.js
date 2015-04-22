'use strict';

import React from 'react';
import Router from 'react-router';
import App from './app';
import Home from './home';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/home" handler={Home}/>    
    <DefaultRoute handler={Home}/>
  </Route>
);
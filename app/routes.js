/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, DefaultRoute} from 'react-router';

// NotFoundRoute

import Application from './components/App/App';
import Contact from './components/Contact/Contact';
import HomeSection from './components/Home/HomeSection';
import TodoSection from './components/Todo/TodoSection';

export default (
  <Route name="app" path="/" handler={Application}>
    <Route name="home" path="/home" handler={HomeSection}/>
    <Route name="todo" path="/todo" handler={TodoSection}/>
    <Route name="contact" path="/contact" handler={Contact}/>
    <DefaultRoute handler={HomeSection} />
  </Route>
);

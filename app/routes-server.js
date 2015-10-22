// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Router, Route, IndexRoute} from 'react-router';

// COMPONENT
import Application from './components/App/App';
import Contact from './components/ContactSection/Contact';
import HomeSection from './components/HomeSection/HomeSection';
import NotFoundSection from './components/NotFoundSection/NotFoundSection';
import TodoSection from './components/TodoSection/TodoSection';

import createLocation from 'history/lib/createLocation';

let history = createLocation();

export default (
  <Router history={history}>
    <Route path='/' component={Application}>
      <Route path='home' component={HomeSection}/>
      <Route path='todo' component={TodoSection}/>
      <Route path='contact' component={Contact}/>
      <IndexRoute component={HomeSection} />
      <Route path='*' component={NotFoundSection} />
    </Route>
  </Router>
);

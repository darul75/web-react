// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, IndexRoute} from 'react-router';

// COMPONENT
import Application from './components/App/App';
import Contact from './components/ContactSection/Contact';
import HomeSection from './components/HomeSection/HomeSection';
import NotFoundSection from './components/NotFoundSection/NotFoundSection';
import TodoSection from './components/TodoSection/TodoSection';

export default (
    <Route component={Application} path='/'>
      <IndexRoute component={HomeSection} />
      <Route component={HomeSection} path='home' />
      <Route component={TodoSection} path='todo' />
      <Route component={Contact} path='contact' />
      <Route component={NotFoundSection} path='*' />
    </Route>
);

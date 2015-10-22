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
    <Route path='/' component={Application}>
      <IndexRoute component={HomeSection} />
      <Route path='home' component={HomeSection}/>
      <Route path='todo' component={TodoSection}/>
      <Route path='contact' component={Contact}/>
      <Route path='*' component={NotFoundSection} />
    </Route>
);

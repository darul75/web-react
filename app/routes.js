import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import Application from './components/App/App';
import Contact from './components/Contact/Contact';
import MainSection from './components/MainSection';
import TodoSection from './components/Todo/TodoSection';

export default (
  <Route name="app" path="/" handler={Application}>    
    <Route name="home" path="/home" handler={MainSection}/>
    <Route name="todo" path="/todo" handler={TodoSection}/>
    <Route name="contact" path="/contact" handler={Contact}/>
    <DefaultRoute handler={MainSection} />
  </Route>
);
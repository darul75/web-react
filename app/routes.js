import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import AppStore from './stores/AppStore'
import Application from './components/Application'
import Home from './components/Home'
import Contact from './components/Contact'
import MainSection from './components/MainSection'

/**
 * Retrieve the current TODO data from the AppStore
 */
function getDataState() {
  return {
    allData: AppStore.getState().data,
    areAllComplete: AppStore.areAllComplete()
  };
}

var mainWrapper = class MainWrapper extends React.Component {  
  constructor() {
    super();
    this.state = getDataState();
  }
  render() {
    return (
      <MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete} />
    );
  }
}

export default (
  <Route name="app" path="/" handler={Application}>
    <Route name="home" path="/home" handler={Home}/>
    <Route name="contact" path="/contact" handler={Contact}/>
    <DefaultRoute handler={mainWrapper} />
  </Route>
);
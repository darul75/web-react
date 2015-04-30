import React from 'react'
import { RouteHandler } from "react-router"
import AppStore from '../stores/AppStore'

import Header from './header'

/**
 * Retrieve the current TODO data from the AppStore
 */
function getDataState() {
  return {
    allTodos: AppStore.getState().data,
    areAllComplete: AppStore.areAllComplete()
  };
}

export default class Application extends React.Component {  
  constructor() {
    super();
    this.state = getDataState();
  }  
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
};
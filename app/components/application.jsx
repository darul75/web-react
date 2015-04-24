import React from 'react'
import { RouteHandler } from "react-router"
import TodoStore from '../stores/TodoStore'

import Header from './header'

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getState().todos,
    areAllComplete: TodoStore.areAllComplete()
  };
}

console.log(getTodoState());

export default class Application extends React.Component {  
  getInitialState() {    
    return getTodoState();
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
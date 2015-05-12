import React from 'react';
import { PropTypes } from 'react';
import TodoItem from './Todo/TodoItem';

export default class MainSection extends React.Component {  
  constructor() {
    super();
    this.propsTypes = {
      allData: PropTypes.object.isRequired,
      areAllComplete: PropTypes.bool.isRequired  
    }
  }
  render() {

    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.allData).length < 1) {
      return null;
    }

    var allTodos = this.props.allData;
    var todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <div>        
        <ul id="todo-list">{todos}</ul>
      </div>
    );
  }
  
};
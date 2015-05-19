import React from 'react';
import { PropTypes } from 'react';

import TodoItem from './TodoItem';
import TodoTextInput from './TodoTextInput';

import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

/**
 * Retrieve the current data from the AppStore
 */
function getDataState() {
  return {
    allData: AppStore.getState().data,
    areAllComplete: AppStore.areAllComplete()
  };
}

export default class TodoSection extends React.Component {
  constructor() {
    super();
    this.state = getDataState();
  }

  componentDidMount() {
    AppStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.unlisten(this.onChange.bind(this));
  }

  render() {
    var allTodos = this.state.allData;
    var todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <div>
        <h1>TODO PAGE</h1>
        <div>
          <TodoTextInput className="edit" id="new-todo" placeholder="What needs to be done ?" onSave={this._onSave.bind(this)} value="" />
          <ul id="todo-list">{todos}</ul>
        </div>
      </div>
    );
  }

  onChange() {
    this.setState(getDataState());
  }

  _onSave(text) {
    if (text.trim()){
      AppActions.create(text);
    }
  }

};

TodoSection.prototype.displayName = "TodoSection";

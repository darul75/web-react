import React from 'react';
import { PropTypes } from 'react';

import TodoItem from './TodoItem';
import TextInput from './TextInput';

import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';


/**
 * Retrieve the current TODO data from the AppStore
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
    this.propsTypes = {
      allData: PropTypes.object.isRequired,
      areAllComplete: PropTypes.bool.isRequired  
    };
    this.state = getDataState();
  }
  forceRerender() {
    this.setState(getDataState());
  }  

  componentDidMount() {
    AppStore.listen(this.forceRerender.bind(this));
  }
  render() {
    
    var allTodos = this.state.allData;
    var todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (      
      <div>
        <div>TODO PAGE</div>
        <div>
          <TextInput id="new-todo" placeholder="What needs to be done?" onSave={this._onSave} value="todo" />
          <ul id="todo-list">{todos}</ul>
        </div>
      </div>
    );
  }

  _onSave(text) {
    if (text.trim()){      
      AppActions.create(text);
    }
  }

  
};

TodoSection.prototype.displayName = "TodoSection";
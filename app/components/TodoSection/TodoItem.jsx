import React from 'react';
import cx from 'classnames';

import AppActions from '../../actions/AppActions';

let { PropTypes } = React;

if (process.env.BROWSER) {
  require('./_TodoItem.scss');  
}

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'TodoItem';
    this.propsTypes = {      
      todo: PropTypes.object.isRequired
    };        
  }

  componentWillMount() {
    this.state = {
      isEditing: false
    };
  }

  render() {
    var todo = this.props.todo;

    return (
      <li className={cx({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <input className="toggle" type="checkbox" checked={todo.complete} onChange={this._onToggleComplete.bind(this)} />
        <label>{this.props.todo.text}</label>
        <button className="destroy" onClick={this._onDestroyClick.bind(this)}>&#10006;</button>
      </li>
    );
  }

  _onToggleComplete() {
    AppActions.toggleComplete(this.props.todo.id);
  }

  _onDestroyClick() {
    AppActions.destroy(this.props.todo.id);
  }
 
};

export default TodoItem;
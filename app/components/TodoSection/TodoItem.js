// LIBRARY
import React from 'react';
import cx from 'classnames';

// FLUX
import AppActions from '../../actions/AppActions';

// COMPONENT
import TodoTextInputEdit from './TodoTextInputEdit';

let { PropTypes } = React;

if (process.env.BROWSER) {
  require('./_TodoItem.scss');
}

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      todo: PropTypes.object.isRequired
    };
  }

  componentWillMount() {
    this.state = {
      complete: false,
      editing: false,
      text: this.props.todo.text
    };
  }

  render() {
    var todo = this.props.todo;

    return (
      <li className={cx({
          'completed': todo.complete,
          'editing': this.state.editing
        })}
        key={todo.id}>
        <div className={cx({'inline': this.state.editing})}>
          <input type='checkbox' className='toggle' disabled={this.state.editing} checked={todo.complete} onChange={this._onClickToggleComplete.bind(this)} title='toggle task state (completed ?)'/>
          <label className={cx({'hidden': this.state.editing})} onClick={this._onClickEdit.bind(this)} title='Edit me by a click'>{todo.text}</label>
          <TodoTextInputEdit className={cx({'hidden': !this.state.editing})} onUpdate={this._onUpdate.bind(this)} onCancelUpdate={this._onCancelUpdate.bind(this)} todo={todo} />
          <button className={cx({'hidden': this.state.editing, 'destroy': true})} onClick={this._onClickRemove.bind(this)} title='remove task'>&#10006;</button>
        </div>
      </li>
    );
  }

  _onClickEdit() {
    this.setState({
      editing: true
    });
  }

  _onClickRemove() {
    AppActions.remove(this.props.todo.id);
  }

  _onClickToggleComplete() {
    AppActions.updateComplete({
      id: this.props.todo.id,
      complete: !this.props.todo.complete
    });
  }

  _onCancelUpdate() {
    this.setState({editing: false});
  }

  _onSave(text) {
    if (text.trim()){
      AppActions.create(text);
    }
  }

  _onUpdate(todo) {
    this.setState({editing: false});
    AppActions.updateText({
      id: todo.id,
      text: todo.text
    });
  }
}

TodoItem.prototype.displayName = 'TodoItem';

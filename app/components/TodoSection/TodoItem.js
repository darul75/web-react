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

    // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
    this.handleOnClickRemove = this.handleOnClickRemove.bind(this);
    this.handleOnClickRemove = this.handleOnClickRemove.bind(this);
    this.handleOnClickToggleComplete = this.handleOnClickToggleComplete.bind(this);
    this.handleOnCancelUpdate = this.handleOnCancelUpdate.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

  componentWillMount() {
    this.state = {
      complete: false,
      editing: false,
      text: this.props.todo.text
    };
  }

  /*eslint-disable react/no-set-state*/
  handleOnClickEdit() {
    this.setState({
      editing: true
    });
  }

  handleOnClickRemove() {
    AppActions.remove(this.props.todo.id);
  }

  handleOnClickToggleComplete() {
    AppActions.updateComplete({
      id: this.props.todo.id,
      complete: !this.props.todo.complete
    });
  }

  handleOnCancelUpdate() {
    this.setState({editing: false});
  }

  handleOnUpdate(todo) {
    this.setState({editing: false});
    AppActions.updateText({
      id: todo.id,
      text: todo.text
    });
  }
  /*eslint-enable react/no-set-state*/

  render() {
    const {todo} = this.props;

    return (
      <li
          className={
          cx({
            'completed': todo.complete,
            'editing': this.state.editing
          })}
          key={todo.id}
      >
        <div className={cx({'inline': this.state.editing})}>
          <input
              checked={todo.complete}
              className='toggle'
              disabled={this.state.editing}
              onChange={this.handleOnClickToggleComplete}
              title='toggle task state (completed ?)'
              type='checkbox'
          />
          <label
              className={cx({'hidden': this.state.editing})}
              onClick={this.handleOnClickEdit}
              title='Edit me by a click'
          >
              {todo.text}
          </label>
          <TodoTextInputEdit
              className={cx({'hidden': !this.state.editing})}
              onCancelUpdate={this.handleOnCancelUpdate}
              onUpdate={this.handleOnUpdate}
              todo={todo}
          />
          <button
              className={cx({'hidden': this.state.editing, 'destroy': true})}
              onClick={this.handleOnClickRemove}
              title='remove task'
          >
              {'X'}
          </button>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    complete: PropTypes.bool,
    id: PropTypes.string,
    text: PropTypes.string
  })
};

TodoItem.prototype.displayName = 'TodoItem';

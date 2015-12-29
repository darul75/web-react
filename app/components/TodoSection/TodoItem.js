// LIBRARY
import React from 'react';
import cx from 'classnames';

// FLUX
import AppActions from '../../actions/AppActions';

// COMPONENT
import UxButton from '../Ux/UxButton';
import TodoTextInputEdit from './TodoTextInputEdit';

const { PropTypes } = React;

// css
if (process.env.BROWSER) {
  require('./_TodoItem.scss');
}

// stateless functional component
const TodoItemCheckbox = ({complete, editing, onChange}) => (
  <input
      checked={complete}
      className='toggle'
      disabled={editing}
      onChange={onChange}
      title='toggle task state (completed ?)'
      type='checkbox'
  />
);

const TodoItemLabel = ({label, editing, onClick}) => (
  <label
      className={cx({'hidden': editing})}
      onClick={onClick}
      title='Edit me by a click'
  >
      {label}
  </label>
);

const TodoItemRemoveBtn = ({editing, onClick}) => (
  <button
      className={cx({'hidden': editing, 'destroy': true})}
      onClick={onClick}
      title='remove task'
  >
      {'X'}
  </button>
);

TodoItemCheckbox.prototype.displayName = 'TodoItemCheckbox';
TodoItemLabel.prototype.displayName = 'TodoItemLabel';
TodoItemRemoveBtn.prototype.displayName = 'TodoItemRemoveBtn';

/*eslint-disable react/no-set-state*/

// component
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
          <TodoItemCheckbox complete={todo.complete} editing={this.state.editing} onChange={this.handleOnClickToggleComplete} />
          <TodoItemLabel editing={this.state.editing} label={todo.text} onClick={this.handleOnClickEdit} />
          <TodoTextInputEdit
              className={cx({'hidden': !this.state.editing})}
              onCancelUpdate={this.handleOnCancelUpdate}
              onUpdate={this.handleOnUpdate}
              todo={todo}
          />
          <TodoItemRemoveBtn editing={this.state.editing} onClick={this.handleOnClickRemove} />
        </div>
      </li>
    );
  }
}
/*eslint-enable react/no-set-state*/

TodoItem.propTypes = {
  todo: PropTypes.shape({
    complete: PropTypes.bool,
    id: PropTypes.string,
    text: PropTypes.string
  })
};

TodoItem.prototype.displayName = 'TodoItem';

// LIBRARY
import React from 'react';

let { PropTypes } = React;

const ENTER_KEY_CODE = 13;

export default class TodoTextInputEdit extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      className: PropTypes.string,
      onCancelUpdate: PropTypes.func.isRequired,
      onUpdate: PropTypes.func.isRequired,
      todo: PropTypes.object.isRequired
    };
    this.state = {
      value: this.props.todo.text
    };
  }

  render() {
    return (
      <div className={this.props.className}>
        <input onChange={this._onChange.bind(this)}
          onKeyDown={this._onKeyDown.bind(this)}
          value={this.state.value}
          autoFocus={true} />
        <button onClick={this._onClickUpdate.bind(this)}>UPDATE</button>
        <button onClick={this._onClickCancel.bind(this)}>CANCEL</button>
      </div>
    );
  }

  _onClickCancel() {
    this.props.onCancelUpdate();
  }

  _onClickUpdate() {
    this.props.onUpdate(this.props.todo);
  }

  _onChange(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
    this.props.todo.text = event.target.value;
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._update();
    }
  }
}

TodoTextInputEdit.prototype.displayName = 'TodoTextInputEdit';

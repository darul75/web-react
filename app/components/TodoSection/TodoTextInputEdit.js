// LIBRARY
import React from 'react';

let { PropTypes } = React;

const ENTER_KEY_CODE = 13;

export default class TodoTextInputEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.todo.text
    };

    // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.handleOnClickCancel = this.handleOnClickCancel.bind(this);
    this.handleOnClickUpdate = this.handleOnClickUpdate.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  handleOnClickCancel() {
    this.props.onCancelUpdate();
  }

  handleOnClickUpdate() {
    this.props.onUpdate(this.props.todo);
  }

  /*eslint-disable react/no-set-state*/
  handleOnChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.todo.text = event.target.value;
  }
  /*eslint-enable react/no-set-state*/

  handleOnKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.handleOnClickUpdate();
    }
  }

  render() {
    const autoFocus = true;
    // <input onChange={this.onChange}
    return (
      <div className={this.props.className}>
        <input
            autoFocus={autoFocus}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnKeyDown}
            value={this.state.value}
        />
        <button onClick={this.handleOnClickUpdate}>
          {'UPDATE'}
        </button>
        <button onClick={this.handleOnClickCancel}>
          {'CANCEL'}
        </button>
      </div>
    );
  }
}

TodoTextInputEdit.propTypes = {
  className: PropTypes.string,
  onCancelUpdate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string
  })
};

TodoTextInputEdit.prototype.displayName = 'TodoTextInputEdit';

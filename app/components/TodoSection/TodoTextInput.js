// LIBRARY
import React from 'react';

let { PropTypes } = React;

const ENTER_KEY_CODE = 13;

export default class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ''
    };

    // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.handleOnClickSave = this.handleOnClickSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  /*eslint-disable react/no-set-state*/
  handleOnChange(event) {
    this.setState({value: event.target.value});
  }

  handleOnClickSave() {
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  }
  /*eslint-enable react/no-set-state*/

  handleOnKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.handleOnClickSave();
    }
  }

  render() {
    const autoFocus = true;
    return (
      <div>
          <input
              autoFocus={autoFocus}
              className={this.props.className}
              id={this.props.id}
              onChange={this.handleOnChange}
              onKeyDown={this.handleOnKeyDown}
              placeholder={this.props.placeholder}
              type='text'
              value={this.state.value}
          />
          <button
              onClick={this.handleOnClickSave}
              title='add task'
          >
              {'ADD'}
          </button>
      </div>
    );
  }
}

TodoTextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

TodoTextInput.prototype.displayName = 'TodoTextInput';

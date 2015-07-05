// LIBRARY
import React from 'react';

let { PropTypes } = React;

const ENTER_KEY_CODE = 13;

export default class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      className: PropTypes.string,
      id: PropTypes.string,
      placeholder: PropTypes.string,
      onSave: PropTypes.func.isRequired,
      value: PropTypes.string
    };
    this.state = {
      value: this.props.value || ''
    };
  }

  render() {
    return (
      <div>
        <input className={this.props.className}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this._onChange.bind(this)}
          onKeyDown={this._onKeyDown.bind(this)}
          value={this.state.value}
          autoFocus={true} />
        <button onClick={this._save.bind(this)} title='add task'>ADD</button>
      </div>
    );
  }

  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  _onChange(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }
}

TodoTextInput.prototype.displayName = 'TodoTextInput';

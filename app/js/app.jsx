import React from 'react';

export default class Component extends React.Component {
  clickMe() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.clickMe}>click me</button>
      </div>
    );
  }
};
import React from 'react';
import { PropTypes } from 'react';
import TodoItem from './Todo/TodoItem';

export default class MainSection extends React.Component {  
  constructor() {
    super();    
  }
  render() {    
    return (
      <div>MAIN PAGE</div>
    );
  }
  
};

MainSection.prototype.displayName = "MainSection";
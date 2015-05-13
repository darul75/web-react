import React from 'react';
import { PropTypes } from 'react';

export default class HomeSection extends React.Component {  
  constructor() {
    super();    
  }
  render() {    
    return (
      <div>
      	<h1>HOME PAGE</h1>
      </div>
    );
  }
  
};

HomeSection.prototype.displayName = "HomeSection";
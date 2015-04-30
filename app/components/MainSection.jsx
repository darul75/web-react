import React from 'react';
import { PropTypes } from 'react';

export default class MainSection extends React.Component {  
  constructor() {
    super();
    this.propsTypes = {
      allTodos: PropTypes.object.isRequired,
      areAllComplete: PropTypes.bool.isRequired  
    }
  }
  render() {
    return (
      <div>
        main section ok
      </div>
    );
  }
};
// LIBRARY
import React from 'react';
import marked from 'marked';

// FLUX
import AppActions from '../../actions/AppActions';

// COMPONENTS
import HomeSectionJson from './HomeSectionJson';

let { PropTypes } = React;

export default class HomeSectionSubPartTwo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <HomeSectionJson {...this.props} content='dispatching zone 2' />;
  }
}

HomeSectionSubPartTwo.propTypes = {
  apiData:
    PropTypes.shape({
      id: PropTypes.number
    })
};

HomeSectionSubPartTwo.prototype.displayName = 'HomeSectionSubPartTwo';

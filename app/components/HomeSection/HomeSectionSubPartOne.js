// LIBRARY
import React from 'react';

// FLUX
import AppActions from '../../actions/AppActions';

// COMPONENTS
import HomeSectionJson from './HomeSectionJson';

const { PropTypes } = React;

export default class HomeSectionSubPartOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeSectionJson {...this.props} content='dispatching zone 1' />;
  }
}

HomeSectionSubPartOne.propTypes = {
  apiData:
    PropTypes.shape({
      id: PropTypes.number
    })
};

HomeSectionSubPartOne.prototype.displayName = 'HomeSectionSubPartOne';

// LIBRARY
import React from 'react';

// FLUX
import AppActions from '../../actions/AppActions';

// stateless functional component
const HomeSectionActionButton = ({onClick}) => (
  <div className='home-section-actions'>
    <button onClick={onClick}>{'FAKE API CALL'}</button>
  </div>
);
HomeSectionActionButton.prototype.displayName = 'HomeSectionActionButton';

// component
export default class HomeSectionActions extends React.Component {
  constructor() {
    super();

    // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    AppActions.fetchGithub();
  }

  render() {
    return <HomeSectionActionButton onClick={this.handleClick} />;
  }
}

HomeSectionActions.prototype.displayName = 'HomeSectionActions';

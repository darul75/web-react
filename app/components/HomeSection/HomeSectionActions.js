// LIBRARY
import React from 'react';

// FLUX
import AppActions from '../../actions/AppActions';

export default class HomeSectionActions extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    AppActions.fetchGithub();
  }

  render() {
    return (
      <div className='home-section-actions'>
        <button onClick={this.handleClick}>{'FAKE API CALL'}</button>
      </div>
    );
  }
}

HomeSectionActions.prototype.displayName = 'HomeSectionActions';

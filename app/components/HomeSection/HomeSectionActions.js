// LIBRARY
import React from 'react';

// FLUX
import AppActions from '../../actions/AppActions';

export default class HomeSectionActions extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='home-section-actions'>
        <button onClick={this._onClick.bind(this)}>FAKE API CALL</button>
      </div>
    );
  }

  _onClick() {
    AppActions.fetchGithub();
  }
}

HomeSectionActions.prototype.displayName = 'HomeSectionActions';

import React from 'react';

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
    AppActions.fetch();
  }
}

HomeSectionActions.prototype.displayName = 'HomeSectionActions';

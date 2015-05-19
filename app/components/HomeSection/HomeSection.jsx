import React from 'react';
import { PropTypes } from 'react';

import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';

/**
 * Retrieve the current data from the AppStore
 */
function getDataState() {
  return {
    apiData: AppStore.getState().dataByRestApi
  };
}

export default class HomeSection extends React.Component {
  constructor() {
    super();
    this.state = getDataState();
  }

  componentDidMount() {
    AppStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.unlisten(this.onChange.bind(this));
  }

  render() {
    return (
      <div>
      	<h1>HOME PAGE</h1>
        <div><button onClick={this._onClick.bind(this)}>FAKE API CALL</button></div>
        <div>{this.state.apiData.data}</div>
      </div>
    );
  }

  _onClick() {
    AppActions.fetch();
  }

  onChange() {
    this.setState(getDataState());
  }

};

HomeSection.prototype.displayName = "HomeSection";

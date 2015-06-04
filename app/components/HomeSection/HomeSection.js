import React from 'react';

import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';

export default class HomeSection extends React.Component {
  constructor() {
    super();
    this.state = HomeSection.getDataState();
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
    this.setState(HomeSection.getDataState());
  }

  // CALL STORE UTILS
  static getDataState() {
    return {
      apiData: AppStore.getState().dataByRestApi
    };
  }
}

HomeSection.prototype.displayName = 'HomeSection';

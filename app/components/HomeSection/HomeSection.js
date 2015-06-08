import React from 'react';

import AppStore from '../../stores/AppStore';
import HomeSectionActions from './HomeSectionActions';
import HomeSectionSubPartOne from './HomeSectionSubPartOne';
import HomeSectionSubPartTwo from './HomeSectionSubPartTwo';

if (process.env.BROWSER) {
  require('./_HomeSection.scss');
}

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
        <HomeSectionActions />
        <HomeSectionSubPartOne />
        <HomeSectionSubPartTwo />
      </div>
    );
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

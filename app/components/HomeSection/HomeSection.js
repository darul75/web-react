// LIBRARY
import React from 'react';

// FLUX
import AppStore from '../../stores/AppStore';
import AppStoreDepending from '../../stores/AppStoreDepending';
import HomeSectionActions from './HomeSectionActions';
import connectToStores from 'alt/utils/connectToStores';

// COMPONENT
import HomeSectionSubPartOne from './HomeSectionSubPartOne';
import HomeSectionSubPartTwo from './HomeSectionSubPartTwo';

if (process.env.BROWSER) {
  require('./_HomeSection.scss');
}

let homeSection = class HomeSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    // retrieve data from store
    let storeProps = HomeSection.getPropsFromStores();

    return (
      <div>
        <h1>HOME PAGE</h1>
        <HomeSectionActions />
        <HomeSectionSubPartOne apiData={storeProps.apiData} />
        <HomeSectionSubPartTwo apiData={storeProps.apiDataDepending}/>
      </div>
    );
  }

  static getStores() {
    return [AppStore, AppStoreDepending];
  }

  static getPropsFromStores() {
    return {
      apiData: AppStore.getState().dataByRestApi,
      apiDataDepending: AppStoreDepending.getState().dataByRestApi
    };
  }
};

homeSection.prototype.displayName = 'HomeSection';

export default connectToStores(homeSection);

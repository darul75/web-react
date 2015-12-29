// LIBRARY
import React from 'react';

// FLUX
import AppStore from '../../stores/AppStore';
import AppStoreDepending from '../../stores/AppStoreDepending';
import HomeSectionActions from './HomeSectionActions';

// COMPONENT
import HomeSectionSubPartOne from './HomeSectionSubPartOne';
import HomeSectionSubPartTwo from './HomeSectionSubPartTwo';

// css
if (process.env.BROWSER) {
  require('./_HomeSection.scss');
}

// stateless functional component
const HomeSectionMarkup = ({apiData, apiDataDepending}) => {
  return (
    <div>
      <h1>{'HOME PAGE'}</h1>
      <HomeSectionActions />
      <HomeSectionSubPartOne apiData={apiData} />
      <HomeSectionSubPartTwo apiData={apiData}/>
      <HomeSectionSubPartTwo apiData={apiDataDepending}/>
    </div>
  );
};
HomeSectionMarkup.prototype.displayName = 'HomeSectionMarkup';

// component
@connectToStores
class HomeSection extends React.Component {
  constructor() {
    super();
  }

  static getStores() {
    return [AppStore, AppStoreDepending];
  }

  static getPropsFromStores() {
    return {
      apiData: AppStore.getState().get('dataByRestApi').toJS(),
      apiDataDepending: AppStoreDepending.getState().get('dataByRestApi').toJS()
    };
  }

  render() {
    // retrieve data from store
    const {apiData, apiDataDepending} = HomeSection.getPropsFromStores();

    const storeData = {
      apiData : apiData.data,
      apiDataDepending : apiDataDepending.data,
    }

    return <HomeSectionMarkup {...storeData} />;
  }
};

HomeSection.prototype.displayName = 'HomeSection';

export default HomeSection;

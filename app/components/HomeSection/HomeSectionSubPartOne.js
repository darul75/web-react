import React from 'react';
import marked from 'marked';

import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';

export default class HomeSectionSubPartOne extends React.Component {
  constructor() {
    super();
    this.state = HomeSectionSubPartOne.getDataState();
  }

  componentDidMount() {
    AppStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.unlisten(this.onChange.bind(this));
  }

  render() {
    var contentMarkup = 'dispatching zone 1';
    if (this.state.apiData.data) {
      contentMarkup = marked('```json\n' + JSON.stringify(this.state.apiData.data, null, 2) + '```', {breaks: true});
    }

    return (
      <div className='home-section-sub-part-one' dangerouslySetInnerHTML={{__html: contentMarkup}}></div>
    );
  }

  _onClick() {
    AppActions.fetch();
  }

  onChange() {
    this.setState(HomeSectionSubPartOne.getDataState());
  }

  // CALL STORE UTILS
  static getDataState() {
    return {
      apiData: AppStore.getState().dataByRestApi
    };
  }
}

HomeSectionSubPartOne.prototype.displayName = 'HomeSectionSubPartOne';

// LIBRARY
import React from 'react';
//import cx from 'classnames';

// FLUX
import RecorderActions from '../../actions/RecorderActions';
import RecorderStore from '../../stores/RecorderStore';
import connectToStores from 'alt/utils/connectToStores';
import makeFinalStore from 'alt/utils/makeFinalStore';

import alt from '../../alt';

if (process.env.BROWSER) {
  require('./_Recorder.scss');
}

const FinalStore = makeFinalStore(alt);

let records = class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: true
    };
    RecorderActions.recordStart();
  }

  render() {
    let showStartClass = this.state.record ? 'hidden' : '';
    let showStopClass = !this.state.record ? 'hidden' : '';
    let recordsMarkup = [];
    const recs = Records.getPropsFromStores().records;
    recs.forEach((record, idx) => {
      recordsMarkup.push(<div key={idx}>
          <span>a: {record.action.toString()} - d: {JSON.stringify(record.data)}</span>
          <button onClick={this._onClickReplay.bind(this, record)}>do</button>
        </div>
      );
    });
    return (
      <div id='recorder'>
        <h4>Recorder</h4>
        <div id='recorder-actions'>
          <button className={showStartClass} onClick={this._onClickStart.bind(this)}>START</button>
          <button className={showStopClass} onClick={this._onClickStop.bind(this)}>STOP</button>
          <button className={showStopClass} onClick={this._onClickReplay.bind(this)}>REPLAY</button>
          <button onClick={this._onClickClear.bind(this)}>CLEAR</button>
        </div>
        {recordsMarkup}
      </div>
    );
  }

  _onClickClear() {
    RecorderActions.recordClear();
  }

  _onClickStart() {
    RecorderActions.recordStart();
    this.setState({record: true});
  }

  _onClickStop() {
    RecorderActions.recordStop();
    this.setState({record: false});
  }

  _onClickReplay() {
    RecorderActions.replay();
  }

  static getStores() {
    return [FinalStore, RecorderStore];
  }

  static getPropsFromStores() {
    return {
      records: RecorderStore.getState().get('records').toJS()
    };
  }
};

records.prototype.displayName = 'Records';

export default connectToStores(records);

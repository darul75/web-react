// LIBRARY
import React from 'react';
//import cx from 'classnames';

// FLUX
import RecorderActions from '../../actions/RecorderActions';
import RecorderStore from '../../stores/RecorderStore';
import connectToStores from 'alt/utils/connectToStores';
import makeFinalStore from 'alt/utils/makeFinalStore';

// import DispatcherRecorder from 'alt/utils/DispatcherRecorder';
import alt from '../../alt';

if (process.env.BROWSER) {
  require('./_Recorder.scss');
}

const FinalStore = makeFinalStore(alt);
// const recorder = new DispatcherRecorder();

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
    let recs = Records.getPropsFromStores().records;
    recs.forEach((record, idx) => {
      recordsMarkup.push(<div key={idx}>
          <button onClick={this._onClickReplayAny.bind(this, record)} title='redo'>=></button>
          <span>a: {record.action.toString()} - d: {JSON.stringify(record.data)}</span>
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
          <button className={showStopClass} onClick={this._onClickClear.bind(this)}>CLEAR</button>
        </div>
        {recordsMarkup}
      </div>
    );
  }

  _onClickClear() {
    RecorderActions.recordStop();
    RecorderActions.recordClear();
    RecorderActions.recordStart();
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
    RecorderActions.recordStop();
    RecorderActions.replay();
    RecorderActions.recordStart();
  }

  _onClickReplayAny(record) {
    alt.dispatch(record.action, record.data);
  }

  static getStores() {
    return [FinalStore, RecorderStore];
  }

  static getPropsFromStores() {
    return {
      records: RecorderStore.getRegisteredEvents()
    };
  }
};

records.prototype.displayName = 'Records';

export default connectToStores(records);

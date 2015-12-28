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

const records = class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: true
    };
    RecorderActions.recordStart();
  }

  handleOnClickClear() {
    RecorderActions.recordStop();
    RecorderActions.recordClear();
    RecorderActions.recordStart();
  }

  /*eslint-disable react/no-set-state*/
  handleOnClickStart() {
    RecorderActions.recordStart();
    this.setState({record: true});
  }

  handleOnClickStop() {
    RecorderActions.recordStop();
    this.setState({record: false});
  }
  /*eslint-enable react/no-set-state*/

  handleOnClickReplay() {
    RecorderActions.recordStop();
    RecorderActions.replay();
    RecorderActions.recordStart();
  }

  handleOnClickReplayAny(record) {
    alt.dispatch(record.action, record.data);
  }

  render() {
    const showStartClass = this.state.record ? 'hidden' : '';
    const showStopClass = !this.state.record ? 'hidden' : '';
    const recordsMarkup = [];
    const recs = Records.getPropsFromStores().records;
    recs.forEach((record, idx) => {
      const click = (record) => {
        handleOnClickReplayAny(record);
      };

      const btn = (props) => {
        return (
          <button
              onClick={click}
              title='redo'
          >
              {'=>'}
          </button>);
      };
      //{'a: '}{record.action.toString()}{' - d: '}{JSON.stringify(record.data)}
      recordsMarkup.push(<div key={idx}>
          {btn}
          <span>
              {'a: '}{record.action.toString()}{' - d: '}
          </span>
        </div>
      );
    });
    return (
      <div id='recorder'>
        <h4>{'Recorder'}</h4>
        <div id='recorder-actions'>
          <button
              className={showStartClass}
              onClick={this.handleOnClickStart}
          >
              {'START'}
          </button>
          <button
              className={showStopClass}
              onClick={this.handleOnClickStop}
          >
              {'STOP'}
          </button>
          <button
              className={showStopClass}
              onClick={this.handleOnClickReplay}
          >
              {'REPLAY'}
          </button>
          <button
              className={showStopClass}
              onClick={this.handleOnClickClear}
          >
              {'CLEAR'}
          </button>
        </div>
        {recordsMarkup}
      </div>
    );
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

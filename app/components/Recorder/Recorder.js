// LIBRARY
import React from 'react';
//import cx from 'classnames';

// FLUX
import RecorderActions from '../../actions/RecorderActions';
import RecorderStore from '../../stores/RecorderStore';
import makeFinalStore from 'alt-utils/lib/makeFinalStore';
import connectToStores from 'alt-utils/lib/connectToStores';

// import DispatcherRecorder from 'alt/utils/DispatcherRecorder';
import alt from '../../alt';

// css
if (process.env.BROWSER) {
  require('./_Recorder.scss');
}

const FinalStore = makeFinalStore(alt);
// const recorder = new DispatcherRecorder();

// stateless functional component
const RecordButton = ({label, klass, onClick}) => (
  <button className={klass} onClick={onClick}>
      {label}
  </button>
);
RecordButton.prototype.displayName = 'RecordButton';

// component
@connectToStores
class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: true
    };
    RecorderActions.recordStart();

    // https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.handleOnClickClear = this.handleOnClickClear.bind(this);
    this.handleOnClickStart = this.handleOnClickStart.bind(this);
    this.handleOnClickStop = this.handleOnClickStop.bind(this);
    this.handleOnClickReplay = this.handleOnClickReplay.bind(this);
    this.handleOnClickReplayAny = this.handleOnClickReplayAny.bind(this);
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

  static getStores() {
    return [FinalStore, RecorderStore];
  }

  static getPropsFromStores() {
    return {
      records: RecorderStore.getRegisteredEvents()
    };
  }

  render() {
    const showStartClass = this.state.record ? 'hidden' : '';
    const showStopClass = !this.state.record ? 'hidden' : '';
    const recordsMarkup = [];
    const recs = Records.getPropsFromStores().records;

    recs.forEach((record, key) => {

      // Arrow functions capture the this value of the enclosing context
      const onClick = () => {
        this.handleOnClickReplayAny(record);
      };

      if (record.data && record.data.gists_url) {
        // long json...so for display skip some parts..
        record.data = 'github api result is too long';
      }

      const props = {record, onClick};

      const RecorderItem = ({record, onClick}) => {
        return (
            <div>
                <button onClick={onClick} title='redo'>{'=>'}</button>
                <span>{'a: '}{record.action.toString()}{' - d: '}{JSON.stringify(record.data)}</span>
            </div>
        );
      };

      recordsMarkup.push(<RecorderItem {...props} key={key} />);
    }, this);


    return (
      <div id='recorder'>
        <h4>{'Recorder'}</h4>
        <div id='recorder-actions'>
          <RecordButton klass={showStartClass} label={'START'} onClick={this.handleOnClickStart} />
          <RecordButton klass={showStopClass} label={'STOP'} onClick={this.handleOnClickStop} />
          <RecordButton klass={showStopClass} label={'REPLAY'} onClick={this.handleOnClickReplay} />
          <RecordButton klass={showStopClass} label={'CLEAR'} onClick={this.handleOnClickClear} />
        </div>
        {recordsMarkup}
      </div>
    );
  }
};

Records.prototype.displayName = 'Records';

export default Records;

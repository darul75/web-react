// LIBRARY
import Immutable, {Map, List} from 'immutable';

// FLUX
import RecorderActions from '../actions/RecorderActions';

// DEPENDENCY
import alt from '../alt';
import immutable from 'alt/utils/ImmutableUtil';
import DispatcherRecorder from 'alt/utils/DispatcherRecorder';

// webpack hot reload
import makeHot from 'alt/utils/makeHot';

let recorderStore = makeHot(alt, immutable(class RecorderStore {
  constructor() {
    this.bindActions(RecorderActions);
    this.state = new Map({
      records: new List(),
      dispatchToken: ''
    });
    this.recorder = new DispatcherRecorder(alt);
  }

  onRecordClear() {
    this.recorder.clear();
  }

  onRecordStart() {
    this.recorder.record();
    let self = this;
    let dispatchToken = alt.dispatcher.register(() => {
      const dumpEvents = self.recorder.serializeEvents();
      //self.setState(self.state.set('records', Immutable.fromJS([payload] /*JSON.parse(dumpEvents)*/)));
      self.setState(self.state.set('records', Immutable.fromJS(self.recorder.events)));
    });
    this.setState(this.state.set('dispatchToken', dispatchToken));
  }

  onRecordStop() {
    this.recorder.stop();
    alt.dispatcher.unregister(this.state.get('dispatchToken'));
  }

  onReplay() {
    setTimeout(() => {
      this.recorder.replay();
    }, 0);
  }

}), 'RecorderStore');

module.exports = recorderStore;

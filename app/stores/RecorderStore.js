// LIBRARY
import {Map, List} from 'immutable';

// FLUX
import RecorderActions from '../actions/RecorderActions';

// DEPENDENCY
import alt from '../alt';
import DispatcherRecorder from 'alt-utils/lib/DispatcherRecorder';

// webpack hot reload
//import makeHot from 'alt/utils/makeHot';

const recorder = new DispatcherRecorder(alt);
recorder.record();

// store
@immutable
class RecorderStore {
  constructor() {
    this.bindActions(RecorderActions);
    this.state = new Map({
      records: new List(),
      dispatchToken: ''
    });
  }

  onRecordClear() {
    recorder.clear();
  }

  onRecordStart() {
    recorder.record();
  }

  onRecordStop() {
    recorder.stop();
  }

  onReplay() {
    recorder.replay(1, () => {
      this.emitChange();
    });
  }

  static getRegisteredEvents() {
    return recorder.events;
  }

}

RecorderStore.prototype.displayName = 'RecorderStore';

export default RecorderStore;

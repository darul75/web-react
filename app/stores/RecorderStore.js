// LIBRARY
import {Map, List} from 'immutable';

// FLUX
import RecorderActions from '../actions/RecorderActions';

// DEPENDENCY
import alt from '../alt';
import DispatcherRecorder from 'alt-utils/lib/DispatcherRecorder';

import { createStore } from 'alt-utils/lib/decorators';
import immutable from 'alt-utils/lib/ImmutableUtil';

const recorder = new DispatcherRecorder(alt);
recorder.record();

// store
@createStore(alt)
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

RecorderStore.displayName = 'RecorderStore';

export default RecorderStore;

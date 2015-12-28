// LIBRARY
import {Map, List} from 'immutable';

// FLUX
import RecorderActions from '../actions/RecorderActions';

// DEPENDENCY
import alt from '../alt';
import immutable from 'alt/utils/ImmutableUtil';
import DispatcherRecorder from 'alt/utils/DispatcherRecorder';

// webpack hot reload
import makeHot from 'alt/utils/makeHot';

const recorder = new DispatcherRecorder(alt);

const recorderStore = makeHot(alt, immutable(class RecorderStore {
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

}), 'RecorderStore');

module.exports = recorderStore;

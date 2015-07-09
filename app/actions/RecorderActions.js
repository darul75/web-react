// DEPENDENCY
import alt from '../alt';

class RecorderActions {
  constructor() {
    this.generateActions(
      'recordClear',
      'recordStart',
      'recordStop'
    );
  }
}

module.exports = alt.createActions(RecorderActions);

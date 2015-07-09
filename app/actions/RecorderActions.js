// DEPENDENCY
import alt from '../alt';

class RecorderActions {
  constructor() {
    this.generateActions(
      'recordClear',
      'recordStart',
      'recordStop',
      'replay'
    );
  }
}

module.exports = alt.createActions(RecorderActions);

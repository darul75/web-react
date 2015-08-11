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

export default alt.createActions(RecorderActions);

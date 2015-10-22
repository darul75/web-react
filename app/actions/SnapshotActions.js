// DEPENDENCY
import alt from '../alt';

class SnapshotActions {
  constructor() {
    this.generateActions(
      'removeSnapshot',
      'bootstrapSnapshot',
      'takeSnapshot'
    );
  }
}

export default alt.createActions(SnapshotActions);

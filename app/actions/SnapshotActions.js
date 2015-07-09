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

module.exports = alt.createActions(SnapshotActions);

import alt from '../alt';

class SnapshotActions {
  constructor() {
    this.generateActions(
      'destroySnapshot',
      'bootstrapSnapshot',
      'takeSnapshot'
    );
  }
}

module.exports = alt.createActions(SnapshotActions);

import alt from '../alt';
import SnapshotActions from '../actions/SnapshotActions';
import _ from 'lodash';

let snapshotStore = alt.createStore(class SnapshotStore {
  constructor() {
    this.bindActions(SnapshotActions);
    this.snapshots = [];
  }

  onBootstrapSnapshot(id) {
    var elt = _.find(this.snapshots, (snap) => {
      return snap.id === id;
    });

    if (elt) {
      // TODO
      // alt.prepare(AppStor)
      alt.bootstrap(elt.data);
      // alt.rollback();
    }
  }

  onTakeSnapshot() {
    var snapshot = {
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
      data: alt.takeSnapshot('AppStore')
    };
    this.snapshots.push(snapshot);
  }

  onDestroySnapshot(id) {
    console.log(id);
    //this.snapshots
  }
}, 'SnapshotStore');

module.exports = snapshotStore;

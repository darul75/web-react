// LIBRARY
import Immutable, {Map, List} from 'immutable';

// FLUX
import SnapshotActions from '../actions/SnapshotActions';

// DEPENDENCY
import alt from '../alt';
import immutable from 'alt/utils/ImmutableUtil';
// webpack hot reload
import makeHot from 'alt/utils/makeHot';

/*eslint-disable react/no-set-state*/
const snapshotStore = makeHot(alt, immutable(class SnapshotStore {
  constructor() {
    this.bindActions(SnapshotActions);
    this.state = new Map({
      snapshots: new List([])
    });
  }

  onBootstrapSnapshot(id) {
    const idx = this.state.get('snapshots').findIndex((snapshot) => {
      return snapshot.id === id;
    });

    if (idx >= 0) {
      // TODO
      // alt.prepare(AppStor)
      let snapshot = this.state.get('snapshots').get(idx);
      alt.bootstrap(Immutable.fromJS(snapshot.data));
      // alt.rollback();
    }
  }

  onTakeSnapshot() {
    const snapshot = {
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
      data: alt.takeSnapshot('AppStore')
    };
    const newList = this.state.get('snapshots').push(snapshot);
    this.setState(this.state.set('snapshots', newList));
  }

  onRemoveSnapshot(id) {
    // find snapshot index in list
    const idx = this.state.get('snapshots').findIndex((snapshot) => {
      return snapshot.id === id;
    });

    if (idx >= 0) {
      const newList = this.state.get('snapshots').delete(idx);
      this.state = this.state.set('snapshots', newList);
    }
  }
}), 'SnapshotStore');
/*eslint-enable react/no-set-state*/

module.exports = snapshotStore;

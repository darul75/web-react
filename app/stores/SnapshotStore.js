// LIBRARY
import Immutable, {Map, List} from 'immutable';

// FLUX
import SnapshotActions from '../actions/SnapshotActions';

// DEPENDENCY
import alt from '../alt';

import { createStore } from 'alt-utils/lib/decorators';
import immutable from 'alt-utils/lib/ImmutableUtil';

/*eslint-disable react/no-set-state*/

// store
@createStore(alt)
@immutable
class SnapshotStore {

  static displayName = 'SnapshotStore';

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
      const snapshot = this.state.get('snapshots').get(idx);
      const data = Immutable.fromJS(snapshot.data);
      alt.bootstrap(data);
      this.setState(this.state.set('idx', idx));
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
      this.setState(this.state.set('snapshots', newList));
    }
  }
}

export default SnapshotStore;

/*eslint-enable react/no-set-state*/

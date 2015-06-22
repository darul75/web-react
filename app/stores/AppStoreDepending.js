// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
import AppStore from './AppStore';
// webpack hot reload
import makeHot from 'alt/utils/makeHot';

let dependingStore = makeHot(alt, class DependingStore {
  constructor() {
    this.bindActions(AppActions);
    this.dataByRestApi = {};
  }

  onFetch() {
    this.waitFor([AppStore.dispatchToken]); // event has to be consumed
    this.dataByRestApi = {data: 'here is dependency store'};
  }
}, 'DependingStore');

module.exports = dependingStore;

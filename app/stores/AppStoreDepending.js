// LIBRARY
import Immutable, {Map} from 'immutable';

// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
import immutable from 'alt/utils/ImmutableUtil';
import AppStore from './AppStore';
// webpack hot reload
import makeHot from 'alt/utils/makeHot';

/*eslint-disable react/no-set-state*/
const dependingStore = makeHot(alt, immutable(class DependingStore {
  constructor() {
    this.bindActions(AppActions);
    this.state = new Map({
      dataByRestApi: new Map({})
    });
  }

  onFetch() {
    this.waitFor([AppStore.dispatchToken]); // event has to be consumed
    this.setState(this.state.set('dataByRestApi', Immutable.fromJS({data: 'here is dependency store'})));
  }
}), 'DependingStore');
/*eslint-enable react/no-set-state*/

module.exports = dependingStore;

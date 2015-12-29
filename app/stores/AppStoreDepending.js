// LIBRARY
import Immutable, {Map} from 'immutable';

// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
import AppStore from './AppStore';

// webpack hot reload
//import makeHot from 'alt/utils/makeHot';

/*eslint-disable react/no-set-state*/

// store
@immutable
class DependingStore {
  constructor() {
    this.bindActions(AppActions);
    this.state = new Map({
      dataByRestApi: new Map({})
    });
  }

  onFetchGithub(data) {
    this.waitFor([AppStore.dispatchToken]); // event has to be consumed
    this.setState(this.state.set('dataByRestApi', Immutable.fromJS({data})));
  }
}
/*eslint-enable react/no-set-state*/

DependingStore.prototype.displayName = 'DependingStore';

export default DependingStore;

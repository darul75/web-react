// LIBRARY
import Immutable, {Map} from 'immutable';

// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
import AppStore from './AppStore';

import { createStore } from 'alt-utils/lib/decorators';
import immutable from 'alt-utils/lib/ImmutableUtil';

/*eslint-disable react/no-set-state*/

// store

@createStore(alt)
@immutable
class DependingStore {

  static displayName = 'DependingStore';

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

export default DependingStore;

/*eslint-enable react/no-set-state*/

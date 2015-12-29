// LIBRARY
import Immutable, {Map} from 'immutable';

// FLUX
import AppActions from '../actions/AppActions';
import SnapshotActions from '../actions/SnapshotActions';

import SnapshotStore from './SnapshotStore';

// DEPENDENCY
import alt from '../alt';

import makeHot from 'alt-utils/lib/makeHot';
import immutable from 'alt-utils/lib/ImmutableUtil';

/*eslint-disable react/no-set-state*/

// store
let appStore = makeHot(alt, immutable(class AppStore {
  constructor() {

    // actions
    this.bindActions(AppActions);
    this.bindAction(AppActions.fetchGithub, this.onFetchGithub);
    this.bindAction(SnapshotActions.bootstrapSnapshot, this.onBootstrapSnapshot);

    // store state
    this.state = new Map({
      dataByRestApi: new Map({}),
      data: new Map({})
    });
  }

  onCreate(text) {
    text = text.trim();
    if (text === '') {
      return false;
    }
    // hand waving of course.
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newData = this.state.get('data').set(id, new Map({
      id,
      complete: false,
      edit: false,
      text
    }));

    this.setState(this.state.set('data', newData));
  }

  onRemove(id) {
    const newData = this.state.get('data').delete(id);
    this.setState(this.state.set('data', newData));
  }

  onRemoveAll() {
    this.setState(this.state.set('data', new Map({})));
  }

  onUpdateComplete(x) {
    let { id, complete } = x;
    this.update(id, { complete });
  }

  onUpdateCompleteAll(x) {
    let { completed } = x;
    // update all map items
    let allTodoKeysIt = this.state.get('data').keys();
    for(let value of allTodoKeysIt){
      this.update(value, {complete: completed});
    }
  }

  onUpdateText(x) {
    let { id, text } = x;
    text = text ? text.trim() : '';
    if (text === '') {
      return false;
    }
    this.update(id, { text });
  }

  update(id, updates) {
    // update item by id check
    const newData = this.state.get('data').update(id, (todo) => {
      const updateKeys = Object.keys(updates);
      updateKeys.forEach((key) => {
        todo = todo.set(key, updates[key]);
      });
      return todo;
    });
    this.setState(this.state.set('data', newData));
  }

  updateAll(updates) {
    for (const id in this.data) {
      this.update(id, updates);
    }
  }

  onBootstrapSnapshot(data) {
    this.waitFor([SnapshotStore.dispatchToken]); // event has to be consumed

    // TODO SEE ANOTHER METHOD TO RETRIEVE IT FROM SNAPSHOT
   /* const snapshots = AppStore.getPropsFromStores().snaps;
    const currentIdx = AppStore.getPropsFromStores().idx;
    data = snapshots[currentIdx];
    var tmp = JSON.parse(data.data)['AppStore'];
    data = tmp.data;

    let newData = new Map({});

    for (const item in data) {
      newData = newData.set(item, new Map(data[item]));
    }

    this.setState(this.state.set('data', newData));*/
  }

  onFetchGithub(data) {
    //this.setState(this.state.set('dataByRestApi', Immutable.fromJS({data: 'hello'})));
    this.setState(this.state.set('dataByRestApi', Immutable.fromJS({data})));
  }

  onDestroyCompleted() {
    for (let id in this.data) {
      if (this.data[id].complete) {
        this.onDestroy(id);
      }
    }
  }

  static getPropsFromStores() {
    return {
      snaps: SnapshotStore.getState().get('snapshots').toJS(),
      idx: SnapshotStore.getState().get('idx')
    }

  }

  static areAllComplete() {
    let { data } = this.getState();
    for (let id in data) {
      if (!data[id].complete) {
        return false;
      }
    }
    return true;
  }
}), 'AppStore');

export default appStore;

/*eslint-enable react/no-set-state*/

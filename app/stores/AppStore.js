// LIBRARY
import Immutable, {Map} from 'immutable';

// FLUX
import AppActions from '../actions/AppActions';

// DEPENDENCY
import alt from '../alt';
import immutable from 'alt/utils/ImmutableUtil';
// webpack hot reload
import makeHot from 'alt/utils/makeHot';

let appStore = makeHot(alt, immutable(class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.bindAction(AppActions.fetchGithub, this.onFetchGithub);
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
      id: id,
      complete: false,
      edit: false,
      text: text
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
    for (var id in this.data) {
      this.update(id, updates);
    }
  }

  onFetchGithub(data) {
    console.log(data);
    //this.setState(this.state.set('dataByRestApi', Immutable.fromJS({data: 'hello'})));
    this.setState(this.state.set('dataByRestApi', Immutable.fromJS({data: data})));
  }

  onDestroyCompleted() {
    for (let id in this.data) {
      if (this.data[id].complete) {
        this.onDestroy(id);
      }
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

module.exports = appStore;

// LIBRARY
import merge from 'object-assign';
import Immutable from 'immutable';

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
    this.state = Immutable.Map({
      dataByRestApi: Immutable.Map([]),
      data: Immutable.Map({})
    });
  }

  update(id, updates) {
    if(this.data[id] && updates){
      this.data[id] = merge(this.data[id], updates);
    }
  }

  updateAll(updates) {
    for (var id in this.data) {
      this.update(id, updates);
    }
  }

  onCreate(text) {
    text = text.trim();
    if (text === '') {
      return false;
    }
    // hand waving of course.
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newData = this.state.get('data').set(id, {
      id: id,
      complete: false,
      text: text
    });

    this.setState(this.state.set('data', newData));
  }

  onFetch() {
    this.setState(this.state.set('dataByRestApi', Immutable.fromJS({data: 'hello'})));
    fetch('https://api.github.com/users/github')
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState(this.state.set('dataByRestApi', Immutable.fromJS({data: json})));
      }
    );
  }

  onUpdateText(x) {
    let { id, text } = x;
    text = text ? text.trim() : '';
    if (text === '') {
      return false;
    }
    this.update(id, { text });
  }

  onToggleComplete(id) {
    const newData = this.state.get('data').update(id, (todo) => {
      todo.complete = !todo.complete;
      return todo;
    });
    this.setState(this.state.set('data', newData));
  }

  onToggleCompleteAll() {
    /*var complete = !todoStore.areAllComplete();
    this.updateAll({ complete });*/
  }

  onDestroy(id) {
    const newData = this.state.get('data').delete(id);
    this.setState(this.state.set('data', newData));
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

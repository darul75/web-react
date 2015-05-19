import alt from '../alt';
import merge from 'object-assign';
import AppActions from '../actions/AppActions';
// import fetch from 'whatwg-fetch';

let appStore = alt.createStore(class AppStore {
  constructor() {
    this.bindActions(AppActions);
    this.dataByRestApi = {};
    this.data = {};
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
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.data[id] = {
      id: id,
      complete: false,
      text: text
    };
  }

  onFetch() {
    this.dataByRestApi = {data: 'hello'};
    fetch('https://api.github.com/users/github')
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.dataByRestApi = {data: json};
        this.emitChange();
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
    let complete = !this.data[id].complete;
    this.update(id, { complete });
  }

  onToggleCompleteAll() {
    /*var complete = !todoStore.areAllComplete();
    this.updateAll({ complete });*/
  }

  onDestroy(id) {
    delete this.data[id];
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
});

module.exports = appStore;

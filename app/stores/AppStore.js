var alt = require('../alt')
var merge = require('object-assign')

var AppActions = require('../actions/AppActions')

var appStore = alt.createStore(class AppStore {
  constructor() {
    this.bindActions(AppActions)

    this.data = {}
  }

  update(id, updates) {
    if(this.data[id] && updates){
      this.data[id] = merge(this.data[id], updates)
    }
  }

  updateAll(updates) {
    for (var id in this.data) {
      this.update(id, updates)
    }
  }

  onCreate(text) {
    text = text.trim()
    if (text === '') {
      return false
    }
    // hand waving of course.
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
    this.data[id] = {
      id: id,
      complete: false,
      text: text
    }
  }

  onUpdateText(x) {
    var { id, text } = x
    text = text ? text.trim() : ''
    if (text === '') {
      return false
    }
    this.update(id, { text })
  }

  onToggleComplete(id) {
    var complete = !this.data[id].complete
    this.update(id, { complete })
  }

  onToggleCompleteAll() {
    var complete = !todoStore.areAllComplete()
    this.updateAll({ complete })
  }

  onDestroy(id) {
    delete this.data[id]
  }

  onDestroyCompleted() {
    for (var id in this.data) {
      if (this.data[id].complete) {
        this.onDestroy(id)
      }
    }
  }

  onReceiveAll() {
    console.log('receive');
  }

  static areAllComplete() {
    var { data } = this.getState()
    for (var id in data) {
      if (!data[id].complete) {
        return false
      }
    }
    return true
  }
})

module.exports = appStore

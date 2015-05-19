var alt = require('../alt');

class AppActions {
  constructor() {
    this.generateActions(
      'create',
      'destroy',
      'toggleComplete',
      'fetch'
    );
  }
}

module.exports = alt.createActions(AppActions);

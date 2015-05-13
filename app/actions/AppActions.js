var alt = require('../alt');

class AppActions {
  constructor() {
    this.generateActions(
      'create',
      'destroy',
      'toggleComplete'
    );
  }
}

module.exports = alt.createActions(AppActions);

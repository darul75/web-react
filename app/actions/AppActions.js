import alt from '../alt';

class AppActions {
  constructor() {
    this.generateActions(
      'create',
      'destroy',
      'destroySnapshot',
      'bootstrapSnapshot',
      'takeSnapshot',
      'toggleComplete',
      'fetch'
    );
  }
}

module.exports = alt.createActions(AppActions);

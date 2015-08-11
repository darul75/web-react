// DEPENDENCY
import alt from '../alt';

class AppActions {
  constructor() {
    this.generateActions(
      'create',
      'fetch',
      'remove',
      'removeAll',
      'updateComplete',
      'updateCompleteAll',
      'updateText'
    );
  }
}

export default alt.createActions(AppActions);

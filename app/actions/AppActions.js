// DEPENDENCY
import alt from '../alt';

class AppActions {
  constructor() {
    this.generateActions(
      'create',
      'remove',
      'removeAll',
      'updateComplete',
      'updateCompleteAll',
      'updateText'
    );
  }

  fetchGithub() {
    return (dispatch) => {
      fetch('https://api.github.com/users/github')
      .then((response) => {
        return response.json();
      }).then((json) => {
        dispatch(json);
      });
    };
  }
}

export default alt.createActions(AppActions);

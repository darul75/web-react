import AppActions from '../actions/AppActions';

module.exports = {

  getAllTodoByApi: function() {
    // simulate retrieving data from a database
    var data = [{id: 'dd'}];

    // simulate success callback
    AppActions.receiveAll(data);
  }

};

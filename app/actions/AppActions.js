var alt = require('../alt')

class AppActions {
  constructor() {
    this.generateActions(
      'create'      
    )
  }
}

module.exports = alt.createActions(AppActions)

var alt = require('../alt')

class AppActions {
  constructor() {
    this.generateActions(
      'create',
      'receiveAll'
    )
  }
}

module.exports = alt.createActions(AppActions)

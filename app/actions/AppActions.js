var alt = require('../alt')

class AppActions {
  constructor() {
    this.generateActions(
      'sayHello'      
    )
  }
}

module.exports = alt.createActions(AppActions)

let renderer = require('../utils/renderer');

let profile = 'dev';

const routesRenderer = {
  init: (type) => {
    profile = type;
    renderer.init(type);
  },
  render: (req, res, next) => {
    renderer.render(req, res, next);
  }
};

//
// check if HMR is enabled
// --------------------
if(module.hot) {
  module.hot.accept(['../utils/renderer'], () => {
    renderer = require('../utils/renderer');
    renderer.init(profile);
  });
}

module.exports = routesRenderer;

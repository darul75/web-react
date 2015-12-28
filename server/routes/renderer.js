let renderer = require('../utils/renderer');

let profile = 'dev';

const routesRenderer = {
  init: (type) => {
    profile = type;
    renderer.init(type);
  },
  render: renderer.render
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

export default routesRenderer;

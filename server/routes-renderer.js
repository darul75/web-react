let renderer = require('./renderer');

let profile = 'dev';

var routesRenderer = {
  init: (type) => {
    profile = type;
    renderer.init(type);
  },
  render: (req, res, next) => {
    renderer.render(req, res, next);
  }
};

if(module.hot) {
  module.hot.accept(['./renderer'], () => {
    renderer = require('./renderer');
    console.log(profile);
    renderer.init(profile);
  });
}

export default routesRenderer;

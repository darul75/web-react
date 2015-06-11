import express from 'express';

/*eslint-disable new-cap*/
let router = express.Router();
/*eslint-enable new-cap*/

let api = require('./api');

router.use('/api/*', (req, res, next) => {
  api.todo(req, res, next);
});

export default router;

if(module.hot) {
  module.hot.accept(['./api'], () => {
    api = require('./api');
  });
}

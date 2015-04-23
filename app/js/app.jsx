import React from 'react';
import Router from 'react-router';

const routes = require('./routes');

/*in the client you need to use Router.run(routes, Router.HistoryLocation, callback), 
and on the server Router.run(routes, req.path, callback).*/

export default function(req, cb) {
  Router.run(routes, req.path, cb);
}



/*Router.run(routes, Router.HistoryLocation, function (Handler) {
  console.log(Handler);
  React.render(<Handler/>, document.body);
});*/




// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.body);
// });
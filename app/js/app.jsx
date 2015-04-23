import React from 'react';
import Router from 'react-router';

const routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Application, state) {  
  React.render(<Application/>, document.getElementById('app'));
  //React.render(<App />, document.getElementById('app'));
});


/*Router.run(routes, Router.HistoryLocation, function (Handler) {
  console.log(Handler);
  React.render(<Handler/>, document.body);
});*/




// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.body);
// });
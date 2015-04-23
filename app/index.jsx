import React from 'react';
import Router from 'react-router';

const routes = require('./routes');

if (process.env.BROWSER) {
  require('./stylesheets/styles.sass');  
}

if(typeof document !== 'undefined' && window) {
  window.onload = function() {
    //React.render(<App />, document.getElementById('app'));
    //React.render(<Html />, document);
    Router.run(routes, Router.HistoryLocation, function(Application, state) {  
  React.render(<Application/>, document.getElementById('app'));
  //React.render(<App />, document.getElementById('app'));
});
    
  }
};



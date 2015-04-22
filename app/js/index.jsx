import React from 'react';
import App from './app';

if (!process.env) {
  require('../stylesheets/styles.sass');
}

if(typeof document !== 'undefined' && window) {
  window.onload = function() {
    React.render(<App />, document.getElementById('app'));
    //React.render(<Html />, document);
    
  }
};



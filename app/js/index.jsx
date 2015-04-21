if (process.env.BROWSER) {
  require('../stylesheets/styles.sass');
}
 
import React from 'react';
import Component from './component';

export default class App extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title></title>          
        </head>
        <body>          
          <div id="root"></div>
          <script src='bundle.js'></script>
        </body>
      </html>      
    );
  }
};

if(typeof document !== 'undefined' && window) {
  window.onload = function() {
    React.render(<Component />, document.getElementById('root'));
  }
};



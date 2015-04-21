if (process.env.BROWSER) {
  require('../stylesheets/styles.sass');
}
 
import React from 'react';
import Component from './component';

export default class App extends React.Component {  
  render() {
    var bundle = this.props.bundle ? this.props.bundle : 'build/bundle.js'
    return (
      <html>
        <head>
          <title></title>          
        </head>
        <body>          
          <div id="root"></div>
          <script src={bundle}></script>
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



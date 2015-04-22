import React from 'react';
import App from './app';

if (!process.env) {
  require('../stylesheets/styles.sass');
}

export default class Html extends React.Component {  
  render() {
    var bundle = this.props.bundle ? this.props.bundle : 'build/bundle.js'
    return (
      <html>
        <head>
          <title></title>          
        </head>
        <body>          
          <App />
          <script src={bundle}></script>
        </body>
      </html>      
    );
  }
};

if(typeof document !== 'undefined' && window) {  
  window.onload = function() {
    React.render(<App />, document.getElementById('app'));
  }
};



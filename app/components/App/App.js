import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

if (process.env.BROWSER) {
  require('./_App.scss');
  require('./_App.sass');
  require('file?name=favicon.ico!../../images/favicon.ico');
}

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className='main-content'>
          <RouteHandler />
        </div>
        <Footer />
      </div>
    );
  }
}

App.prototype.displayName = 'App';

import React from 'react';
import { RouteHandler } from "react-router";
import Header from '../Header/Header';

if (process.env.BROWSER) {
  require('./_App.scss');
  require('file?name=favicon.ico!../../images/favicon.ico');
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />   
        <div className="main-content">     
        	<RouteHandler />
        </div>
      </div>
    );
  }
};
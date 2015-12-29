// LIBRARY
import React from 'react';

// COMPONENT
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Recorder from '../Recorder/Recorder';
import HtmlHeaderTags from '../Document/HtmlHeaderTags';

const { PropTypes } = React;

// css
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
        <HtmlHeaderTags />
        <Header />
        <div className='main-content'>
          {this.props.children}
        </div>
        <Recorder />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

App.prototype.displayName = 'App';

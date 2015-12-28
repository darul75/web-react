// LIBRARY
import React from 'react';
import Helmet from 'react-helmet';

// TODO: do it in store maybe
const metas = require('../../../assets/config.json').helmet;

export default class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>{'CONTACT PAGE'}</h1>
        <Helmet title={metas.title}
            titleTemplate='%s | Contact page'
        />
        <p>{'test the 404 page '}<a href='/middleofnowhere'>{'here'}</a></p>
      </div>
    );
  }
}

Contact.prototype.displayName = 'Contact';

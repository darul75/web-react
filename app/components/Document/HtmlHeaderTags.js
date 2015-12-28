// LIBRARY
import React from 'react';
import Helmet from 'react-helmet';

// TODO: do it in store maybe
const metas = require('../../../assets/config.json').helmet;

export default class HtmlHeaderTags extends React.Component {
  constructor() {
    super();
  }

  render() {
    // DOM <head> instrumentation
    return (
      <div>
        <Helmet
            link={metas.link}
            meta={metas.meta}
            title={metas.title}
        />
      </div>
    );
  }
}

HtmlHeaderTags.prototype.displayName = 'HtmlHeaderTags';

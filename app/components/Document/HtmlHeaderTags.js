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
          title={metas.title}
            meta={metas.meta}
            link={metas.link}
        />
      </div>
    );
  }
}

HtmlHeaderTags.prototype.displayName = 'HtmlHeaderTags';

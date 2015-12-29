// LIBRARY
import React from 'react';
import Helmet from 'react-helmet';

// TODO: do it in store maybe
const metas = require('../../../assets/config.json').helmet;

const HtmlHeaderTags = () => (
  <div>
    <Helmet link={metas.link} meta={metas.meta} title={metas.title} />
  </div>
);

HtmlHeaderTags.prototype.displayName = 'HtmlHeaderTags';

export default HtmlHeaderTags;

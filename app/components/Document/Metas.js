// LIBRARY
import React from 'react';
import Helmet from 'react-helmet';

export default class Metas extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Helmet
          title='My Title'
            meta={[
                {'name': 'description', 'content': 'Helmet application'},
                {'property': 'og:type', 'content': 'article'}
            ]}
            link={[
                {'rel': 'canonical', 'href': 'http://mysite.com/example'},
                {'rel': 'apple-touch-icon', 'href': 'http://mysite.com/img/apple-touch-icon-57x57.png'},
                {'rel': 'apple-touch-icon', 'sizes': '72x72', 'href': 'http://mysite.com/img/apple-touch-icon-72x72.png'}
            ]}
        />
      </div>
    );
  }
}

Metas.prototype.displayName = 'Metas';

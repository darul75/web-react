// LIBRARY
import React from 'react';
import { Link } from 'react-router';

// css
if (process.env.BROWSER) {
  require('./_Header.scss');
}

// list of logo for image loading
const brandings = [
  'react',
  'flux',
  'webpack',
  'nodejs',
  'babel',
  'mocha',
  'javascript',
  'heroku',
  'html-5',
  'css-3',
  'express',
  'lodash'
];

const brandingsMarkup = [];

// stateless functional components
const HeaderLogo = ({elt}) =>
  <img
      height='40'
      src={require('../../images/branding/' + elt + '.svg')}
      width='40'
  />;
HeaderLogo.prototype.displayName = 'HeaderLogo';

brandings.forEach((elt, key) => {
  const props = { key, elt };
  brandingsMarkup.push(<HeaderLogo {...props} />);
});

const Header = () => (
  <div className='header'>
    <div>{brandingsMarkup}</div>
    <header>
      <ul>
        <li><Link to='/home'>{'Home'}</Link></li>
        <li><Link to='/todo'>{'Todo'}</Link></li>
        <li><Link to='/contact'>{'Contact'}</Link></li>
      </ul>
    </header>
  </div>
);

Header.prototype.displayName = 'Header';

export default Header;

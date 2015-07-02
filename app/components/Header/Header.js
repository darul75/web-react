// LIBRARY
import React from 'react';
import { Link } from 'react-router';

const brandings = ['react', 'flux', 'webpack', 'nodejs', 'babel', 'mocha', 'javascript', 'heroku', 'html-5', 'css-3', 'express', 'lodash'];

let brandingsMarkup = [];

brandings.forEach((elt, idx) => {
  brandingsMarkup.push(<img src={require('../../images/branding/' + elt + '.svg')} key={idx} width="40" height="40"/>);
});

if (process.env.BROWSER) {
  require('./_Header.scss');
}

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='header'>
        <div>{brandingsMarkup}</div>
				<header>
					<ul>
            <li><Link to='app'>Home</Link></li>
            <li><Link to='todo'>Todo</Link></li>
            <li><Link to='contact'>Contact</Link></li>
					</ul>
				</header>
      </div>
    );
  }
}

Header.prototype.displayName = 'Header';

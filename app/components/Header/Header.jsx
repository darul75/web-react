import React from 'react';
import { Link } from 'react-router';

let reactLogo = './images/react-logo.png';

if (!process.env.DEV_SERVER) {
  reactLogo = require(reactLogo);
}
console.log(process.env.DEV_SERVER);

if (process.env.BROWSER) {
  require('./_Header.scss');
}

export default class Header extends React.Component {

  render() {
    return (
    	<div className='header'>
        <img src={reactLogo} height='60' />
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

};

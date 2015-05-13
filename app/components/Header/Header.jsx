import React from 'react';
import { Link } from 'react-router';


let reactLogo;

// https://github.com/iam4x/isomorphic-flux-boilerplate/blob/e45e5a8595652a84f09c403e8b15519dbbb4fc3f/webpack/dev.config.js

reactLogo = require('./images/react-logo.png');

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
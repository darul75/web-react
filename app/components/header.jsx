import React from 'react';
import { Link } from 'react-router';

let reactLogo;

// https://github.com/iam4x/isomorphic-flux-boilerplate/blob/e45e5a8595652a84f09c403e8b15519dbbb4fc3f/webpack/dev.config.js

if (process.env.BROWSER) {
  reactLogo = require('../images/react-logo.png');  
}

export default class Header extends React.Component {  
  render() {
    return (
    	<div>
        <img src={reactLogo} height="40" />
				<header>
					<ul>                        
					  <li><Link to="home">Inbox</Link></li>            
            <li><Link to="contact">Contact</Link></li>
					</ul>          
				</header>        				
		  </div> 
    );
  }
};



       
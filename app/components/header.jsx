import React from 'react';
import { Link } from 'react-router';

let reactLogo;

// https://github.com/iam4x/isomorphic-flux-boilerplate/blob/e45e5a8595652a84f09c403e8b15519dbbb4fc3f/webpack/dev.config.js
console.log(process.env.BROWSER);

if (!process.env) {
  reactLogo = require('../images/react-logo.png');
  console.log('coucou', reactLogo) ; 
}


export default class Header extends React.Component {  
  render() {
    return (
    	<div>
        <img src={reactLogo} />
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



       
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {  
  render() {
    return (
    	<div>
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



       
import React from 'react';
import Router from 'react-router';
import App from './app';
import Home from './home';
import { RouteHandler, Link } from 'react-router';

export default class Header extends React.Component {  
  render() {
    return (
    	<div>
				<header>
					<ul>            
					  <li><Link to="home">Inbox</Link></li>            
					</ul>          
				</header>        
				<RouteHandler/>
		  </div> 
    );
  }
};



       
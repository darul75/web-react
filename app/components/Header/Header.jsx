import React from 'react';
import { Link } from 'react-router';
import AppActions from '../../actions/AppActions';
import TextInput from '../Todo/TextInput';



let reactLogo;

// https://github.com/iam4x/isomorphic-flux-boilerplate/blob/e45e5a8595652a84f09c403e8b15519dbbb4fc3f/webpack/dev.config.js

if (process.env.BROWSER) {
  reactLogo = require('../../images/react-logo.png');    
  require('./_Header.scss');
}

export default class Header extends React.Component {  
     
  render() {
    return (
    	<div>        
        <img src={reactLogo} height="60" />
				<header>
					<ul>                        
            <li><Link to="app">Home1</Link></li>
					  <li><Link to="home">Inbox</Link></li>            
            <li><Link to="contact">Contact</Link></li>
					</ul>          
          <TextInput id="new-todo" placeholder="What needs to be done?" onSave={this._onSave} value="todo" />
				</header>        				
		  </div> 
    );
  }

  _onSave(text) {
    if (text.trim()){      
      AppActions.create(text);
    }
  }

};
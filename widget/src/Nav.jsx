// Nav.jsx
// Nav coponent
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Nav.css';
import kushmodaLogo from '../public_assets/kushmoda_logo_white.png';

class Nav extends Component { 
  render() {
    return ( 
      <nav className="navbar navbar-inverse">
	<div className="container-fluid">
	  <div className="navbar-header">
	    <button type="button" className="navbar-toggle collapsed nav-button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
	    </button>
	    <span><img src={kushmodaLogo} className="App-logo" alt="logo" /></span>KushMenus
	  </div>

	  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	    <form className="navbar-form navbar-right">
              <div className="form-group">
		<input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
	  </div>
	</div>
      </nav>
    );
  }
}

export default Nav;

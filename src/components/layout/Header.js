import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	 componentDidMount() {
		
	}
	render() {
		return (
		<header className="w3-container w3-xlarge">
			<p className="w3-left">Book Store</p>
			<p className="w3-right">
			  <i className="fa fa-shopping-cart w3-margin-right" />
			  <i className="fa fa-search" />
			</p>
		  </header>
		);
	}
}

export default connect(state => state )(Header)
import React, { Component } from 'react';
import { reduce } from 'lodash';
import { connect } from 'react-redux';

class Header extends Component {
	componentDidMount() {
		
	}
	render() {
		const {
			cart = [],
		} = this.props.user;

		const totalCart = cart.length > 0 ? reduce(cart || [], (sum, o) => sum + o.quantity, 0) : 0;
		return (
		<header className="w3-container w3-xlarge">
			<p className="w3-left">Book Store</p>
			<p className="w3-right">
			  <i className="fa fa-shopping-cart w3-margin-right" />
			  <span>{totalCart}</span>
			  <i className="fa fa-search" />
			</p>
		  </header>
		);
	}
}

export default connect(state => state)(Header)
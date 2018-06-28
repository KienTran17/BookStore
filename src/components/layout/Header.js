import React, { Component } from 'react';
import { reduce } from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCookie } from '../../../helper'

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
				<Link to="/"><p className="w3-left">Book Store</p></Link>
				<p className="w3-right">
					{
						!getCookie('token') ?
						<div className="log">
							<Link className="btn" to="/sign-up">
								Sign Up
							</Link>
						</div> :
						<div>
							<span className="name-log"> {getCookie('name')} </span>
						</div>
					}
					<div className="cart">
						<Link to="/cart">
							<i className="fa fa-shopping-cart w3-margin-right" />
							<span className="total-cart">{totalCart}</span>
						</Link>
					</div>
					<div className="search">
						<input type="text" className="input-search" />
						<i className="fa fa-search icon-search" />
					</div>
				</p>
			</header>
		);
	}
}

export default connect(state => state)(Header)
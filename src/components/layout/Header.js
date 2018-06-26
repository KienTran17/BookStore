import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	 componentDidMount() {
		
	}
	render() {
		return (
			<header className="py-4 bg-dark">
				<div className="container">
				<nav className="bg-dark navbar-dark">
					<div className="row">
					<div className="col-sm-4">
						<h1 style={{color: 'white'}}><b>Trung Trần</b></h1>
					</div>
					<div className="col-sm-4">
						<form className="form-inline" action="#">
						<input className="form-control mr-sm-2" type="text" placeholder="@something" />
						<button className="btn btn-success" type="submit">Tìm kiếm</button>
						</form>   
					</div>
					<ul className="nav col-sm-4 justify-content-end">
						<li className="nav-item">
						<a className="btn btn-primary" href="#">Đăng nhập</a>
						</li>
						<li className="nav-item">
						<div style={{width: 10}} />
						</li>
						<li className="nav-item">
						<a className="btn btn-success" href="#">Đăng ký</a>
						</li>
					</ul>
					</div>
				</nav>
				</div>
			</header>
		);
	}
}

export default connect(state => state )(Header)
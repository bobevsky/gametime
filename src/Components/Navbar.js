import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import NavbarMenu from './NavbarMenu';

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			active: true,
			menu: false
		};
	}

	toggleHeader = () => {
		this.setState({
			active: !this.state.active,
			menu: false
		});
		this.props.clearState();
	};

	toggleNavbarMenu = () => {
		this.props.fixed();
		this.setState({
			menu: !this.state.menu,
			active: false
		});
	};

	close = () => {
		this.props.clearState();
		this.setState({
			active: false,
			menu: false
		});
	};

	render() {
		const { menu, active } = this.state;

		return (
			<div className="Navbar">
				<div className="container">
					<div className="row flex">
						<div className="col-md-2 col-sm-3 col-xs-5">
							<Link to="/" onClick={this.close}>
								<img
									src={require('../assets/img/logo.png')}
									alt="Logo"
									className="img img-responsive"
								/>
							</Link>
						</div>
						<div className="col-md-2 col-md-offset-8 col-sm-2 col-sm-offset-7 col-xs-2 col-xs-offset-5">
							<span
								className={
									active
										? 'nav-questionmark question-after'
										: 'nav-questionmark'
								}
								onClick={this.toggleHeader}
							>
								?
							</span>
							<h4 className="navbar-h4 hidden-xs">МЕНИ</h4>
							{menu ? (
								<span className="close-btn" onClick={this.close}>
									✕
								</span>
							) : (
								<span className="hamburger" onClick={this.toggleNavbarMenu}>
									☰
								</span>
							)}
						</div>
					</div>
					<div className="row">{menu && <NavbarMenu />}</div>
				</div>
				{active && <Header toggleHeader={this.toggleHeader} />}
			</div>
		);
	}
}

export default Navbar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import NavbarMenu from './NavbarMenu';

class Navbar extends Component {
	state = {
		active: true,
		menu: false
	};

	toggleHeader = () => {
		this.setState(prevState => {
			return {
				active: !prevState.active,
				menu: false
			};
		});
		this.props.clearState();
	};

	toggleNavbarMenu = () => {
		this.props.fixed();
		this.setState(prevState => {
			return {
				menu: !prevState.menu,
				active: false
			};
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
		return (
			<div className="Navbar">
				<div className="container">
					<div className="row flex">
						<div className="col-md-2 col-sm-3 col-xs-5">
							<Link to="/" onClick={this.close}>
								<img src={require('../assets/img/logo.png')} alt="Logo" className="img img-responsive" />
							</Link>
						</div>
						<div className="col-md-2 col-md-offset-8 col-sm-2 col-sm-offset-7 col-xs-2 col-xs-offset-5">
							<span
								className={
									this.state.active
										? 'nav-questionmark question-after'
										: 'nav-questionmark'
								}
								onClick={this.toggleHeader}
							>
								?
							</span>
							<h4 className="navbar-h4 hidden-xs">МЕНИ</h4>
							{this.state.menu ? (
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
					<div className="row">{this.state.menu && <NavbarMenu />}</div>
				</div>
				{this.state.active && <Header toggleHeader={this.toggleHeader} />}
			</div>
		);
	}
}

export default Navbar;

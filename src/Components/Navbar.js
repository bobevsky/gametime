import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
	const [state, setState] = useState({
		isHeaderActive: true,
		isMenuOpen: false
	});

	useEffect(() => {
		state.isMenuOpen &&
			document.body.setAttribute(
				'style',
				'position:fixed; width: 100%; height: 100%; overflow: hidden;'
			);

		return () => document.body.removeAttribute('style');
	}, [state.isMenuOpen]);

	const toggleHeader = () => {
		setState({
			isHeaderActive: !state.isHeaderActive,
			isMenuOpen: false
		});
	};

	const toggleNavbarMenu = () => {
		setState({
			isMenuOpen: !state.isMenuOpen,
			isHeaderActive: false
		});
	};

	const clearState = () => {
		setState({
			isHeaderActive: false,
			isMenuOpen: false
		});
	};

	return (
		<div className="Navbar">
			<div className="container">
				<div className="row flex">
					<div className="col-md-2 col-sm-3 col-xs-5">
						<Link to="/" onClick={clearState}>
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
								state.isHeaderActive
									? 'nav-questionmark question-after'
									: 'nav-questionmark'
							}
							onClick={toggleHeader}
						>
							?
						</span>
						<h4 className="navbar-h4 hidden-xs">МЕНИ</h4>
						{state.isMenuOpen ? (
							<span className="close-btn" onClick={clearState}>
								✕
							</span>
						) : (
							<span className="hamburger" onClick={toggleNavbarMenu}>
								☰
							</span>
						)}
					</div>
				</div>
				<div className="row">{state.isMenuOpen && <NavbarMenu />}</div>
			</div>
			{state.isHeaderActive && <Header toggleHeader={toggleHeader} />}
		</div>
	);
};

export default Navbar;

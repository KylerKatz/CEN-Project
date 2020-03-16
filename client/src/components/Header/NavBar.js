import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem.js';
import './NavBar.css';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Explore: false,
			Login: false,
			Signup: false
		};

		this.highlightNav = this.highlightNav.bind(this);
	}

	highlightNav(item) {
		if (item == 'Explore') {
			this.setState({
				Explore: true,
				Login: false,
				Signup: false
			});
		} else if (item == 'Login') {
			this.setState({
				Explore: false,
				Login: true,
				Signup: false
			});
		} else if (item == 'Signup') {
			this.setState({
				Explore: false,
				Login: false,
				Signup: true
			});
		} else {
			this.setState({
				Explore: false,
				Login: false,
				Signup: false
			});
		}
	}

	render() {
		return (
			<div className="header">
				{/* Logo */}

				<Link
					onClick={() => this.highlightNav('Home')}
					className="nav-title"
					to="/"
				>
					<img className="nav-logo" src={'/goal.png'} alt="Website logo" />

					<span>
						<h1 className="site-name">Career Find</h1>
					</span>
				</Link>

				{/* Page Links */}
				<div className="nav-items">
					<span onClick={() => this.highlightNav('Explore')}>
						<NavItem name={'Explore'} clicked={this.state.Explore} />
					</span>

					<span onClick={() => this.highlightNav('Login')}>
						<NavItem name={'Login'} clicked={this.state.Login} />
					</span>

					<span onClick={() => this.highlightNav('Signup')}>
						<NavItem name={'Signup'} clicked={this.state.Signup} />
					</span>
				</div>
			</div>
		);
	}
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavItem from './NavItem.js';
import './NavBar.css';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Explore: false,
			Login: false,
			Signup: false,
		};

		this.highlightNav = this.highlightNav.bind(this);
	}

	highlightNav(item) {
		if (item == 'Explore') {
			this.setState({
				Explore: true,
				Login: false,
				Signup: false,
			});
		} else if (item == 'Login') {
			this.setState({
				Explore: false,
				Login: true,
				Signup: false,
			});
		} else if (item == 'Signup') {
			this.setState({
				Explore: false,
				Login: false,
				Signup: true,
			});
		} else {
			this.setState({
				Explore: false,
				Login: false,
				Signup: false,
			});
		}
	}

	async logout() {

		// Do the logout process

		axios.get('http://localhost:5000/Logout')
		.then(res => {
			window.location.replace('/Home');
		});

		alert('You have been logged out');
	}

	render() {
		function dashboard() {
			// If admin go to admin dashbaord,

			window.location.replace('/Admin-DashBoard');

			// If student go to student dashbaord

			//this.highlightNav('DashBoard')
		}

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
					<span className="dashboard" onClick={() => dashboard()}>
						DashBoard
						{/* <NavItem name={'DashBoard'} clicked={this.state.Explore} /> */}
					</span>

					<span onClick={() => this.highlightNav('Explore')}>
						<NavItem name={'Explore'} clicked={this.state.Explore} />
					</span>

					<span onClick={() => this.highlightNav('Signup')}>
						<NavItem name={'Signup'} clicked={this.state.Signup} />
					</span>

					{this.props.user == false ? 
						<span>
							<span onClick={() => this.highlightNav('Login')}>
								<NavItem name={'Login'} clicked={this.state.Login} />
							</span>
						</span>
						:
						<span>
							<span className="dashboard" onClick={() => this.logout()}>
								<NavItem name={'Logout'} clicked={this.state.Explore} />
							</span>
						</span>
					}

				</div>
			</div>
		);
	}
}

export default NavBar;

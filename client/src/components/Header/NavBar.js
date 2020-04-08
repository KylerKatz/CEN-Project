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
			DashBoard: false
		};

		this.highlightNav = this.highlightNav.bind(this);
	}

	highlightNav(item) {
		
		if(this.props.user == false){

			if (item == 'Explore') {
				this.setState({
					Explore: true,
					Login: false,
					Signup: false,
					DashBoard: false
				});
			} else if (item == 'Login') {
				this.setState({
					Explore: false,
					Login: true,
					Signup: false,
					DashBoard: false
				});
			} else if (item == 'Signup') {
				this.setState({
					Explore: false,
					Login: false,
					Signup: true,
					DashBoard: false
				});
			} else {
				this.setState({
					Explore: false,
					Login: false,
					Signup: false,
					DashBoard: false
				});
			}
		}
		else {

			if (item == 'Explore') {
				this.setState({
					Explore: true,
					Login: false,
					Signup: false,
					DashBoard: false
				});
			} else if (item == 'Dashboard') {
				this.setState({
					Explore: false,
					Login: false,
					Signup: false,
					DashBoard: true
				});
			} else {
				this.setState({
					Explore: false,
					Login: false,
					Signup: false,
					DashBoard: false
				});
			}

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

	async dashboard() {
		if (this.props.user.isAdmin == true) {
			window.location.replace('/Admin-DashBoard');
		}
		else {
			window.location.replace('/Student-Dashboard')
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

					{this.props.user == false ? '' :
					<span className="dashboard" onClick={() => this.dashboard()}>
						DashBoard
					</span>
					}	

					<span onClick={() => this.highlightNav('Explore')}>
						<NavItem name={'Explore'} clicked={this.state.Explore} />
					</span>

					{this.props.user == false ? 
						<span>
							<span onClick={() => this.highlightNav('Signup')}>
								<NavItem name={'Signup'} clicked={this.state.Signup} />
							</span>

							<span onClick={() => this.highlightNav('Login')}>
								<NavItem name={'Login'} clicked={this.state.Login} />
							</span>
						</span>
						:
						<span>
							<span className="dashboard" onClick={() => this.logout()}>
								Logout
							</span>
						</span>
					}

				</div>
			</div>
		);
	}
}

export default NavBar;

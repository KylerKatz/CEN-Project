import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './views/Home/Home';
import AccessDenied from './views/Miscellaneous-Pages/AccessDenied';
import NavBar from './components/Header/NavBar';
import Explore from './views/Explore/Explore';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import CareerPage from './views/Career-Pages/CareerPage';
import AdminDashboard from './views/Admin-Dashboard/Admin-Dashboard';
import EditPage from './views/Admin-Dashboard/EditPage';
import AddPage from './views/Admin-Dashboard/AddPage';
import StudentDashboard from './views/Student-Dashboard/Student-Dashboard';
import ChatBot from './Chat.js';
import LoginFailed from './views/Miscellaneous-Pages/LoginFailed';
import NotFound from './views/Miscellaneous-Pages/NotFound';
import SignupFailed from './views/Miscellaneous-Pages/SignupFailed';
import SignupFailed2 from './views/Miscellaneous-Pages/SignupFailed2';

class App extends React.Component {
	//create states here
	constructor(props) {
		super(props);
		this.state = {
			clusters: [],
			user: {},
		};
	}

	async componentDidMount() {
		axios
			.get('http://localhost:5000/api/clusters')
			.then((response) => {
				this.setState({ clusters: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get('http://localhost:5000/api/Login').then((res) => {
			console.log(res.data);
			this.setState({ clusters: this.state.clusters, user: res.data });
		});
	}

	render() {
		return (
			<div>
				<div>
					<NavBar user={this.state.user} />
					<Switch>
						<Route exact path="/Home" component={Home} />
						<Route
							exact
							path="/Explore"
							component={(props) => <Explore clusters={this.state.clusters} />}
						/>
						<Route exact path="/Login" component={Login} />
						<Route exact path="/Signup" component={Signup} />
						<Route exact path="/CareerPage" component={CareerPage} />
						{this.state.user == false || this.state.user.isAdmin == false ? (
							<Route exact path="/Admin-Dashboard" component={AccessDenied} />
						) : (
							<Route
								exact
								path="/Admin-Dashboard"
								component={(props) => <AdminDashboard user={this.state.user} />}
							/>
						)}
						<Route exact path="/EditPage" component={EditPage} />
						<Route exact path="/AddPage" component={AddPage} />
						<Route exact path="/LoginFailed" component={LoginFailed} />
						<Route exact path="/AccessDenied" component={AccessDenied} />
						<Route exact path="/SignupFailed" component={SignupFailed} />
						<Route exact path="/SignupFailed2" component={SignupFailed2} />

						{this.state.user == false || this.state.user.isAdmin == true ? (
							<Route exact path="/Student-Dashboard" component={AccessDenied} />
						) : (
							<Route
								exact
								path="/Student-Dashboard"
								component={(props) => (
									<StudentDashboard user={this.state.user} />
								)}
							/>
						)}
						<Route exact path="/">
							<Redirect to="/Home" />
						</Route>
						<Route component={NotFound} />
					</Switch>
				</div>
				<ChatBot />
				)}
			</div>
		);
	}
}

export default App;

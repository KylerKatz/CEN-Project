import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavBar from './components/Header/NavBar';
import Explore from './views/Explore/Explore';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import CareerPage from './views/Career-Pages/CareerPage';
import AdminDashboard from './views/Admin-Dashboard/Admin-Dashboard';
import EditPage from './views/Admin-Dashboard/EditPage';
import AddPage from './views/Admin-Dashboard/AddPage';
import StudentDashboard from './views/Student-Dashboard/Student-Dashboard'

class App extends React.Component {
	//create states here
	constructor(props) {
		super(props);
		this.state = {
			clusters: []
		};
	}

	async componentDidMount() {
		axios.get('http://localhost:5000/api/clusters')
            .then(response => {
                this.setState({ clusters: response.data})
            })
            .catch(function (error){
                console.log(error);
			})			
	}

	render() {
		return (
			<div>
				<div>
					<NavBar />
						<Switch>
							<Route exact path="/Home" component={Home}/>
							<Route
								exact
								path="/Explore"
								component={props => <Explore clusters={this.state.clusters} />}
							/>
							<Route exact path="/Login" component={Login} />
							<Route exact path="/Signup" component={Signup} />
							<Route exact path="/CareerPage" component={CareerPage} />
							<Route exact path="/Admin-Dashboard" component={AdminDashboard} />
							<Route exact path="/EditPage" component={EditPage} />
							<Route exact path="/AddPage" component={AddPage} />
							<Route exact path="/Student-Dashboard" component={StudentDashboard} />

							<Route exact path="/">
								<Redirect to="/Home" />
							</Route>

							<Route component={NotFound} />
						</Switch>
					</div>
				)}
			</div>
		);
	}
}

export default App;

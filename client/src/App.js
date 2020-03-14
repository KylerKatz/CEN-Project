import React, {Component} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavBar from './components/Header/NavBar';
import Explore from './views/Explore/Explore';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import CareerPage from './views/Career-Pages/CareerPage';

class App extends React.Component {

	//create states here 
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			clusters: []
		};
	}

	async componentDidMount() {
		const URL = "http://localhost:5000/api/clusters";
		const response = await fetch(URL);
		const data = await response.json();
		this.setState({
			loaded: true,
			clusters: data
		})

		console.log(this.state.clusters);
	}



	render() {
		return (
			<div>
				{this.state.loaded ? (
					<div>
						<NavBar />
						<Switch>
							<Route exact path="/Home" component={Home} />
							<Route exact path="/Explore" component={Explore} />
							<Route exact path="/Login" component={Login} />
							<Route exact path="/Signup" component={Signup} />
							<Route exact path="/CareerPage" component={CareerPage} />

							<Route exact path="/">
								<Redirect to="/Home" />
							</Route>

							<Route component={NotFound} />
						</Switch>
					</div>) : 
					(<div>Loading.....</div>)}
			</div>
		);
	}
};

export default App;

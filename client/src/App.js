import React, {Component} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './views/Home/Home';
import NotFound from './views/NotFound';
import NavBar from './components/Header/NavBar';
import Explore from './views/Explore/Explore';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import CareerPage from './views/Career-Pages/CareerPage';

const App = () => {

	//create states here 
	return (
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
		</div>
	);
};

export default App;

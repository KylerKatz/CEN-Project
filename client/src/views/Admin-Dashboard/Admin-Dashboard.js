import React from 'react';
import { NavLink } from 'react-router-dom';
import './Admin-Dashboard.css';
import CareerCard from './../../views/Explore/components/CareerCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';

class AdminDashboard extends React.Component {
	render() {
		// const clusters = this.props.clusters.map(cluster => {
		// 	return <CareerCard cluster={cluster} key={cluster.id} />;
		// });

		return (
			<div className="background-explorepage-admin-home">
				<div className="center-background-admin-home">
					<div className="textbox-1-admin-home">
						{/* The username can be replaced with the name of the account that is loged in */}
						<h1 className="text1">Welcome Back username!</h1>
					</div>
					<div className="textbox-2-admin-home">
						<h1 className="text2">
							Make Changes To Any Career, Or Add A New One!
						</h1>
					</div>

					{/* <div className="edit-button">
						<h3>Edit</h3>
					</div> */}

					<div className="career-box-admin-home">
						{/* I added a bunch of CareerBars just so you understand what it will look like, but you should be able to loop through a map of the clusters like last time */}

						<NavLink to="/AddPage">
							<div className="add-button">
								<h3>Add</h3>
							</div>
						</NavLink>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
						<CareerBar></CareerBar>
					</div>
				</div>
			</div>
		);
	}
}

export default AdminDashboard;

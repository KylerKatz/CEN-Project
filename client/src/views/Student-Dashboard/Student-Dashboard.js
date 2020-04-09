import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Student-Dashboard.css';
import ClusterCard from './../../views/Explore/components/ClusterCard';
import CareerPage from '..//Career-Pages/CareerPage';

class StudentDashboard extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		clusters: [],
	// 	};
	// }

	// async componentDidMount() {
	// 	axios
	// 		.get('http://localhost:5000/api/clusters')
	// 		.then((response) => {
	// 			this.setState({ clusters: response.data });
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});
	// }

	render() {
		// const clusters = this.state.clusters.map(cluster => {
		// 	return <ClusterBar cluster={cluster} key={cluster.id} />;
		// });

		// function createCluster() {
		// 	let image = document.getElementsByClassName('add-image')[0].files[0];

		// 	console.log(image);

		// 	// If the image is not provided then we need to use the default image (Still need to do)
		// 	if (!image) {
		// 		image = 'Place holder for now';
		// 		console.log(image);
		// 	}

		// 	const clusterName = document.getElementsByClassName('add-cluster-form')[0]
		// 		.value;

		// 	if (clusterName) {
		// 		// Now, create a new cluster in the DB using clusterName
		// 		// Alert
		// 		alert('Cluster Created');
		// 		// Redirect user back to Admin-Dashboard again
		// 		window.location.replace('/Admin-DashBoard');
		// 	} else {
		// 		alert('Please Enter A Cluster Name');
		// 	}
		// }

		return (
			<div className="background-explorepage-student-home">
				<div className="center-background-student-home">
					<div className="student-dashboard-upper-div">
						<div className="textbox-1-student-home">
							{/* The username can be replaced with the name of the account that is loged in */}
							<h1 className="text1-student">Welcome Back username!</h1>
						</div>
						<div className="student-dashboard-upper-lower-div">
							<div className="student-dashboard-upper-left-div">
								<div className="student-pic-div">
									<img
										className="student-pic"
										// Just a place holder image for now
										src={'./default-profile-picture-png-clip-art.png'}
									></img>
								</div>
								<div className="bio-div">
									<p className="bio-text">Member Since:</p>
									<p className="bio-text">Teacher:</p>
									<p className="bio-text">Achivement Points:</p>
								</div>
							</div>

							<div className="student-dashboard-upper-right-div">
								<div className="achivement-text">
									<h4>Achivements</h4>
								</div>
								<div className="achivements-div"></div>
							</div>
						</div>
					</div>

					<div className="student-dashboard-middle-div">
						<div className="student-dashboard-lower-div-text">
							<h3> Take A Quiz To Earn Points</h3>
						</div>
					</div>
					<div className="student-dashboard-lower-div">
						<div className="student-dashboard-lower-div-text">
							<h3> Chatbot Recommended Careers</h3>
						</div>

						<div className="student-dashboard-recmmmended-cards-div">
							<div className="delete-this-after-testing">
								{' '}
								<NavLink
									className="career-links"
									onClick={() => window.scrollTo(0, 0)}
									to={{
										pathname: '/CareerPage/',
										//component: CareerPage,
										// state: {
										// 	careers: this.props.cluster.careers,
										// },
									}}
								>
									<div className="career-card">Name</div>
								</NavLink>
								<NavLink
									className="career-links"
									onClick={() => window.scrollTo(0, 0)}
									to={{
										pathname: '/CareerPage/',
										//component: CareerPage,
										// state: {
										// 	careers: this.props.cluster.careers,
										// },
									}}
								>
									<div className="career-card">Name</div>
								</NavLink>
								<NavLink
									className="career-links"
									onClick={() => window.scrollTo(0, 0)}
									to={{
										pathname: '/CareerPage/',
										//component: CareerPage,
										// state: {
										// 	careers: this.props.cluster.careers,
										// },
									}}
								>
									<div className="career-card">Name</div>
								</NavLink>
								<NavLink
									className="career-links"
									onClick={() => window.scrollTo(0, 0)}
									to={{
										pathname: '/CareerPage/',
										//component: CareerPage,
										// state: {
										// 	careers: this.props.cluster.careers,
										// },
									}}
								>
									<div className="career-card">Name</div>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StudentDashboard;

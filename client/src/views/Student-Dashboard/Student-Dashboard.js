import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Student-Dashboard.css';
import ClusterCard from './../../views/Explore/components/ClusterCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';
import ClusterBar from './ClusterBar';

class StudentDashboard extends React.Component {
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
		const clusters = this.state.clusters.map(cluster => {
			return <ClusterBar cluster={cluster} key={cluster.id} />;
		});
		
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
			<div className="background-explorepage-admin-home">
				<div className="center-background-admin-home">
					
				</div>
			</div>
		);
	}
}

export default StudentDashboard;
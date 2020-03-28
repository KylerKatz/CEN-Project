import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Admin-Dashboard.css';
import ClusterCard from './../../views/Explore/components/ClusterCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';
import ClusterBar from './ClusterBar';

class AdminDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clusters: []
		};

		this.createCluster = this.createCluster.bind(this)
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


	async createCluster() {
		//let image = document.getElementsByClassName('add-image')[0].files[0];
		//console.log(image);

		// If the image is not provided then we need to use the default image (Still need to do)
		/*
		if (!image) {
			image = 'Place holder for now';
			console.log(image);
		}
		*/

		const clusterName = document.getElementsByClassName('add-cluster-form')[0].value;
		const clusterJobNum = "2 million(default static value)"
		const clusterId = this.state.clusters.length
		const careersLastId = 0

		if (clusterName) {
			
			const newCluster = {
				cluster_name: clusterName,
				cluster_jobnum: clusterJobNum,
				cluster_id: clusterId,
				cluster_careersLastId: careersLastId
			}

			axios.post('http://localhost:5000/api/clusters/addCluster', newCluster)
			.then(res => {
				console.log(res.data)
				window.location = res.data.redirect
			});


			alert('Cluster Created');
			window.location.replace('/Admin-DashBoard')

		} else {
			alert('Please Enter A Cluster Name')
		}
	}

	render() {
		const clusters = this.state.clusters.map(cluster => {
			return <ClusterBar cluster={cluster} key={cluster.id} clusterslength={this.state.clusters.length} />;
		});
		
		function imagePreview() {
			const image = document.getElementsByClassName('add-image')[0].files[0];
			const previewContainer = document.getElementsByClassName('image-preview');
			const previewImage = document.getElementsByClassName(
				'image-preview__image'
			);
			const previewDefaultText = document.getElementsByClassName(
				'image-preview__default-text'
			);
			const middleDiv = document.getElementsByClassName('middle-div');

			if (image) {
				const reader = new FileReader();
				middleDiv[0].style.display = 'flex';
				// previewDefaultText[0].style.display = 'block';
				previewImage[0].style.display = 'block';

				reader.addEventListener('load', function() {
					previewImage[0].setAttribute('src', this.result);
				});

				reader.readAsDataURL(image);
			}
		}
		return (
			<div className="background-explorepage-admin-home">
				<div className="center-background-admin-home">
					<div className="textbox-1-admin-home">
						{/* The username can be replaced with the name of the account that is loged in */}
						<h1 className="text1-admin">Welcome Back username!</h1>
					</div>
					<div className="textbox-2-admin-home">
						<h1 className="text2">
							Make Changes To Any Cluster, Or Add A New One!
						</h1>
					</div>
					<div className="add-cluster-div">
						<div className="add-cluster-top">
							<input
								className="add-cluster-form"
								type="text"
								name="add-image"
								placeholder="Cluster Name"
								accept="image/*"
							></input>

							<input
								className="add-image"
								type="file"
								name="add-cluster"
								placeholder="Cluster Name"
								onChange={() => {
									imagePreview();
								}}
							></input>
							<div className="middle-div">
								<div className="image-preview">
									<img
										src=""
										alt="Image Preview"
										className="image-preview__image"
									></img>
								</div>
								<span className="image-preview__default-text">
									{' '}
									Image Preview
								</span>
							</div>
						</div>
						<div className="cluster-add-bottom">
							<div
								className="add-button-admin"
								onClick={() => {
									this.createCluster();
								}}
							>
								<h3>Create New Cluster</h3>
							</div>
						</div>
					</div>

					<div className="career-box-admin-home">{clusters}</div>
				</div>
			</div>
		);
	}
}

export default AdminDashboard;

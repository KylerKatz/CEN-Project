import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import EditPage from './EditPage';
import AddPage from './AddPage';
import CareerBar from './CareerBar';

class ClusterBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			cluster: this.props.cluster
		};

		this.deleteCluster = this.deleteCluster.bind(this)
	}

	async deleteCluster() {
		
		var answer = window.confirm("Are you sure you want to delete this cluster?")
		
		if(answer === true){
			const clusterid = this.props.cluster.id

			await axios.delete('http://localhost:5000/api/clusters/deleteCluster/'.concat(clusterid))
			.then(res => {
				console.log(res.data)
				//window.location = res.data.redirect
			});
	
			var correctId = 0
	
			for (var i = 0; i < this.props.clusterslength; i++){
				
				if (i != clusterid){
					
					const id = {
						new_id: correctId
					}
	
					await axios.put('http://localhost:5000/api/clusters/updateClusterId/'.concat(i), id)
					.then(res => {
					console.log(res.data)
					});
	
					correctId = correctId + 1;
				}
				
				if (i == this.props.clusterslength - 1) {
					window.location = "/Admin-Dashboard"
				}
			}

		}
		
		else{
				
		}
	

	}
	
	
	clusterCareer = this.props.cluster.careers.map(career => {
		return <CareerBar career={career} clusterid={this.props.cluster.id} key={career.id} />;
	});

	render() {

		function deleteCluster() {
			console.log('Test');
		}

		
		return (
			<div className="cluster-div-admin">
				<div className="cluster-name-div">
					<h1>{this.state.cluster.name}</h1>

					<div className="cluster-bar-right">
						<NavLink onClick={() => window.scrollTo(0, 0)}
							to={{
								pathname: "/AddPage",
								state: {
									careerid: this.state.cluster.careersLastId + 1,
									clusterid: this.state.cluster.id
								}

							}}>
							<img
								className="plus-sign-icon"
								src={'./plus-sign.png'}
								alt="add"
								title="Add To Cluster"
							/>
						</NavLink>

						<img
							onClick={() => {
								this.deleteCluster();
							}}
							className="trashcan-icon-cluster"
							src={'./trashcan.png'}
							alt="remove"
							title="Delete"
						/>
					</div>
				</div>
				{this.clusterCareer}
			</div>
		);
	}
}

export default ClusterBar;

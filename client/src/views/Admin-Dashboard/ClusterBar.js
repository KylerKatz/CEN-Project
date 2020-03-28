import React from 'react';
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
								deleteCluster();
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

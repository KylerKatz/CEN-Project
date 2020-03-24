import React from 'react';
import { NavLink } from 'react-router-dom';
import EditPage from './EditPage';
import AddPage from './AddPage';
import CareerBar from './CareerBar';

class ClusterBar extends React.Component {
	clusterCareer = this.props.cluster.careers.map(career => {
		return <CareerBar career={career} key={career.id} />;
	});

	render() {
		function deleteCluster() {
			console.log('Test');
		}
		return (
			<div className="cluster-div-admin">
				<div className="cluster-name-div">
					<h1>{this.props.cluster.name}</h1>

					<div className="cluster-bar-right">
						<NavLink to="/AddPage" onClick={() => window.scrollTo(0, 0)}>
							<img
								className="plus-sign-icon"
								src={'./plus-sign.png'}
								alt="remove"
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

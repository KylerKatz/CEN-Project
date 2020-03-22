import React from 'react';
import { NavLink } from 'react-router-dom';
import EditPage from './EditPage';
import AddPage from './AddPage';
import CareerBar from './CareerBar';

class ClusterBar extends React.Component {
	
	clusterCareer = this.props.cluster.careers.map(career => {
		return <CareerBar career={career} key={career.id} />
	});

	render() {

		return (
			<div className="cluster-div-admin">
				<div className="cluster-name-div">
					<h1>{this.props.cluster.name}</h1>
					<NavLink to="/AddPage">
						<img
							className="plus-sign-icon"
							src={'./plus-sign.png'}
							alt="remove"
							title="Add To Cluster"
						/>
					</NavLink>
				</div>
				{this.clusterCareer}
			</div>
		);
	}
}

export default ClusterBar;

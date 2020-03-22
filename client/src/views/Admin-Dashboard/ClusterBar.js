import React from 'react';
import { NavLink } from 'react-router-dom';
import EditPage from './EditPage';
import AddPage from './AddPage';
import CareerBar from './CareerBar';

class ClusterBar extends React.Component {
	render() {
		return (
			<div className="cluster-div-admin">
				<div className="cluster-name-div">
					{/* Here is where the custer name is changed */}
					<h1>Cluster Name</h1>
					<NavLink to="/AddPage">
						<img
							className="plus-sign-icon"
							src={'./plus-sign.png'}
							alt="remove"
							title="Add To Cluster"
						/>
					</NavLink>
				</div>
				{/* Down here is where each career is added to each cluster */}
				<CareerBar></CareerBar>
				<CareerBar></CareerBar>
				<CareerBar></CareerBar>
				<CareerBar></CareerBar>
			</div>
		);
	}
}

export default ClusterBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import CareerPage from '../../Career-Pages/CareerPage';
import Explore from '../Explore';

function addCluster() {}

//import Background from './../ClusterCardPictures/Marketing.png'
class ClusterCard extends React.Component {
	render() {
		return (
			<NavLink
				className="career-links"
				onClick={() => window.scrollTo(0, 0)}
				to={{
					pathname: '/CareerPage/',
					//component: CareerPage,
					state: {
						careers: this.props.cluster.careers,
					},
				}}
			>
				<div className="career-card">
					<div
						className="cluster-image-container"
						//style={{ backgroundImage: `url(${Background})` }}
					>
						<img
							className="add-icon-on-card"
							src={'./plus-sign.png'}
							alt="add"
							title="Add Cluster"
							onClick={() => {
								// this.addCluster();
							}}
						/>
						<span className="cluster-card-text">
							{this.props.cluster.name}{' '}
						</span>
					</div>
				</div>
			</NavLink>
		);
	}
}

export default ClusterCard;

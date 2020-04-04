import React from 'react';
import { NavLink } from 'react-router-dom';
import CareerPage from '../../Career-Pages/CareerPage';
import Explore from '../Explore';

class ClusterCard extends React.Component {
	
	render() {
		return (
			<NavLink className='career-links'
				onClick={() => window.scrollTo(0, 0)}
				to={{
					pathname: '/CareerPage/',
					//component: CareerPage,
					state: {
						careers: this.props.cluster.careers
					}
				}}
			>
				<div className="career-card">{this.props.cluster.name}</div>
			</NavLink>
		);
	}
}

export default ClusterCard

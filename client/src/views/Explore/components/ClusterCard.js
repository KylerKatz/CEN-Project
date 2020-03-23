import React from 'react';
import { NavLink } from 'react-router-dom';
import Explore from '../Explore';

class ClusterCard extends React.Component {
	render() {
		return (
			<NavLink
				onClick={() => window.scrollTo(0, 0)}
				to={{
					pathname: '/CareerPage',
					state: {
						cluster: this.props.cluster
					}
				}}
			>
				<div className="career-card">{this.props.cluster.name}</div>
			</NavLink>
		);
	}
}

export default ClusterCard

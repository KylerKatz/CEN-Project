import React from 'react';
import { NavLink } from 'react-router-dom';
import Explore from '../Explore';

class CareerCard extends React.Component {
	render() {
		return (
			<NavLink to={{
				pathname: '/CareerPage',
				state: {
					cluster: this.props.cluster
				}
			}}>
				<div className="career-card">
					{this.props.cluster.name}
				</div>
			</NavLink>
		);
	}
}

export default CareerCard;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Explore from '../Explore';

class CareerCard extends React.Component {
	render() {
		return (
			<NavLink to="/CareerPage">
				<div className="career-card">
					{this.props.cluster.name}
					{this.props.cluster.jobnum}
				</div>
			</NavLink>
		);
	}
}

export default CareerCard;

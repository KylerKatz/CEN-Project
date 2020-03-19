import React from 'react';
import Explore from '../Explore';

class CareerCard extends React.Component {
	render() {
		return <div className="career-card">
			{this.props.cluster.name}
			{this.props.cluster.jobnum}
		</div>;
	}
}

export default CareerCard;


import React from 'react';
import './Explore.css';
import ClusterCard from './components/ClusterCard.js';

class Explore extends React.Component {
	render() {
		const clusters = this.props.clusters
			.filter((cluster) => {
				return cluster.careers.length > 0;
			})
			.map((cluster) => {
				return <ClusterCard cluster={cluster} key={cluster.id} user={this.props.user} extra={false} />;
			});

		return (
			<div className="background-explorepage">
				<div className="center-background-1">
					<div className="textbox-1">
						<h1 className="text1">Explore These Career Fields</h1>
					</div>
					<div className="textbox-2">
						<h1 className="text2">Click On A Career To Learn More</h1>
					</div>

					<div className="career-box">
						<div className="row1">{clusters}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Explore;

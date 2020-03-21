import React from 'react';
import './Explore.css';
import CareerCard from './components/CareerCard.js';
import CareerPage from '..//Career-Pages/CareerPage';

class Explore extends React.Component {
	render() {
		const clusters = this.props.clusters.map(cluster => {
			return <CareerCard cluster={cluster} key={cluster.id} />;
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

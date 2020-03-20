import React from 'react';
import { NavLink } from 'react-router-dom';
import './AddPage.css';
import CareerCard from './../../views/Explore/components/CareerCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';

class AddPage extends React.Component {
	render() {
		// const clusters = this.props.clusters.map(cluster => {
		// 	return <CareerCard cluster={cluster} key={cluster.id} />;
		// });

		return (
			<div className="background-addpage">
				<div className="center-background-addpage"></div>
			</div>
		);
	}
}

export default AddPage;

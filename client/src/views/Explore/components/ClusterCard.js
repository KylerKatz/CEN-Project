import React from 'react';
import { NavLink } from 'react-router-dom';
import CareerPage from '../../Career-Pages/CareerPage';
import Explore from '../Explore';


//import Background from './../ClusterCardPictures/Marketing.png'
class ClusterCard extends React.Component {

	async addCluster() {
		console.log('hello');
	
		const cluster = this.props.cluster.id; 
		console.log(cluster); 
		fetch('http://localhost:5000/api/Signup/Career',{
			method:'post',
			body: cluster,
		});
	
	}

	render() {
		return (
			<div className="career-card-main">
				<img
					className="add-icon-on-card"
					src={'./plus-sign.png'}
					alt="add"
					title="Add Cluster"
					onClick={() => {
						this.addCluster();
					}}
				/>

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
					<div className="career-card-in">
						<div
							className="cluster-image-container"
							//style={{ backgroundImage: `url(${Background})` }}
						>
							<span className="cluster-card-text">
								{this.props.cluster.name}{' '}
							</span>
						</div>

					</div>
				</NavLink>
			</div>
		);
	}
}

export default ClusterCard;

import React from 'react';
import { NavLink } from 'react-router-dom';
import CareerPage from '../../Career-Pages/CareerPage';
import Explore from '../Explore';
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
						<span className="cluster-card-text">
							{this.props.cluster.name}{' '}
						</span>
					</div>

					{/* <div className = "culster-card-text-div"> */}

					{/* </div> */}

					{/* {
						<img
							className="cluster-card-image"
							src={'./61160-8sbe5pbpfw.jpg'}
						></img>
					} */}
				</div>
			</NavLink>
		);
	}
}

export default ClusterCard;

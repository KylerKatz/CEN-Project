import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import CareerPage from '../../Career-Pages/CareerPage';
import Explore from '../Explore';


//import Background from './../ClusterCardPictures/Marketing.png'
function dataURLtoFile(dataurl, filename) {
		var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
		while(n--){
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {type:mime});
}
class ClusterCard extends React.Component {

	consutructor(props) {
		this.Background=dataURLtoFile(this.props.cluster.icon, "icon.png");
	}
	async addCluster() {
		console.log('hello');

		const newObj = {
			email: this.props.user.email,
			cluster: this.props.cluster.id
		}

		axios.put('http://localhost:5000/api/Signup/Career', newObj).then((res) => {
			console.log(res)
		});
	
	}

	render() {
		return (
			<div className="career-card-main">
				{this.props.user == false ? "" :
				<img
					className="add-icon-on-card"
					src={'./plus-sign.png'}
					alt="add"
					title="Add Cluster"
					onClick={() => {
						this.addCluster();
					}}
				/>}

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
							style={{ backgroundImage: `url(${this.Background})` }}
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
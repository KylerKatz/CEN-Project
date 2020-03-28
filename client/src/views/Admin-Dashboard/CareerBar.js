import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import EditPage from './EditPage';

class CareerBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			career: this.props.career, 
			clusterid: this.props.clusterid
		};

		this.handleDelete = this.handleDelete.bind(this)
	}

	async handleDelete() {
		
		const identifier = {
			career_id: this.props.career.id
		}

		await axios.put(('http://localhost:5000/api/clusters/removeCareer/'.concat(this.props.clusterid)),
		 identifier)
		.then(res => {
			console.log(res.data)
			window.location = res.data.redirect
		});
	}

	render() {
		return (
			<div className="career-bar-admin">
				<h3 className="career-name-admin">{this.state.career.name}</h3>

				<div className="career-bar-right">
					<NavLink
						onClick={() => window.scrollTo(0, 0)}
						to={{
							pathname: '/EditPage',
							state: {
								career: this.state.career,
								clusterid: this.state.clusterid
							}
						}}
					>
						<img
							className="edit-icon"
							src={'./edit-icon1.png'}
							alt="edit"
							title="Edit"
						/>
					</NavLink>
					<img
						className="trashcan-icon"
						src={'./trashcan.png'}
						alt="remove"
						title="Delete"
						onClick={this.handleDelete}
					/>
				</div>
			</div>
		);
	}
}

export default CareerBar;

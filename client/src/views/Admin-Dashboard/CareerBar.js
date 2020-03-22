import React from 'react';
import { NavLink } from 'react-router-dom';
import EditPage from './EditPage';

class CareerBar extends React.Component {
	render() {
		return (
			<div className="career-bar-admin">
				<h3 className="career-name-admin">Career Name (Get from clusters) </h3>

				<div className="career-bar-right">
					<NavLink to="/EditPage">
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
					/>
				</div>
			</div>
		);
	}
}

export default CareerBar;

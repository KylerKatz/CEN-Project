import React from 'react';
import { NavLink } from 'react-router-dom';
import EditPage from './EditPage';

class CareerBar extends React.Component {
	render() {
		return (
			<div className="career-bar-admin">
				<h3 className="career-name-admin">{this.props.career.name}</h3>

				<div className="career-bar-right">
					<NavLink
						onClick={() => window.scrollTo(0, 0)}
						to={{
							pathname: '/EditPage',
							state: {
								career: this.props.career
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
					/>
				</div>
			</div>
		);
	}
}

export default CareerBar;

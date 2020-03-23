import React from 'react';
import { NavLink } from 'react-router-dom';

class CareerBubble extends React.Component {
	render() {
		return (
			// This needs some way to get the the career page with the correct information such as passing id in the URL
			<NavLink className="nav" to="/">
				<div className="career-bubble">
					<span>
						<h3>
							{' '}
							Career Name of if you want just the index number (up to you){' '}
						</h3>
					</span>
				</div>
			</NavLink>
		);
	}
}

export default CareerBubble;

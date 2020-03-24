import React from 'react';
import { NavLink } from 'react-router-dom';

class CareerBubble extends React.Component {
	
	handleClick() {
		this.props.respond(this.props.id)
	}
	render() {
		return (
			// This needs some way to get the the career page with the correct information such as passing id in the URL
				<div className="career-bubble" onClick={this.handleClick.bind(this)}>
					<span>
						<h3> {this.props.id} </h3>
					</span>
				</div>

		);
	}
}

export default CareerBubble;

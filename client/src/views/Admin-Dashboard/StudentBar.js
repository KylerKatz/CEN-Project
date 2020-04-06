import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import EditPage from './EditPage';

class StudentBar extends React.Component {
	render() {
		function showDetails(index) {
			const details = document.getElementsByClassName('details-div');

			if (details[index].style.display == 'block') {
				details[index].style.display = 'none';
			} else {
				details[index].style.display = 'block';
			}
		}
		return (
			<div>
				<div className="student-bar">
					<div className="add-student-section">
						<input
							className="checkbox"
							type="checkbox"
							id="vehicle1"
							name="vehicle1"
							value="Bike"
						></input>
					</div>
					<div className="student-name-section">
						<p> This is a name </p>
					</div>
					<div className="student-email-section">
						<p> This is an email </p>
					</div>
					<div className="student-password-section">
						<p> This is a password </p>
					</div>

					<div className="student-details-section">
						<img
							className="details"
							src={'./details.png'}
							alt="details"
							title="Details"
							onClick={() => {
								showDetails(3);
							}}
						></img>
					</div>

					{/* <div className="student-type-section">
            <select className="select-student-type">
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
            </select>
        </div> */}

					{/* <div className="delete-student">
					<img
						className="trashcan-icon"
						src={'./trashcan.png'}
						alt="remove"
						title="Delete"
					></img>
				</div> */}
				</div>
				<div className="details-div"></div>
			</div>
		);
	}
}

export default StudentBar;

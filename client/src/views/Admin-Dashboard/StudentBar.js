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

		function restPassword() {
			var password = window.prompt('Enter The New Password:', 'Password');
			var txt;
			if (
				password == null ||
				password == '' ||
				password == 'Password' ||
				password.length < 6
			) {
				txt =
					'Password Not Reset, Please Try A Different Password. Password Must Be At Least Six Characters Long';
			} else {
				txt = 'Password Reset';
				// Luis take the password from here
			}

			alert(txt);
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
						<p
							className="reset-password"
							onClick={() => {
								restPassword();
							}}
						>
							{' '}
							Reset Password{' '}
						</p>
					</div>

					{/* <div className="student-details-section">
						<img
							className="details"
							src={'./details.png'}
							alt="details"
							title="Details"
							onClick={() => {
								showDetails(3);
							}}
						></img>
					</div> */}
				</div>
				{/* <div className="details-div"></div> */}
			</div>
		);
	}
}

export default StudentBar;

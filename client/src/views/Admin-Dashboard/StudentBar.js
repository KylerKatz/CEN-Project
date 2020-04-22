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
			var password = window.prompt('Enter The New Password:');
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

		function addToClass() {}
		function removeFromClass() {}
		function removeFromSite() {}
		return (
			<div>
				<div className="student-bar">
					<div className="add-student-section"></div>
					<div className="student-name-section">
						<p> {this.props.student.name} </p>
					</div>
					<div className="student-email-section">
						<p> {this.props.student.email} </p>
					</div>
					<div className="student-password-section">
						<img
							src="reset-password-icon.png"
							className="reset-password-icon"
							title="Reset Password"
							onClick={() => {
								restPassword();
							}}
						></img>

						<img
							src="plus-sign.png"
							className="add-student-icon"
							title="Add Student To Your Class"
							onClick={() => {
								addToClass();
							}}
						></img>
						<img
							src="Remove-User-icon.png
							"
							className="remove-student-from-class-icon"
							title="Remove Student From Your Class"
							onClick={() => {
								removeFromClass();
							}}
						></img>
						<img
							src="trashcan.png"
							className="remove-student-icon"
							title="Delete Student Account"
							onClick={() => {
								removeFromSite();
							}}
						></img>
					</div>
				</div>
				{/* <div className="details-div"></div> */}
			</div>
		);
	}
}

export default StudentBar;

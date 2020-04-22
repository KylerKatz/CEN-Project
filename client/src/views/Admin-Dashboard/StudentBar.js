import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import EditPage from './EditPage';

class StudentBar extends React.Component {

	async restPassword() {
		
		var password = window.prompt('Enter The New Password:', 'Password');

		console.log('I have made it here')
		
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
			
			var newInfo = {
				email: this.props.student.email,
				password: this.props.student.password,
				newpassword: password,
				isAdmin: this.props.user.isAdmin
			}

			console.log('I have made it here')

			axios
			.put('http://localhost:5000/api/Signup/Password', newInfo)
			.then((response) => {
				console.log(response)
			})
			.catch(function (error) {
				console.log(error);
			});
		}

		alert(txt);
	}

	async addToClass() {

		var newInfo = {
			isAdmin: this.props.user.isAdmin,
			email: this.props.student.email,
			teacher: this.props.user.name
		}
		
		axios
			.put('http://localhost:5000/api/Signup/Teacher', newInfo)
			.then((response) => {
				console.log(response)
				window.location = 'Admin-DashBoard'
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	async removeFromClass() {

		var newInfo = {
			isAdmin: this.props.user.isAdmin,
			email: this.props.student.email,
			teacher: ''
		}
		
		axios
			.put('http://localhost:5000/api/Signup/Teacher', newInfo)
			.then((response) => {
				console.log(response)
				window.location = 'Admin-DashBoard'
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	async removeFromSite() {

		var newInfo = {
			isAdmin: this.props.user.isAdmin,
			email: this.props.student.email
		}
		
		axios
			.put('http://localhost:5000/api/Signup/Delete', newInfo)
			.then((response) => {
				console.log(response)
				window.location = 'Admin-DashBoard'
			})
			.catch(function (error) {
				console.log(error);
			});

	}




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
				<div className={this.props.user.name == this.props.student.teacher ? "student-bar-class": "student-bar"}>
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
								this.restPassword();
							}}
						></img>

						<img
							src="plus-sign.png"
							className="add-student-icon"
							title="Add Student To Your Class"
							onClick={() => {
								this.addToClass();
							}}
						></img>
						<img
							src="Remove-User-icon.png
							"
							className="remove-student-from-class-icon"
							title="Remove Student From Your Class"
							onClick={() => {
								this.removeFromClass();
							}}
						></img>
						<img
							src="trashcan.png"
							className="remove-student-icon"
							title="Delete Student Account"
							onClick={() => {
								this.removeFromSite();
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

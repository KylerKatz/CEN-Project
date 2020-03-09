import React from 'react';
import './Signup.css';

function Signup() {
	return (
		<div className="background">
			<div className="Signup-background">
				<p className="login-text">Sign Up For A New Account</p>

				<div className="forms">
					<form className="name-input">
						<input type="text" name="email" placeholder="Your Name"></input>
					</form>

					<form className="email-input">
						<input type="email" name="email" placeholder="Email"></input>
					</form>

					<form className="password-input">
						<input
							type="password"
							name="password"
							placeholder="Password"
						></input>
					</form>

					<form className="password-input-confirm">
						<input
							type="password"
							name="password"
							placeholder="Confirm Password"
						></input>
					</form>

					<form className="user-type">
						Student:
						<input
							type="radio"
							name="account type"
							placeholder="Confirm Password"
						></input>
						Teacher:{' '}
						<input
							type="radio"
							name="account type"
							placeholder="Confirm Password"
						></input>
					</form>

					<form className="submit-button">
						<input type="submit" name="submit"></input>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;

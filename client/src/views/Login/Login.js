import React from 'react';
import './Login.css';

function Login() {
	return (
		<div className="background">
			<div className="login-background">
				<p className="login-text">Login To Your Account</p>

				<div className="forms">
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

					<form className="submit-button">
						<input type="submit" name="submit"></input>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;

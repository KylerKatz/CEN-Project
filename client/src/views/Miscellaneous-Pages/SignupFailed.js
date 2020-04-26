import React from 'react';
import './Miscellaneous.css';

const SignupFailed = () => {
	function goBack() {
		window.location.replace('/signup');
	}
	return (
		<div className="home-background">
			<div className="inner-background-AD">
				<h1 className="LF-text"> Signup Failed </h1>
				<p>
					{' '}
					The credentials that were entered are not allowed. Most likely an
					account with that email already exists.
				</p>
				<div
					className="home-button"
					onClick={() => {
						goBack();
					}}
				>
					<p>Signup</p>
				</div>
			</div>
		</div>
	);
};

export default SignupFailed;

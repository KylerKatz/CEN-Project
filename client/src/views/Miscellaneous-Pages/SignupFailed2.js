import React from 'react';
import './Miscellaneous.css';

const SignupFailed2 = () => {
	function goBack() {
		window.location.replace('/signup');
	}
	return (
		<div className="home-background">
			<div className="inner-background-AD">
				<h1 className="LF-text"> Signup Failed </h1>
				<p>
					{' '}
					The credentials that were entered are not allowed. Most likely the
					passwords don't match, please try again.
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

export default SignupFailed2;

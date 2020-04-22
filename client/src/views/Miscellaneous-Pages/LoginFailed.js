import React from 'react';
import './Miscellaneous.css';

const LoginFailed = () => {
	function goBack() {
		window.location.replace('/login');
	}
	return (
		<div className="home-background">
			<div className="inner-background-AD">
				<h1 className="LF-text"> Login Failed </h1>
				<p>
					{' '}
					The credentials that were entered were incorrect, please try again.
				</p>
				<div
					className="home-button"
					onClick={() => {
						goBack();
					}}
				>
					<p>Login</p>
				</div>
			</div>
		</div>
	);
};

export default LoginFailed;

import React from 'react';
import './Miscellaneous.css';

const AccessDenied = () => {
	function goHome() {
		window.location.replace('/home');
	}
	return (
		<div className="home-background">
			<div className="inner-background-AD">
				<h1 className="AD-text"> Access Denied </h1>
				<p>
					{' '}
					You don't have permission to access this page. If you believe you do,
					please make sure you are signed in.
				</p>
				<div
					className="home-button"
					onClick={() => {
						goHome();
					}}
				>
					<p>Home</p>
				</div>
			</div>
		</div>
	);
};

export default AccessDenied;

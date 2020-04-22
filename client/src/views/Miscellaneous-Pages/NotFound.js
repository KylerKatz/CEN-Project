import React from 'react';
import './Miscellaneous.css';

const NotFound = () => {
	function goBack() {
		window.location.replace('/home');
	}
	return (
		<div className="home-background">
			<div className="inner-background-AD">
				<h1 className="LF-text"> 404 Page Not Found </h1>
				<p> The page you entered does not exist.</p>
				<div
					className="home-button"
					onClick={() => {
						goBack();
					}}
				>
					<p>Home</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;

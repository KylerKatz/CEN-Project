import React from 'react';
import './Home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="home-background">
				<div className="center-background-home">
					<div className="top-div">
						<div className="career-img-container">
							<img
								className="career-img"
								src={'/37c83f6.jpg'}
								alt="Website logo"
							/>
						</div>

						<div className="test-container">
							<p className="intro-text">
								{' '}
								Career Find is a web app made to help you discover a wide
								variety of careers. We recommend creating an account on the
								Signup page, and then coming back here to have a conversation
								with the chatbot below. You’ll be asked a few questions to gauge
								which career best suits you. You can also search through all the
								careers on the Explore page. Click on a cluster you find
								interesting and explore away! If you’re up for a challenge, you
								can earn points by completing achievements on your dashboard. We
								hope you learn something new and have fun!
							</p>
						</div>
					</div>

					<div className="bottom-div">
						<div className="chatbot-container">
							<iframe
								className="chatbot-bot-embeded"
								allow="microphone;"
								src="https://console.dialogflow.com/api-client/demo/embedded/41b729cc-ad14-4aa7-bbdc-457da6e1237b"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

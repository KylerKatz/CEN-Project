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
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum.
							</p>
						</div>
					</div>

					<div className="bottom-div">
						<div className="chatbot-container">
							<p> The chatbot will be here </p>
							<div className="cluster-container">
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

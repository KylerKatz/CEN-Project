import React from 'react';
import './CareerPage.css';
import CareerBubble from './CareerBubble';

class CareerPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cluster: this.props.location.state.cluster,
			career: 0
		};
	}

	changeCareer(id) {
		this.setState({
			cluster: this.state.cluster,
			career: id
		})
	}

	render() {

		const str = this.props.location.state.career[this.state.career].videolink
		const str2 = str.substr(str.length - 11)
		const str3 = 'https://www.youtube.com/embed/' + str2

		const careers = this.props.location.state.career.map(career => {
			return <CareerBubble  key={career.id} id={career.id} respond={this.changeCareer.bind(this)}/>;
		});
		

		return (
			<div className="background-careerpage">
				<div className="career-selection-div">
					{careers}
				</div>
				<div className="center-background-2">
					<div className="career-name-div">
		<h1 className="career-name">{this.props.location.state.career[this.state.career].name}</h1>
					</div>

					<div className="career-box-1">
						<div className="left-side-div">
							<div className="description-div">
								<h1 className="description-title">Description</h1>
								<div className="description-text-div">
									<p className="description-text">
										{this.props.location.state.career[this.state.career].description}
									</p>
								</div>
							</div>
							<div className="day-div">
								<h1 className="day-title">A Day In The Life</h1>
								<div className="day-text-div">
									<p className="day-text">
									<iframe
										className="video-edit"
										width="420"
										height="315"
										src= {str3}
									></iframe>
									</p>{' '}
								</div>
							</div>
						</div>
						<div className="right-side-div">
							<div className="salary-div">
								<h1 className="salary-title">Average Salary</h1>
								<div className="salary-text-div">
									<p className="salary-text">
										{this.props.location.state.career[this.state.career].salary}
									</p>
								</div>
							</div>

							<div className="celebrities-div">
								<h1 className="celebrities-title">Celebrities</h1>
								<div className="celebrities-text-div">
									<p className="celebrities-text">
									{this.props.location.state.career[this.state.career].celebrities}
									</p>{' '}
								</div>
							</div>

							<div className="classes-div">
								<h1 className="classes-title">Relevant Classes</h1>
								<div className="classes-text-div">
									<p className="classes-text">
										{this.props.location.state.career[this.state.career].classes}
									</p>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CareerPage;

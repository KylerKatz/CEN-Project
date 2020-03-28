import React from 'react';
import './CareerPage.css';
import CareerBubble from './CareerBubble';

class CareerPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			careers: this.props.location.state.careers,
			career: 0,
			index: 0
		};

		this.changeCareer = this.changeCareer.bind(this)
	}

	getIndex(id) {
		return this.props.location.state.careers.findIndex(career => career.id === id)
	}

	changeCareer(id) {
		this.setState({
			careers: this.state.careers,
			career: id,
			index: this.getIndex(id)
		})
	}

	render() {

		const str = this.state.careers[this.state.index].videolink
		const str2 = str.substr(str.length - 11)
		const str3 = 'https://www.youtube.com/embed/' + str2

		const careers = this.state.careers.map(career => {
			return <CareerBubble  key={career.id} id={career.id} name={career.name} respond={this.changeCareer.bind(this)}/>;
		});
		

		return (
			<div className="background-careerpage">
				<div className="career-selection-div">
					{careers}
				</div>
				<div className="center-background-2">
					<div className="career-name-div">
		<h1 className="career-name">{this.state.careers[this.state.index].name}</h1>
					</div>

					<div className="career-box-1">
						<div className="left-side-div">
							<div className="description-div">
								<h1 className="description-title">Description</h1>
								<div className="description-text-div">
									<p className="description-text">
										{this.state.careers[this.state.index].description}
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
										{this.state.careers[this.state.index].salary}
									</p>
								</div>
							</div>

							<div className="celebrities-div">
								<h1 className="celebrities-title">Celebrities</h1>
								<div className="celebrities-text-div">
									<p className="celebrities-text">
									{this.state.careers[this.state.index].celebrities}
									</p>{' '}
								</div>
							</div>

							<div className="classes-div">
								<h1 className="classes-title">Relevant Classes</h1>
								<div className="classes-text-div">
									<p className="classes-text">
										{this.state.careers[this.state.index].classes}
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

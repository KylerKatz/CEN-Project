import React from 'react';
import axios from 'axios';
import './AddPage.css';
import ClusterCard from './../../views/Explore/components/ClusterCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';
import AdminDashboard from './Admin-Dashboard';
import { NavLink } from 'react-router-dom';

class AddPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.location.state.careerid,
			name: '',
			salary: '',
			description: '',
			videolink: '',
			celebrities: '',
			classes: ''
		};

		this.changeState = this.changeState.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	}

	async changeState() {
		this.setState({
			id: this.state.id,
			name: document.getElementsByClassName('career-name-add')[0].innerText,
			salary: document.getElementsByClassName('salary-text-add')[0].innerText,
			description: document.getElementsByClassName('description-text-add')[0].innerText,
			videolink: document.getElementsByClassName('day-text-URL-add')[0].innerText,
			celebrities: document.getElementsByClassName('celebrities-text-add ')[0].innerText,
			classes: document.getElementsByClassName('classes-text-add')[0].innerText
		})
	}


	async handleSubmit() {

		await this.changeState()

		const newCareer = {
			career_id: this.state.id,
			career_name: this.state.name,
			career_salary: this.state.salary,
			career_description: this.state.description,
			career_videolink: this.state.videlink,
			career_celebrities: this.state.celebrities,
			career_classes: this.state.classes
		}

		axios.put('http://localhost:5000/api/clusters/addCareer/'.concat(this.props.location.state.clusterid),
		 newCareer)
		.then(res => {
			console.log(res.data)
			window.location = res.data.redirect
		});

		// Alert User
		alert('Your Changes Have Been Saved!');

	}


	render() {


		return (
			<div className="background-add-page">
				<div className="intro-add">
					<p className="intro-add-text">
						Welcome to the edit page! All of the white text in the career box
						below can be editted. The format will be exactly how your students
						see the page. Don't forget to click the submit button once you are
						finished with your changes.
					</p>

					<div
						className="submit-button-add"
						onClick={this.handleSubmit}
					>
						<h3>Submit</h3>
					</div>
				</div>

				<div className="center-background-add-page">
					<div className="career-name-div-add">
						<h1 className="career-name-add" contentEditable="true">
							Career Name
						</h1>
					</div>

					<div className="career-box-1-add">
						<div className="left-side-div-add ">
							<div className="description-div-add">
								<h1 className="description-title-add">Description</h1>
								<div className="description-text-div-add">
									<p className="description-text-add" contentEditable="true">
										{' '}
									</p>
								</div>
							</div>
							<div className="day-div-add ">
								<h1 className="day-title-add ">A Day In The Life</h1>
								<div className="day-text-div-add ">
									<p className="day-text-add ">
										Input the video URL below to change the video
									</p>{' '}
									<p className="day-text-URL-add " contentEditable="true"></p>{' '}
									<iframe
										className="video-add "
										width="420"
										height="315"
										src=""
									></iframe>
								</div>
							</div>
						</div>
						<div className="right-side-div-add ">
							<div className="salary-div-add ">
								<h1 className="salary-title-add ">Average Salary</h1>
								<div className="salary-text-div-add ">
									<p className="salary-text-add " contentEditable="true"></p>
								</div>
							</div>

							<div className="celebrities-div-add ">
								<h1 className="celebrities-title-add ">Celebrities</h1>
								<div className="celebrities-text-div-add ">
									<p
										className="celebrities-text-add "
										contentEditable="true"
									></p>{' '}
								</div>
							</div>

							<div className="classes-div-add ">
								<h1 className="classes-title-add ">Relevant Classes</h1>
								<div className="classes-text-div-add ">
									<p className="classes-text-add " contentEditable="true"></p>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddPage;

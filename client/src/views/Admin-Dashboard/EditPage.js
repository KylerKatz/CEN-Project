import React from 'react';
import './EditPage.css';
import axios from 'axios';
import ClusterCard from './../../views/Explore/components/ClusterCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';
import AdminDashboard from './Admin-Dashboard';
import { NavLink } from 'react-router-dom';

class EditPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			career: this.props.location.state.career,
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
			career: this.state.career,
			name: document.getElementsByClassName('career-name-edit')[0].innerText,
			salary: document.getElementsByClassName('salary-text-edit')[0].innerText,
			description: document.getElementsByClassName('description-text-edit')[0].innerText,
			videolink: document.getElementsByClassName('day-text-URL-edit')[0].innerText,
			celebrities: document.getElementsByClassName('celebrities-text-edit')[0].innerText,
			classes: document.getElementsByClassName('classes-text-edit')[0].innerText
		})
	}


	async handleSubmit() {

		await this.changeState()

		const updatedCareer = {
			career_id: this.state.career.id,
			career_name: this.state.name,
			career_salary: this.state.salary,
			career_description: this.state.description,
			career_videolink: this.state.videolink,
			career_celebrities: this.state.celebrities,
			career_classes: this.state.classes
		}


		axios.put('http://localhost:5000/api/clusters/updateCareer/'.concat(this.props.location.state.clusterid),
		 updatedCareer)
		.then(res => {
			console.log(res.data)
			window.location = res.data.redirect
		});

		// Alert User
		alert('Your Changes Have Been Saved!');

	}



	render() {

		const str = this.state.career.videolink;
		const str2 = str.substr(str.length - 11);
		const str3 = 'https://www.youtube.com/embed/' + str2;

		return (

			<div className="background-edit-page">
				<div className="intro-edit">
					<p className="intro-edit-text">
						Welcome to the edit page! All of the white text in the career box
						below can be editted. The format will be exactly how your students
						see the page. Don't forget to click the submit button once you are
						finished with your changes.
					</p>

					<div
						className="submit-button-edit"
						onClick={() => {
							this.handleSubmit();
						}}
					>
						<h3>Submit</h3>
					</div>
				</div>

				<div className="center-background-edit-page">
					<div className="career-name-div-edit">
						<h1 className="career-name-edit" contentEditable="true">
							{this.state.career.name}
						</h1>
					</div>

					<div className="career-box-1-edit">
						<div className="left-side-div-edit">
							<div className="description-div-edit">
								<h1 className="description-title-edit">Description</h1>
								<div className="description-text-div-edit">
									<p className="description-text-edit" contentEditable="true">
										{' '}
										{this.state.career.description}
									</p>
								</div>
							</div>
							<div className="day-div-edit">
								<h1 className="day-title-edit">A Day In The Life</h1>
								<div className="day-text-div-edit">
									<p className="day-text-edit">
										Input the video URL below to change the video
									</p>{' '}
									<p className="day-text-URL-edit" contentEditable="true"></p>{' '}
									<iframe
										className="video-edit"
										width="420"
										height="315"
										src={str3}
									></iframe>
								</div>
							</div>
						</div>
						<div className="right-side-div-edit">
							<div className="salary-div-edit">
								<h1 className="salary-title-edit">Average Salary</h1>
								<div className="salary-text-div-edit">
									<p className="salary-text-edit" contentEditable="true">
										{this.state.career.salary}
									</p>
								</div>
							</div>

							<div className="celebrities-div-edit">
								<h1 className="celebrities-title-edit">Celebrities</h1>
								<div className="celebrities-text-div-edit">
									<p className="celebrities-text-edit" contentEditable="true">
										{this.state.career.celebrities}
									</p>{' '}
								</div>
							</div>

							<div className="classes-div-edit">
								<h1 className="classes-title-edit">Relevant Classes</h1>
								<div className="classes-text-div-edit">
									<p className="classes-text-edit" contentEditable="true">
										{this.state.career.classes}
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

export default EditPage;

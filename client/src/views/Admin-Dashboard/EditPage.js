import React from 'react';
import './EditPage.css';
import ClusterCard from './../../views/Explore/components/ClusterCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';
import AdminDashboard from './Admin-Dashboard';
import { NavLink } from 'react-router-dom';

class EditPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			career: this.props.location.state.career
		};
	}

	render() {
		function updateDataBase() {
			const careerName = document.getElementsByClassName('career-name-edit')[0]
				.innerText;
			console.log(careerName);

			const description = document.getElementsByClassName(
				'description-text-edit'
			)[0].innerText;
			console.log(description);

			// const aDayInTheLife = document.getElementsByClassName('day-text-edit')[0]
			// 	.innerText;
			// console.log(aDayInTheLife);

			const salary = document.getElementsByClassName('salary-text-edit')[0]
				.innerText;
			console.log(salary);

			const celebrities = document.getElementsByClassName(
				'celebrities-text-edit'
			)[0].innerText;
			console.log(celebrities);

			const classes = document.getElementsByClassName('classes-text-edit')[0]
				.innerText;
			console.log(classes);

			const str = 'https://www.youtube.com/watch?v=hx9REVOv7Hc';
			const str2 = str.substr(str.length - 11);
			const str3 = 'https://www.youtube.com/embed/' + str2;

			console.log(str3);
		}
		function handleSubmit() {
			// Update DB
			updateDataBase();
			// Alert User
			alert('Your Changes Have Been Saved!');
			// Redirect back to dashboard
			// This is not correct, I have to look into this more
			return <NavLink to="/Admin-Dashboard"></NavLink>;
		}

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
							handleSubmit();
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
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
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
										src="https://www.youtube.com/embed/hx9REVOv7Hc"
									></iframe>
								</div>
							</div>
						</div>
						<div className="right-side-div-edit">
							<div className="salary-div-edit">
								<h1 className="salary-title-edit">Average Salary</h1>
								<div className="salary-text-div-edit">
									<p className="salary-text-edit" contentEditable="true">
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
									</p>
								</div>
							</div>

							<div className="celebrities-div-edit">
								<h1 className="celebrities-title-edit">Celebrities</h1>
								<div className="celebrities-text-div-edit">
									<p className="celebrities-text-edit" contentEditable="true">
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
									</p>{' '}
								</div>
							</div>

							<div className="classes-div-edit">
								<h1 className="classes-title-edit">Relevant Classes</h1>
								<div className="classes-text-div-edit">
									<p className="classes-text-edit" contentEditable="true">
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
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

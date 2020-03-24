import React from 'react';
import './AddPage.css';
import ClusterCard from './../../views/Explore/components/ClusterCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';
import AdminDashboard from './Admin-Dashboard';
import { NavLink } from 'react-router-dom';

class AddPage extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		career: this.props.location.state.career
	// 	};
	// }

	render() {
		function updateDataBase() {
			const careerName = document.getElementsByClassName('career-name-add')[0]
				.innerText;
			console.log(careerName);

			const description = document.getElementsByClassName(
				'description-text-add'
			)[0].innerText;
			console.log(description);

			// const aDayInTheLife = document.getElementsByClassName('day-text-edit')[0]
			// 	.innerText;
			// console.log(aDayInTheLife);

			const salary = document.getElementsByClassName('salary-text-add')[0]
				.innerText;
			console.log(salary);

			const celebrities = document.getElementsByClassName(
				'celebrities-text-add '
			)[0].innerText;
			console.log(celebrities);

			const classes = document.getElementsByClassName('classes-text-add')[0]
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
						onClick={() => {
							handleSubmit();
						}}
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

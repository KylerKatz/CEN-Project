import React from 'react';
import './EditPage.css';
import CareerCard from './../../views/Explore/components/CareerCard';
import CareerPage from '..//Career-Pages/CareerPage';
import CareerBar from './CareerBar';

class EditPage extends React.Component {
	render() {
		// const clusters = this.props.clusters.map(cluster => {
		// 	return <CareerCard cluster={cluster} key={cluster.id} />;
		// });

		function alertSubmit() {
			alert('Your Changes Have Been Saved!');
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
					<div className="submit-button-edit" onClick="alertSubmit()">
						<h3>Submit</h3>
					</div>
				</div>
				<div className="center-background-edit-page">
					<div className="career-name-div">
						<h1 className="career-name" contentEditable="true">
							Career Name
						</h1>
					</div>

					<div className="career-box-1">
						<div className="left-side-div">
							<div className="description-div">
								<h1 className="description-title">Description</h1>
								<div className="description-text-div">
									<p className="description-text" contentEditable="true">
										{' '}
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
									</p>
								</div>
							</div>
							<div className="day-div">
								<h1 className="day-title">A Day In The Life</h1>
								<div className="day-text-div">
									<p className="day-text" contentEditable="true">
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
									</p>{' '}
								</div>
							</div>
						</div>
						<div className="right-side-div">
							<div className="salary-div">
								<h1 className="salary-title">Average Salary</h1>
								<div className="salary-text-div">
									<p className="salary-text" contentEditable="true">
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
									</p>
								</div>
							</div>

							<div className="celebrities-div">
								<h1 className="celebrities-title">Celebrities</h1>
								<div className="celebrities-text-div">
									<p className="celebrities-text" contentEditable="true">
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
									</p>{' '}
								</div>
							</div>

							<div className="classes-div">
								<h1 className="classes-title">Relevant Classes</h1>
								<div className="classes-text-div">
									<p className="classes-text" contentEditable="true">
										This text is editable now we have to see how to get all the
										text in this div, and then send it back to the DB once the
										submit button is clicked
									</p>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="submit-edit-div">
					<p className="intro-edit-text">
						Welcome to the edit page! All of the white text in the career box
						below can be editted. The format will be exactly how your students
						see the page. Don't forget to click the submit button below the
						career box after to are finished with your changes.
					</p>
				</div> */}
			</div>
		);
	}
}

export default EditPage;

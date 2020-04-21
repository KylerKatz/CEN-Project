import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Student-Dashboard.css';
import ClusterCard from './../../views/Explore/components/ClusterCard';
import AchievementBar from './AchievementBar';
// import Quiz from './quiz';

class StudentDashboard extends React.Component {
	render() {
		var questions = [
			{
				qustion:
					'What is the standard distance between the target and archer in Olympics?',
				options: ['50 meters', '70 meters', '100 meters', '120 meters'],
				answer: 1, // arrays start with 0, so it is 70 meters
			},
			{
				qustion: 'Which is the highest number on a standard roulette wheel?',
				options: ['22', '24', '32', '36'],
				answer: 3,
			},
			{
				qustion:
					'How much wood could a woodchuck chuck if a woodchuck would chuck wood?',
				options: ['400 pounds', '550 pounds', '700 pounds', '750 pounds'],
				answer: 2,
			},
			{
				qustion: 'Which is the seventh planet from the sun?',
				options: ['Uranus', 'Earth', 'Pluto', 'Mars'],
				answer: 0,
			},
			{
				qustion: 'Which is the largest ocean on Earth?',
				options: [
					'Atlantic Ocean',
					'Indian Ocean',
					'Arctic Ocean',
					'Pacific Ocean',
				],
				answer: 3,
			},
		];

		/* [QUIZ ENGINE] */
		var quiz = {
			draw: function () {
				// quiz.draw() : draw the quiz

				// Fetch the HTML quiz wrapper
				var wrapper = document.getElementById('quiz-wrap');

				// Loop through all the questions
				// Create all the necessary HTML elements
				for (var index in questions) {
					var number = parseInt(index) + 1; // The current question number
					var qwrap = document.createElement('div'); // A div wrapper to hold this question and options
					qwrap.classList.add('question'); // CSS class, for cosmetics

					// The question - <h1> header
					var question = document.createElement('h1');
					question.innerHTML = number + ') ' + questions[index]['qustion'];
					qwrap.appendChild(question);

					// The options - <input> radio buttons and <label>
					for (var oindex in questions[index]['options']) {
						// The <label> tag
						var label = document.createElement('label');
						qwrap.appendChild(label);

						// The <option> tag
						var option = document.createElement('input');
						option.type = 'radio';
						option.value = oindex;
						option.required = true;
						option.classList.add('oquiz'); // Will explain this later in function submit below

						// Remember that a radio button group must share the same name
						option.name = 'quiz-' + number;
						label.appendChild(option);

						// Add the option text
						var otext = document.createTextNode(
							questions[index]['options'][oindex]
						);
						label.appendChild(otext);
					}

					// Finally, add this question to the main HTML quiz wrapper
					wrapper.appendChild(qwrap);
				}

				// Attach submit button + event handler to the quiz wrapper
				var submitbutton = document.createElement('input');
				submitbutton.type = 'submit';
				wrapper.appendChild(submitbutton);
				wrapper.addEventListener('submit', quiz.submit);
			},

			submit: function (evt) {
				// quiz.submit() : Handle the calculations when the user submits to quiz

				// Stop the form from submitting
				evt.preventDefault();
				evt.stopPropagation();

				// Remember that we added an "oquiz" class to all the options?
				// We can easily get all the selected options this way
				var selected = document.querySelectorAll('.oquiz:checked');

				// Get the score
				var score = 0;
				for (var index in questions) {
					if (selected[index].value == questions[index]['answer']) {
						score++;
					}
				}

				// We can calculate the score now
				var total = selected.length;
				var percent = score / total;

				// Update and show the score
				// Instead of creating elements, we can also directly alter the inner HTML
				var html = '<h1>';
				if (percent >= 1.0) {
					html += 'GREAT JOB!';
				} else if (percent >= 0.7) {
					html += 'WELL DONE!';
				} else if (percent >= 0.4) {
					html += 'Try HARDER!';
				} else {
					html += 'TRY HARDER!';
				}
				html += '</h1>';
				html += '<div>You scored ' + score + ' out of ' + total + '.</div>';
				document.getElementById('quiz-wrap').innerHTML = html;
				document.getElementById('quiz-wrap').style.textAlign = 'center';
				quizButton[0].style.display = 'block';
			},
		};

		/* [INIT] */
		//window.addEventListener('click', quiz.draw);
		const quizContainer = document.getElementsByClassName('quiz-containter');
		const quizButton = document.getElementsByClassName('take-quiz');

		function showQuiz() {
			if ((quizButton[0].style.display = 'block')) {
				document.getElementById('quiz-wrap').style.textAlign = 'left';
				quizButton[0].style.display = 'none';
				document.getElementById('quiz-wrap').innerHTML = '';
				quiz.draw();
				quizContainer[0].style.display = 'block';
			}
		}

		var imageLink1 = 'https://avatars.dicebear.com/v2/initials/'
		var imageLink2 = imageLink1.concat(this.props.user.name)
		var imageLink3 = imageLink2.concat('.svg')

		return (
			<div className="background-explorepage-student-home">
				<div className="center-background-student-home">
					<div className="student-dashboard-upper-div">
						<div className="textbox-1-student-home">
							{/* The username can be replaced with the name of the account that is loged in */}
							<h1 className="text1-student">Welcome Back {this.props.user.name}!</h1>
						</div>
						<div className="student-dashboard-upper-lower-div">
							<div className="student-dashboard-upper-left-div">
								<div className="student-pic-div">
									<img
										className="student-pic"
										// Just a place holder image for now
										src= {imageLink3}
									></img>
								</div>
								<div className="bio-div">
									<p className="bio-text">Member Since: {this.props.user.created}</p>
									<p className="bio-text">Teacher: {this.props.user.teacher}</p>
									<p className="bio-text">Achivement Points:TO BE DONE ON</p>
								</div>
							</div>

							<div className="student-dashboard-upper-right-div">
								<div className="achievement-text">
									<h4>Achievements</h4>
								</div>
								<div className="achievement-div">
									<AchievementBar></AchievementBar>
									<AchievementBar></AchievementBar>
									<AchievementBar></AchievementBar>
									<AchievementBar></AchievementBar>
									<AchievementBar></AchievementBar>
									<AchievementBar></AchievementBar>
								</div>
							</div>
						</div>
					</div>

					<div className="student-dashboard-middle-div">
						<div className="student-dashboard-lower-div-text">
							<h3> Take A Quiz To Earn Points</h3>
							<div
								className="take-quiz"
								onClick={() => {
									showQuiz();
								}}
							>
								<p>Take Quiz</p>
							</div>
							<div className="quiz-containter">
								<form id="quiz-wrap"></form>
							</div>
						</div>
					</div>
					<div className="student-dashboard-lower-div">
						<div className="student-dashboard-lower-div-text">
							<h3> Chatbot Recommended Careers</h3>
						</div>

						<div className="student-dashboard-recmmmended-cards-div">
							<div className="chatbot-cluster-cards">
								{' '}
								<NavLink
									className="career-links"
									onClick={() => window.scrollTo(0, 0)}
									to={{
										pathname: '/CareerPage/',
										//component: CareerPage,
										// state: {
										// 	careers: this.props.cluster.careers,
										// },
									}}
								>
									<div className="career-card">Name</div>
								</NavLink>
								<NavLink
									className="career-links"
									onClick={() => window.scrollTo(0, 0)}
									to={{
										pathname: '/CareerPage/',
										//component: CareerPage,
										// state: {
										// 	careers: this.props.cluster.careers,
										// },
									}}
								>
									<div className="career-card">Name</div>
								</NavLink>
								<NavLink
									className="career-links"
									onClick={() => window.scrollTo(0, 0)}
									to={{
										pathname: '/CareerPage/',
										//component: CareerPage,
										// state: {
										// 	careers: this.props.cluster.careers,
										// },
									}}
								>
									<div className="career-card">Name</div>
								</NavLink>
								<NavLink
									className="career-links"
									onClick={() => window.scrollTo(0, 0)}
									to={{
										pathname: '/CareerPage/',
										//component: CareerPage,
										// state: {
										// 	careers: this.props.cluster.careers,
										// },
									}}
								>
									<div className="career-card">Name</div>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StudentDashboard;

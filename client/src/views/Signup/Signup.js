import React, { useState } from 'react';
import './Signup.css';

function Signup(props) {
	//change <form> to one
	//make input individual
	//create own change function
	//should i make it all in 1 component? have to move state to apps? compare w/ bootcamp4
	//what to do with confirm password?
	//encrpytion
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		conpassword: '', //probably shouldnt need this with auth0
		isAdmin: ''
	});

	const onChange = e => {
		setForm({
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		//make sure passwords match, if not give error
		//put into model and save to database?
		//put in another file and include function here
		e.preventDefault();

		setForm({
			name: '',
			email: '',
			password: '',
			conpassword: '',
			isAdmin: ''
		});
	};

	return (
		<div className="background-signup">
			<div className="Signup-background">
				<p className="login-text">Sign Up For A New Account</p>

				<form action="/Signup" method="POST">
					<div className="forms">
						<input
							type="text"
							name="name"
							value={form.name}
							placeholder="Your Name"
							onChange={onChange}
						></input>

						<input
							type="email"
							name="email"
							value={form.email}
							placeholder="Email"
							onChange={onChange}
						></input>

						<input
							type="password"
							name="password"
							value={form.password}
							placeholder="Password"
							onChange={onChange}
						></input>

						<input
							type="password"
							name="password"
							value={form.conpassword}
							placeholder="Confirm Password"
							onChange={onChange}
						></input>

						<text>
							{' '}
							<br></br>Student:
						</text>
						<input
							type="radio"
							name="account type"
							value="false"
							checked={form.isAdmin}
							onChange={onChange}
						></input>

						<text>
							{' '}
							<br></br>Teacher:
						</text>
						<input
							type="radio"
							name="account type"
							value="true"
							value={form.isAdmin}
							onChange={onChange}
						></input>
						<br></br>

						<button>
							<input type="submit" name="submit"></input>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;

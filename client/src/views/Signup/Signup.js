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
		isAdmin: false,
	});

	const onChange = (e) => {
		setForm({
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="background">
			<div className="Signup-background">
				<p className="login-text">Sign Up For A New Account</p>

				<form action="http://localhost:5000/api/Signup" method="post">
					<div className="forms">
						<input
							type="text"
							name="name"
							value={form.name}
							placeholder="Your Name"
							onChange={onChange}
							required
							minLength="4"
						></input>

						<input
							type="email"
							name="email"
							value={form.email}
							placeholder="Email"
							onChange={onChange}
							required
							minLength="5"
						></input>

						<input
							type="password"
							name="password"
							value={form.password}
							placeholder="Password"
							onChange={onChange}
							required
							minLength="8"
						></input>

						<input
							type="password"
							name="conpassword"
							value={form.conpassword}
							placeholder="Confirm Password"
							onChange={onChange}
							required
							minLength="8"
						></input>

						<text>
							{' '}
							<br></br>Student:
						</text>
						<input
							type="radio"
							name="isAdmin"
							value={false}
							onChange={onChange}
						></input>

						<text>
							{' '}
							<br></br>Teacher:
						</text>
						<input
							type="radio"
							name="isAdmin"
							value={true}
							onChange={onChange}
							required
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

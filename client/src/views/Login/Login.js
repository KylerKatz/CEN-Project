import React, {useState} from 'react';
import './Login.css';

//compare user input to database
//search for user
// authenticate password etc 
// auth0? 


function Login() {

	const[user, setUser] = useState({
		email:'',
		password: ''
	});
	
	const onChange = e => {
		setUser({
			[e.target.name]:e.target.value
		});
	}
			
	//window.location.replace('/Admin-DashBoard');


	return (
		<div className="background">
			<div className="login-background">
				<p className="login-text">Login To Your Account</p>

				<form action="http://localhost:5000/api/Login" method="post" >
					<div className="forms">
					
							<input 
								type="email" 
								name="email" 
								placeholder="Email"
								value={user.email}
								onChange ={onChange}
								>
							</input>

							<input
								type="password"
								name="password"
								placeholder="Password"
								value={user.password}
								onChange ={onChange}
							></input>
						
							<button>
								<input type="submit" name="submit"></input>
							</button>
							
						
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;

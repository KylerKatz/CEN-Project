import React from 'react';
import './Login.css';

//compare user input to database
//search for user
// authenticate password etc 
// auth0? 



function Login() {
	return (
		<div className="background">
			<div className="login-background">
				<p className="login-text">Login To Your Account</p>

				<form >
					<div className="forms">
					
							<input 
								type="email" 
								name="email" 
								placeholder="Email">
							</input>

							<input
								type="password"
								name="password"
								placeholder="Password"
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

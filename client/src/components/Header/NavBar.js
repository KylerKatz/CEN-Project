import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';








const NavBar = () => {
    return (
        
        <div className = "header">
            {/* Logo */}


            <Link className = "nav-title" to="/">
                
                    <img className = "nav-logo" src={ "/goal.png" } alt="Website logo" />
                
                <span>
                     <h1  className = "site-name">Career Find</h1> 
                </span>
            </Link>

            
            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Explore'>Explore</Link>
                
                <Link className = "nav-link" to='/Login'>Login</Link>

                <Link className = "nav-link" to='/Signup'>Sign up</Link>

            </div>



        </div>
    )
};

export default NavBar;

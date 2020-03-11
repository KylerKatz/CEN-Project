import React from "react"
import './NavBar.css';
import { Link } from 'react-router-dom';

class Navitem extends React.Component {
    
  
    render () {
        return (
            <Link className={this.props.clicked ? "nav-link-clicked" : "nav-link"}  to={"/" + this.props.name}>
                {this.props.name}
			</Link>
        )
    }
}

export default Navitem
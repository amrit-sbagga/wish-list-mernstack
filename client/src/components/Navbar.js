//import logo from './logo.svg';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navbar(props) {
    // Navbar props object data only comes withRouter()
    // else it will be empty object
    console.log("Navbar props = ", props);

    // setTimeout(()=>{
    //   //navigate to about page
    //   props.history.push("/about");
    // }, 3000)

    return (  
        <nav>
            <div className="nav-wrapper" style={{background:"#6200ee"}}>
                <a href="#" className="brand-logo">Wish list</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);


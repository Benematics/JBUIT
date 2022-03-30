import React from "react";
import data from './data/info';
import {Link, Outlet} from "react-router-dom";

const Navigation = () => {
	return(
        <>
        	<nav>
              <span className="logo">
                <img src="./images/logo.jpeg"/>
                <h1>JBUIT</h1>
              </span>
              <ul>
                <li><Link to="/#courses" onClick={()=>{window.location.href = "/#courses"}}>Courses</Link></li>
                <li><Link to="/#testimonial" onClick={()=>{window.location.href = "/#testimonial"}}>Testimonial</Link></li>
                <li><Link to="/#contact" onClick={()=>{window.location.href = "/#contact"}}>Contact</Link></li>
                <li><Link to="/#courses" onClick={()=>{window.location.href = "/#courses"}}><button>Get Started</button></Link></li>
              </ul>
              <div>
                <i className="fa fa-bars fa-2x"></i>
              </div>
          </nav>
        </>
		)
}
export default Navigation;
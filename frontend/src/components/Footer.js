import React from "react";
import data from './data/info';

const Footer = () => {
	return(
	  <footer className="row">
	    <h3>&copy 2022. JBUIT</h3>
	    <div className="media row">
	      Follow us on our social media platforms
	      <span className="media-pt row">
	        <a href=""><i className="fa fa-twitter fa-1x"></i></a>
	        <a href=""><i className="fa fa-instagram fa-1x"></i></a>
	        <a href=""><i className="fa fa-facebook fa-1x"></i></a>
	        <a href=""><i className="fa fa-linkedin fa-1x"></i></a>
	      </span>
	    </div>
	  </footer>
		)
}

export default Footer;
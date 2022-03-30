import React from "react";
import data from './data/info';

const Contact = () => {
	return(
	<>
    <div className="contact" id="contact">
      <h2>To Send Us A Message</h2>
      <p>Chat us on Whatsapp by clicking on the whatsapp icon below</p>
      <a href="https://wa.me/+2388123888508"><i className="fa fa-whatsapp fa-4x"></i></a>
    </div>
    <div className="subscribe">
      <h3>Subscribe to our newsletter to recieve weekly <br/>updates from us on our trainings, services and tech related news</h3>
      <form>
        <input type="" name="" placeholder="youremail@domain.com"/>
        <button>Subscribe</button>
      </form>
    </div>
    </>
		)
}

export default Contact;
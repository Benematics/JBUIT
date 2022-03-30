import React from "react";
import data from './data/info';

const Services = () => {
	return(
	 <div className="services">
      <h2>Get Our Developers To Work For You</h2>
	  <div className="works row">
	  {data.Services.map((services)=>(
	  	<div className="services-cover row">
          <img src={services.images}/>
          <h3>{services.title}</h3>
          <p>
            {services.text}
          </p>  
        </div>
	  	))}
      </div>
     </div>
		)
}

export default Services;
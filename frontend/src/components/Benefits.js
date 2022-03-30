import React from "react";
import data from './data/info';

const Benefits = () => {
	return(
	<>
	<h2><span>Programme Benefits</span></h2>
	<div className="benefits row">
	{data.Benefits.map((benefit)=>(
	<div>
        <span className="row">
          <h3>{benefit.title}</h3>
          <img src={benefit.images}/>
        </span>
        <p>
          {benefit.text}
        </p>
      </div>  
		))}
	</div>
	</>
		)
}
export default Benefits;
import React from 'react';
import data from './data/info';
import Enroll from './Enroll';

const Course = () => {
	return(
<>
	<h2><span>Courses</span></h2>
	<div className="card row">
	 {data.courses.map((course)=>(
	  <div className="card-cover row">
        <div className="card-details">
          <h2>{course.stack}</h2>
          <ul>
            {course.languages.map((language)=>(<li>{language}</li>))}
          </ul>
          <div className="div" style={{height:"400px", width:"400px", backgroundColor: "blue"}}>{course.Curriculum}</div>
          <button onClick={()=>{document.getElementsByClassName('div')[0].style.display="none"}}>See Curriculum</button>
          <button>About Tutor</button>
        </div>
        <div className="card-description">
          <img src={course.images}/>
          <div>
            <h2>Description</h2>
            <span></span>
            <h4>Duration:  {course.duration}<span></span></h4>
            <h1>Fee:  {course.price}</h1>
            <button>Enroll Now</button>
          </div>
        </div>
    </div>))}
  </div>
</>

		)
}

export default Course;
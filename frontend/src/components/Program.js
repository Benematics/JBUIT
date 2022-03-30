import React from "react";
import data from './data/info';

const Program = () => {
	return(
	<div className="how">
      <h2>How To Enroll into our programme</h2>
      <div className="how1 row">
        <div className="how11 row">
          <div className="how123">
            <h4>01</h4>
            <strong>Click on the "Enroll Now" Button</strong>
          </div>
          <div className="how124 row">
            <p>After selecting the course of your interest, Click on the "Enroll Now" Button to continue the enrolment process</p>
          </div>
        </div>
      </div>
      <div className="how2 row">
        <div className="how12 row">
          <div className="how123">
            <h4>02</h4>
            <strong>Fill your info and click on proceed</strong>
          </div>
          <div className="how124 row">
            <p>Fill your information(Name and Email) on the form and proceed to make button via the "Proceed" Button</p>
          </div>
        </div>
      </div>
      <div className="how3 row">
        <div className="how13 row">
          <div className="how123">
            <h4>03</h4>
            <strong>Make payment</strong>
          </div>
          <div className="how124 row">
            <p>Make payment; After you have made payment you will be directed where you get to join your cohort</p>
          </div>
        </div>
      </div>
      <div className="how4 row">
        <div className="how14 row">
          <div className="how123">
            <h4>04</h4>
            <strong>Join the cohort</strong>
          </div>
          <div className="how124 row">
            <p>click on "join the cohort" button. Congratulations you are now a student of JBUIT</p>
          </div>
        </div>
      </div>
      <a href="#courses"><button>Select A Course</button></a>
    </div>
		)
}

export default Program;
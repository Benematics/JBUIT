import React from 'react';
import data from '../components/data/info';
import Course from '../components/Course';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Program from '../components/Program';
import Testimony from '../components/Testimony';
import Contact from '../components/Contact';


function Home(){
	return(
	<>
	  <main id="courses">
        <Course />
      </main>
      <section>
        <Benefits />
        <Program />
        <Testimony />
        <Services />
        <Contact />
      </section>
    </>
		)
}
export default Home;
//this is home page
import React from 'react';
import About from './About';
import Contact from './Contact';
import Profiles from './Profiles';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Project from'./Project';
const Home = ()=>{
return(
<><section>


<div className="row sameHeight" >
    <div className="col s12 m12 l4 light-blue darken-4 sameHeight_child">
        <Profiles />
        <Contact />
        <Skills />
    </div>
    <div className="col s12 m12 l8 white sameHeight_child">
        <About />
        <Education />
        <Experience />
        <Project />
    </div>
</div></section>
</>
);
}
export default Home;

import React from 'react';


const Skills = () => {


    return (
        <>
            <div className="card light-blue darken-4 z-depth-0">
                <div className="card-content">
                    <h6 className="white-text">
                        <strong> # Professional Skills</strong>
                    </h6>
                    <hr />
                    <div className="row pt">
                        <div className="col m6 s12">
                            <p className="grey-text text-lighten-1">JAVA</p>
                            <div className="progress white">
                                <div className="determinate grey" style={{ width: "75%" }}></div>
                            </div>
                        </div>

                        <div className="col m6 s12">
                            <p className="grey-text text-lighten-1">PYTHON</p>
                            <div className="progress white">
                                <div className="determinate grey" style={{ width: "60%" }}></div>
                            </div>
                        </div>

                        <div className="col m6 s12">
                            <p className="grey-text text-lighten-1">React</p>
                            <div className="progress white">
                                <div className="determinate grey" style={{ width: "70%" }}></div>
                            </div>
                        </div>

                        <div className="col m6 s12">
                            <p className="grey-text text-lighten-1">Arduino(Microcontroller)</p>
                            <div className="progress white">
                                <div className="determinate grey" style={{ width: "50%" }}></div>
                            </div>
                        </div>

                        <div className="col m6 s12">
                            <p className="grey-text text-lighten-1">Data Science</p>
                            <div className="progress white">
                                <div className="determinate grey" style={{ width: "40%" }}></div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="card light-blue darken-4 z-depth-0 ">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong> # Interest</strong>
                        </h6>
                        <hr />

                        <a className="btn disabled" style={{ marginBottom: "5px" }}><b>Stock market Analysis</b></a>
                        <a className="btn disabled"><b>Machine Learning</b></a>
                    
                    </div></div>

                    <div className="card light-blue darken-4 z-depth-0 ">
                    <div className="card-content">
                        <h6 className="white-text">
                            <strong> # Extracurricular Activity</strong>
                        </h6>
                        <hr />
                        <h6 className="white-text"><i class="fas fa-book-reader"></i> &nbsp;<b>Tutoring</b></h6>
                        <p className="grey-text text-lighten-3 pt">
                        
I am Tutoring as Computer Science and Maths
Tutor in online homework websites Chegg .</p>
                        
                    
                    </div></div>
                


            </div>


        </>
    )
}
export default Skills;

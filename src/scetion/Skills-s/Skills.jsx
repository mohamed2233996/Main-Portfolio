import React from 'react';
import { render } from "react-dom";
import "./Skills.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProgresBar } from '../../componant';


const Skills = () => {
    const percentagehtml = 95;
    const percentagecss = 96;
    const percentagejs = 80;
    const percentagereact = 86;
    const percentagephp = 60;

    return (
        <div className='Skills sc-padding'>
            <h1 data-aos="zoom-in" className='text-center mb-4'>My skills</h1>
            <div className='container'>
                <div data-aos="zoom-in" className="row">
                    <div className="col-md-6 col-lg-4 p-3 mb-3">
                        <div className='proggrars-container'><CircularProgressbar
                            value={percentagehtml}
                            text={`${percentagehtml}%`}
                            background
                            backgroundPadding={10}
                            styles={buildStyles({
                                backgroundColor: "var(--main-color)",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                            <p className='titel-proggars'>HTML</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 p-3 mb-3">
                        <div className='proggrars-container'><CircularProgressbar
                            value={percentagecss}
                            text={`${percentagecss}%`}
                            background
                            backgroundPadding={10}
                            styles={buildStyles({
                                backgroundColor: "var(--main-color)",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                            <p className='titel-proggars'>CSS</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 p-3 mb-3">
                        <div className='proggrars-container'><CircularProgressbar
                            value={percentagejs}
                            text={`${percentagejs}%`}
                            background
                            backgroundPadding={10}
                            styles={buildStyles({
                                backgroundColor: "var(--main-color)",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                            <p className='titel-proggars'>JS</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 p-3 mb-3">
                        <div className='proggrars-container'><CircularProgressbar
                            value={percentagereact}
                            text={`${percentagereact}%`}
                            background
                            backgroundPadding={10}
                            styles={buildStyles({
                                backgroundColor: "var(--main-color)",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                            <p className='titel-proggars'>REACT</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 p-3 mb-3">
                        <div className='proggrars-container'><CircularProgressbar
                            value={percentagephp}
                            text={`${percentagephp}%`}
                            background
                            backgroundPadding={10}
                            styles={buildStyles({
                                backgroundColor: "var(--main-color)",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                            <p className='titel-proggars'>PHP</p>
                        </div>
                    </div>
                </div>
                <div className="progresbar-section pt-5">
                    <ProgresBar 
                    name="Html"
                    progress="95"
                    />
                    <br />
                    <ProgresBar 
                    name="Css"
                    progress="90"
                    />
                    <br />
                    <ProgresBar 
                    name="Js"
                    progress="87"
                    />
                    <br />
                    <ProgresBar 
                    name="Bootstrap"
                    progress="95"
                    />
                    <br />
                    <ProgresBar 
                    name="React"
                    progress="88"
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;

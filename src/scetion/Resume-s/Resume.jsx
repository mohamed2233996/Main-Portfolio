import React from 'react';
import "./Resume.css"
import ResumeLi from '../../componant/Resume-li/Resume-li';

const Resume = () => {
    return (
        <div className='Resume sc-padding'>
            <div className='container'>
                <h1 data-aos="zoom-in" className='text-center mb-4'>My Resume 📄</h1>
                <br />
                <ul data-aos="zoom-in" className="Resume-list-group list-unstyled mt-4">
                    <li>
                        <h2 className='Resume-list-titel' >WORK EXPERIENCE</h2>
                    </li>
                    <li>
                        <ResumeLi
                            expra="Senior Developer"
                            company="Freelancer"
                            datafrom="2021"
                            datato="Current"
                            describe="Here I had mastered most of the programming languages ​​for the front-end of the site and had already started in the back-end languages"
                        />
                    </li>
                    <li className='li-right'>
                        <ResumeLi
                            expra="Junior Developer"
                            company="Freelancer"
                            datafrom="2019"
                            datato="2021"
                            describe="Here I actually started learning most of the basic languages that help me build a website"
                        />
                    </li>
                    <li >
                        <ResumeLi
                            expra="Beginner Developer"
                            company="Freelancer"
                            datafrom="2018"
                            datato="Current"
                            describe="I started my freelance business while I was continuing my university education, and I was good at simple jobs"
                        />
                    </li>
                    <li>
                        <h2 className='Resume-list-titel' >EDUCATION</h2>
                    </li>
                    <li className='li-right'>
                        <ResumeLi
                            expra="College student"
                            company="Menoufia University"
                            datafrom="2019"
                            datato="Current"
                            describe="I study in the College of Commerce and I am currently in my final year"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;

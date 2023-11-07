import React from 'react';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import "./About.css"

const About = () => {
    return (
        <div className='About sc-padding'>
            <div className='container'>
                <h1 data-aos="zoom-in" className='text-center mb-4'>About Me</h1>
                <div data-aos="fade-right" className="main-info mt-3">
                    <ul className='list-unstyled fs-4'>
                        <li className='info-li mb-2 '>
                            Full Name : <span className='info-span'>Mohamed Gamal Ragap Alshemy</span>
                        </li>
                        <li className='info-li mb-2 '>
                            Age : <span className='info-span'>22 Years Old</span>
                        </li>
                        <li className='info-li mb-2 '>
                            Address : <span className='info-span'>Shopra-Blola ,Menof ,Menofia</span>
                        </li>
                        <li className='info-li mb-2 '>
                            Phone : <span className='info-span'>01025302633</span>
                        </li>
                        <li className='info-li mb-2 '>
                            Email : <span className='info-span'>medomano771@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div data-aos="fade-up" className="main-p mt-4">
                    <h2 className='hello-h'>Hello There!</h2>
                    <p className='info-p'>My name is Mohamed, I am a 22 years old web developer based in Egypt.
                        I study at the Faculty of Commerce, Menoufia University
                        I'm a front end developer and will be full stack developer,
                        I have experience in building websites using JavaScript frameworks and main program lang
                        I love all programming, especially website programming
                        I also has experience in the field of electronic marketing and social media management.
                        And also I like to learn new things about technology.
                    </p>
                </div>
                <div data-aos="fade-up" className="text-light p-2 fs-2">
                    <a href='/' className='icon-cont'><BsFacebook /></a>
                    <a href='/' className='icon-cont'><BsTwitter /></a>
                    <a href='/' className='icon-cont'><BsGithub /></a>
                    <a href='/' className='icon-cont'><BsLinkedin /></a>
                </div>
            </div>
        </div>
    );
}

export default About;

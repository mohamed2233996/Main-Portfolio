import React from 'react';
import "./Main Intro.css"
import introImg from "./../../assets/imgs/my img.jpg"
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import Header from '../../componant/Header/Header';
import HeaderMob from '../../componant/Header mobile/Header-mob';

const MainIntro = () => {
    return (
        <div>
            <HeaderMob />
            <header className="site-navbar" role="banner">
                <Header />
            </header>
            <div className='Main-Intro'>
                <div className='overflow'></div>
                <div className='container z-1 text-light text-center'>
                    <div data-aos="zoom-in" className="d-flex flex-column justify-content-center align-items-center align-content-center">
                        <div className='rounded-circle overflow-hidden mb-3'>
                            <img className='img-width' src={introImg} alt="" />
                        </div>
                        <h1 className='main-name  my-3'>- Mohamed Gamal -</h1>
                        <h5 className='mt-3'>Web Developer | UI/UX design</h5>
                        <div className="icons-group p-2 fs-2">
                            <BsFacebook />
                            <BsTwitter />
                            <BsGithub />
                            <BsLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainIntro;

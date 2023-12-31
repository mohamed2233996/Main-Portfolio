import React from 'react';
import "./works.css";
import { WoksBox } from '../../componant';
import projectImg1 from "../../assets/imgs/projct1.png"
import projectImg2 from "../../assets/imgs/projct2.png"
import projectImg3 from "../../assets/imgs/projct3.png"
import projectImg4 from "../../assets/imgs/projct4.png"
import projectImg5 from "../../assets/imgs/projct5.png"
import projectImg6 from "../../assets/imgs/projct6.png"
import projectImg7 from "../../assets/imgs/projct7.png"
import projectImg8 from "../../assets/imgs/projct8.png"
import projectImg9 from "../../assets/imgs/projct9.png"
import projectImg10 from "../../assets/imgs/projct10.png"
import projectImg11 from "../../assets/imgs/projct11.png"
import projectImg12 from "../../assets/imgs/projct12.png"
import projectImg13 from "../../assets/imgs/projct13.png"

const Works = () => {
    const style1 = {
        backgroundImage: `url(${projectImg1})`
    }
    const style2 = {
        backgroundImage: `url(${projectImg2})`
    }
    const style3 = {
        backgroundImage: `url(${projectImg3})`
    }
    const style4 = {
        backgroundImage: `url(${projectImg4})`
    }
    const style5 = {
        backgroundImage: `url(${projectImg5})`
    }
    const style6 = {
        backgroundImage: `url(${projectImg6})`
    }
    const style7 = {
        backgroundImage: `url(${projectImg7})`
    }
    const style8 = {
        backgroundImage: `url(${projectImg8})`
    }
    const style9 = {
        backgroundImage: `url(${projectImg9})`
    }
    const style10 = {
        backgroundImage: `url(${projectImg10})`
    }
    const style11 = {
        backgroundImage: `url(${projectImg11})`
    }
    const style12 = {
        backgroundImage: `url(${projectImg12})`
    }
    const style13 = {
        backgroundImage: `url(${projectImg13})`
    }




    return (
        <div className='works sc-padding'>
            <div className='container'>
                <h1 data-aos="zoom-in" className='text-center text-light mb-4'>Work</h1>
                <div className="row mt-5">
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://markting-agancy.web.app/"
                            style={style1}
                            title="Markting Website"
                            desc="Full Site"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://medo-agency.web.app/"
                            style={style2}
                            title="Gaming Website"
                            desc="Full Site"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://medo-foods-cbe3c.web.app/"
                            style={style3}
                            title="Fast Food"
                            desc="Front End"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://medo-weather.web.app/"
                            style={style4}
                            title="Weather App"
                            desc="Api Back End"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://medo-app-ee179.web.app/"
                            style={style5}
                            title="React App"
                            desc="React"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://mohamed2233996.github.io/medo-frem/"
                            style={style6}
                            title="Accounting"
                            desc="Ftont End"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://mohamed2233996.github.io/portfilio/"
                            style={style7}
                            title="Portfilio"
                            desc="Front End"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://mohamed2233996.github.io/My-Site/"
                            style={style8}
                            title="Portfilio"
                            desc="Front End"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://mohamed2233996.github.io/template-1/"
                            style={style9}
                            title="Free Template"
                            desc="Front End"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://mohamed2233996.github.io/template-3/"
                            style={style10}
                            title="Free Template"
                            desc="Front End"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://mohamed2233996.github.io/Medo-Template/"
                            style={style11}
                            title="Agensy"
                            desc="Full Site"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://mohamed2233996.github.io/qoran-12/"
                            style={style12}
                            title="موقع قراءن كريم"
                            desc="Full Site"
                        />
                    </div>
                    <div data-aos="fade-up" className="col-lg-4 mt-3 text-center">
                        <WoksBox
                            link="https://mohamed2233996.github.io/medo-movies/"
                            style={style13}
                            title="Movies site"
                            desc="Full Site"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;

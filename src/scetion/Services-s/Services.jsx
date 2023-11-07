import React from 'react';
import "./Services.css"
import { ServicesBox } from '../../componant/index';
import { BiSolidBrushAlt, BiSupport } from "react-icons/bi";
import { BsFillBarChartFill, BsFillFileEarmarkCodeFill, BsFillClipboardFill , BsFillFileEarmarkTextFill} from "react-icons/bs";

const Services = () => {
    return (
        <div className='Services sc-padding'>
            <div className='container'>
                <h1 data-aos="zoom-in" className='text-center text-light mb-4'>My Services</h1>
                <div data-aos="zoom-in" className="row">
                    <div className="col-lg-4 col-md-6">
                        <ServicesBox
                            icon={<BiSolidBrushAlt />}
                            titel="Web Design"
                            text="We have the service of designing website interfaces and choosing appropriate colors and shapes"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServicesBox
                            icon={<BsFillBarChartFill />}
                            titel="Web Marketing"
                            text="We provide marketing services for websites and social media services"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServicesBox
                            icon={<BsFillFileEarmarkCodeFill />}
                            titel="Web Developent"
                            text="We provide a basic service with complete programming for most websites and e-stores"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServicesBox
                            icon={<BsFillClipboardFill />}
                            titel="Branding"
                            text="We have a specialist available to help you choose your identity and brand"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServicesBox
                            icon={<BsFillFileEarmarkTextFill />}
                            titel="Analytics"
                            text="We have a specialist to analyze site data and statistics"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ServicesBox
                            icon={<BiSupport />}
                            titel="Support"
                            text="We only have support. Please feel free to call our numbers in the About Us section"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

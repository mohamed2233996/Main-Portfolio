import React from 'react';
import "./Resume-li.css"
import { BsFillAwardFill } from "react-icons/bs";

const ResumeLi = (props) => {
    return (
        <>
            <div className='Resume-icon'>
                <BsFillAwardFill />
            </div>
            <div className='resume-text right-text'>
                <h2 className='fs-1'>{props.expra}</h2>
                <p className='resume-info'>
                    <span> {props.company}</span> -
                    <span> {props.datafrom}</span> -
                    <span> {props.datato}</span>
                </p>
                <p className='fs-3'>{props.describe}</p>
            </div>
        </>
    );
}

export default ResumeLi;

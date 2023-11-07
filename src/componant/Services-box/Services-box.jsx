import React from 'react';
import "./Services-box.css"

const ServicesBox = (props) => {
    return (
        <div className='ServicesBox'>
            <div className="service-icon">{props.icon}</div>
            <div className='ServicesBox-text'>
                <h2>{props.titel}</h2>
                <p>{props.text} </p>
            </div>
        </div>
    );
}

export default ServicesBox;

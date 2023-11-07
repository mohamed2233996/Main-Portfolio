import React from 'react';
import "./progres-bar.css"

const ProgresBar = (props) => {
    return (
        <div data-aos="fade-up" className='progress-container'>
            <div className="progress">
                <p className='name'>{props.name}</p>
                <span className='value'>{props.progress}%</span>
                <div className="progress-bar" role="progressbar" style={{ width: props.progress + '%' }} aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}

export default ProgresBar;

import React from 'react';
import "./woks-box.css"

const WoksBox = (props) => {
    return (
        <div className='projct-box'>
            <a className='projct-a' href={props.link} style={props.style}>
                <div className="disc">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
            </a>
        </div>
    );
}

export default WoksBox;

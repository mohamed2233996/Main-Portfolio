import React from 'react';
import "./Conectus.css"
import ConnectImg from '../../assets/imgs/122.png' 

const Conectus = () => {
    return (
        <div className='Conectus sc-padding'>
            <div className='container'>
                <h1 data-aos="zoom-in" className='text-center mb-4 text-white'>Contact Us</h1>
                <div className="row">
                    <form className='col-lg-8 d-flex flex-wrap' name='send' action="" method="post">
                        <input type="hidden" name="_subject" value="New submission from website" />
                        <input className='col-12 col-lg-5 me-lg-2' type="text" id="name" name="name" placeholder='First Name' required />
                        <br />
                        <input className='col-12 col-lg-5 me-lg-2' type="text" id="name" name="name" placeholder='Last Name' required />
                        <br />
                        <input className='col-12 col-lg-5 me-lg-2' type="email" id="email" name="email" placeholder='Email' required />
                        <br />
                        <input className='col-12 col-lg-5 me-lg-2' type="number" id="phone" name="phone" placeholder='Your phone' required />
                        <br />
                        <textarea className='col-12 col-lg-10' id="message" rows="5" cols="30" name="message" placeholder='Message'></textarea>
                        <br />
                        <button type="submit" className='send-btn'>Send Message!</button>
                    </form>
                    <div className='col-lg-4 img-div'>
                        <img className='img-fluid' src={ConnectImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conectus;

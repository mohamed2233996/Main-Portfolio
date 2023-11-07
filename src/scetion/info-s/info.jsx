import React from 'react';
import './info.css'
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiOutlineFacebook } from "react-icons/ai";
import ConctInfo from '../../componant/conctInfo/conctInfo';


const Info = () => {
    return (
        <div className='info sc-padding'>
            <div className='container'>
                <h1 data-aos="zoom-in" className='text-center mb-4'>concet us</h1>
                <div className="row mt-5">
                    <ConctInfo 
                    iconmail={<AiOutlineMail />}
                    conctinfoGmail="Medomano771@gmail.com"

                    iconphon={<AiOutlinePhone />}
                    conctinfoPhone="01025402633"

                    icondirection={<AiOutlineHome />}
                    conctinfoLocation="Shopra Blola"

                    iconfb={<AiOutlineFacebook />}
                    conctinfoFacebook="Mhamed Gamal"
                    />
                </div>
            </div>
        </div>
    );
}

export default Info;

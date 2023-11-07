import React from 'react';
import "./conctInfo.css"

const ConctInfo = (prpos) => {
    return (
        <>
            <div className="col-lg-3 mb-5">
                <div className='conectinfo-card'>
                    <div className='conecticon-div color-1'>
                        {prpos.iconmail}
                    </div>
                    <p className='conctinfo-text'>{prpos.conctinfoGmail}</p>
                </div>
            </div>
            <div className="col-lg-3 mb-5">
                <div className='conectinfo-card'>
                    <div className='conecticon-div color-2'>
                        {prpos.iconphon}
                    </div>
                    <p className='conctinfo-text'>{prpos.conctinfoPhone}</p>
                </div>
            </div>
            <div className="col-lg-3 mb-5">
                <div className='conectinfo-card'>
                    <div className='conecticon-div color-3'>
                        {prpos.icondirection}
                    </div>
                    <p className='conctinfo-text'>{prpos.conctinfoLocation}</p>
                </div>
            </div>
            <div className="col-lg-3 mb-5">
                <div className='conectinfo-card'>
                    <div className='conecticon-div color-4'>
                        {prpos.iconfb}
                    </div>
                    <p className='conctinfo-text'>{prpos.conctinfoFacebook}</p>
                </div>
            </div>
        </>
    );
}

export default ConctInfo;

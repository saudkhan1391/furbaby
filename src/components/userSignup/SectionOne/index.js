import React from 'react';
import Style from './style';

const SectionOne = () => {
    return (
        <section>
        <div className="d-flex">
             
                <div className="bg1">
                </div>
                <div className="trackerLogo">
                    <div>
                <img src={require('../../../assets/images/furbaby-logo.png')} /></div>
                <div>
                    <p className="para1">PEACE OF MIND, WHEN THEY NEED IT MOST</p>
                </div>
                <div>
                    <button className="btn-blue">login</button>
                </div>
                <div>
                    <button className="btn-purple">SIGNUP & START TRACKING</button>
                </div>
                </div>           
            <Style/>
        </div>
        </section>
    )
};

export default SectionOne;
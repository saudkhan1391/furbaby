import React from 'react';
import Style from './style'
import { Link } from 'react-router-dom';
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
                    <p className="para1 text-6xl">PEACE OF MIND, WHEN THEY NEED IT MOST</p>
                </div>
                <div>
                  <Link to="/login"><button className="btn-blue">LOGIN</button></Link>
                </div>
                <div>
                   <Link to="/signup"> <button className="btn-purple">SIGNUP & START TRACKING</button></Link>
                </div>
                </div>
               
           
        

              
           
            <Style/>
        </div>
        </section>
    )
};

export default SectionOne;
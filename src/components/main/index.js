import React from 'react';
import Style from './style';
import { Link } from "react-router-dom";
const About =(props)=>{
    let { dispatch, loaded } = props;
    return(
        <section>
            <div className="d-flex">
                <div className="bg1">
                </div>
                <div className="trackerLogo">
                    <div className="mb-16">
                        <img src={require('../../assets/images/fbt-grey.png')} alt="pic"/>
                    </div>
                    <div className="mb-16">
                        <p className="para1 text-6xl">PEACE OF MIND, WHEN THEY NEED IT MOST</p>
                    </div>
                    <div>
                        <Link to="/login"><button className="btn-blue">LOGIN</button></Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/signup"> <button className="btn-purple">SIGNUP & START TRACKING</button></Link>
                    </div>
                </div>
                <Style/>
            </div>
        </section>
    )
};

export default About;
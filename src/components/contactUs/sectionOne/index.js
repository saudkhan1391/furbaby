import React from 'react'
import Style from './style'
import { Link } from 'react-router-dom';
const sectionOne =()=>{
    return(
        <div>
             <section>
        <div className="d-flex">
             
                <div className="bg1">
                </div>
                <div className="trackerLogo">
                <div>
                <img src={require('../../../assets/images/furbaby-logo.png')} alt = "pic" />
                </div>
                <div className="formMain">
                <div className="form">
                  <label>Email</label> <br></br>
                  <input type="text"></input>
                </div>
                </div>
                <div className="form">
                  <label>Password</label> <br></br>
                  <input type="password"></input> 
                  </div>
                <div>
                    <button className="btn-blue">login</button><br></br>
                    <span className="forgotPassword">Forgot Password?</span>
                </div>
                <div className="form-signup">
                    <span className="account">Don’t have an account?</span><br></br>
                   <Link to="/signup"><button className="btn-purple">SIGNUP & START TRACKING</button></Link>
                </div>
                </div>
               
           
        

              
           
            <Style/>
        </div>
        </section>
            <Style/>
        </div>
    )
};
export default sectionOne;

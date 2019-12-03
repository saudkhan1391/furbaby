import React from 'react';
import Style from './style'
import { Link } from 'react-router-dom';
const SectionOne=() => {
    return (
        <div>
             <section>
        <div className="mainF d-flex">
             
                <div className="bg1">
                    <div className="bg-main ">
                        <div className="bg-text">
                            <h2>HOW IT WORKS</h2>
                            <h4>$19.99 Monthly Subscription<br></br> 
                             + Only pay for what you use</h4>
                            <p className="mt-8">Track 10 treatments as part of your monthly subscription,
                                 then pay $3 per treatment tracked after your initial 10. 
                                  Pass on a nominal technology fee for each treatment tracking
                                   and make money with Fur Baby Tracker.  The average clinic
                                    generates over $600 of profits per month with Fur Baby
                                     Tracker.  Sign up today and start tracking.</p>
                        </div>
                    </div>
                </div>
                <div className="trackerLogo">
                <div className="heading mt-12">
               <h1>BILLING & ACCOUNT INFORMATION</h1>
                </div>


                <div className="mainDiv mt-12">
                <div className="text1">
                    <label>Company Name</label>
                    <input type="text"></input>
                </div>
                <div className="text2">
                    <label>Email</label>
                    <input type="text"></input>
                </div>
                </div>
                
                <div className="mainDiv">
                <div className="text1">
                    <label>Phone Number</label>
                    <input type="number"></input>
                </div>
                <div className="text2">
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                </div>
                
                <div className="mainDiv">
                <div className="text1">
                    <label>Billing Name</label>
                    <input type="text"></input>
                </div>
                <div className="text2">
                    <label>Billing Address</label>
                    <input type="text"></input>
                </div>
                </div>
                
                <div className="mainDiv">
                <div className="text1">
                    <label>Country</label>
                    <input type="text"></input>
                </div>
                <div className="text2">
                    <label>State</label>
                    <input type="text"></input>
                </div>
                </div>
                
                <div className="mainDiv">
                <div className="text1">
                    <label>City</label>
                    <input type="text"></input>
                </div>
                <div className="text2">
                    <label>Zip Code</label>
                    <input type="number"></input>
                </div>
                </div>
                
                <div className="mainDiv">
                <div className="text1">
                    <label>Card Type</label>
                    <input type="text"></input>
                </div>
                <div className="text2">
                    <label>Card Number</label>
                    <input type="number"></input>
                </div>
                </div>
                
                <div className="mainDiv">
                <div className="text1">
                    <label>Expiry Date</label>
                    <input type="date"></input>
                </div>
                <div className="text2">
                    <label>CW Number</label>
                    <input type="number"></input>
                </div>
                </div>
                <div className="btn4">
                    <button className="btn-signUp">SIGNUP & START TRACKING</button>
                </div>
                <div className="btn4">
                <div className="btn5">
                    <p>Already have an account?</p>
                 <Link to="/login"><button>LOGIN</button></Link>
                </div>
                </div>
              </div>


                <Style/>
        </div>
        </section>
        </div>
    )
};

export default SectionOne;
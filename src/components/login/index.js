import React, { useState } from 'react'
import Style from './style'
import { Link } from 'react-router-dom';
import firebase from "../../utils/firebase";
import Loader from "../../commoncomponents/loader";

const sectionOne =()=>{

    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);
    const [recover, setRecover] = useState(false);
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(null);
    const [disabled, setDisabled] = useState(null);
    const [signInLoader, setSignIn] = useState(false);

    const signIn = (event) => {
        event.preventDefault();
        setDisabled(true);
        if(!recover){
            setSignIn(true);
            setSuccess(null);
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(confirmResult => {
                    setDisabled(false);
                    firebase.auth().currentUser.getIdTokenResult().then((token) => {
                        if(token.claims.practiceAdmin || token.claims.clinician){
                            setMessage(null);
                        }else {
                            setMessage(`Not a valid user!`);
                            firebase.auth().signOut();
                            setSignIn(false);
                        }
                    });
                })
                .catch(error => {
                    setSignIn(false);
                    setDisabled(false);
                    setMessage(`Something went wrong please try again!`);
                });
        } else {
            resetPassword();
        }
    };

    const resetPassword = () => {
        setSuccess(null);
        setMessage(null);
        firebase.auth().sendPasswordResetEmail(email).then(res => {
            setDisabled(false);
            setSuccess("Password visit your email to recover password");
        }).catch(function(err){

        });
    };


    return(
        <div>
            <section>
                <div className="d-flex">
                    <div className="bg1"/>
                    <form onSubmit={event => signIn(event)} className="trackerLogo">
                        <div>
                            <img src={require('../../assets/images/fbt-grey.png')} alt="pic" />
                        </div>
                        <div className="formMain">
                            <div className="form">
                                <label>Email</label> <br/>
                                <input type="email" onChange={event => setEmail(event.target.value)} required/>
                            </div>
                        </div>
                        {
                            !recover &&
                            <div className="form">
                                <label>Password</label> <br/>
                                <input type="password" onChange={event => setPass(event.target.value)} required/>
                            </div>
                        }
                        <p className="text-red-500">{message}</p>
                        <p className="text-green-500">{success}</p>
                        <div>
                            <button disabled={disabled} type="submit" className="btn-blue">{!recover ? "Login" : "Submit"}</button><br/>
                            <p className="forgotPassword" onClick={() => setRecover(!recover)}>{recover ? "Login" : "Forgot Password?"}</p>
                        </div>
                        <div className="form-signup">
                            <span className="account">Don’t have an account?</span><br/>
                            <Link to="/signup"><button className="btn-purple">SIGNUP & START TRACKING</button></Link>
                        </div>
                        {
                            signInLoader &&
                            <Loader backgroundColor="#ffffffc9"/>
                        }
                    </form>
                    <Style/>
                </div>
            </section>
            <Style/>
        </div>
    )
};
export default sectionOne;

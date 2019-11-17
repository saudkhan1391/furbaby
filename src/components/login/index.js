import React, { useState } from 'react'
import Style from './style'
import { Link } from 'react-router-dom';
import firebase from "../../utils/firebase";
import Loader from "../../commoncomponents/loader";

const sectionOne =({ dispatch, id })=>{

    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);
    const [recover, setRecover] = useState(false);
    const [message, setMessage] = useState(null);
    const [signInLoader, setSignIn] = useState(false);

    const signIn = (event) => {
        event.preventDefault();
        if(!recover){
            setSignIn(true);
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(confirmResult => {
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
                    setMessage(`Something went wrong please try again!`);
                });
        } else {
            resetPassword();
        }
    };

    const resetPassword = () => {
        firebase.auth().sendPasswordResetEmail(email).then(res => {

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
                        <div className="form">
                            <label>Password</label> <br/>
                            <input type="password" onChange={event => setPass(event.target.value)} required/>
                        </div>
                        <p className="text-red-500">{message}</p>
                        <div>
                            <button type="submit" className="btn-blue">login</button><br/>
                            <span className="forgotPassword">Forgot Password?</span>
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

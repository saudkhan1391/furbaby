import React, { useState, useEffect } from "react";
import Style from "./style";
import ReactPasswordStrength from "react-password-strength/dist/universal";
import "react-password-strength/dist/style.css";
import firebase from "../../utils/firebase";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { apiPath } from "../../config";
import Loader from "../../commoncomponents/loader";
import jwt_decode from "jwt-decode";

function createPetOwner({ match: {params: {id}} }) {
    let [password, setPassword] = useState("");
    let [rePassword, setRePassword] = useState("");
    let [match, setMatch] = useState(false);
    let [data, setData] = useState("");
    let [success, setSuccess] = useState(false);
    let [invalid, setInValid] = useState(false);
    let [mainId, setId] = useState(null);
    let [buttonText, setButton] = useState("CREATE");
    const [error, setError] = useState("");
    useEffect(() => {
        let temp = false;
        try{
            id = jwt_decode(id);
            setId(id);
            temp = true;
        }catch (err){
            temp = false;
        }
        if(temp){
            firebase.database().ref("/petOwner/"+id).once('value', (snapshot) => {
                let data = {...snapshot.val()};
                setData(data);
            });
        }else {
            setInValid(true);
        }
    }, []);

    const checkRePass = (value) => {
        setMatch(true);
        setRePassword(value);
        if(password === value){
            setMatch(false);
        }
    };


    const createAuth = (event) => {
        event.preventDefault();
        let payload = {
            ownerId: mainId,
            email: data.email,
            workPhone: data.workPhone,
            password: password
        };
        if(data.email){
            if(rePassword === password){
                setButton("CREATING...");
                axios.post(apiPath+"/createAuth", payload).then(res => {
                    setSuccess(true);
                    console.log("with phone res", res.data);
                    setButton("CREATED");
                }).catch(err => {
                    setButton("CREATE");
                    if(err && err.response && err.response.data && err.response.data.err){
                        setError(err.response.data.err);
                    }else {
                        setError("Something went wrong. Please contact your provider or try again later");
                    }
                });
            }
        }else {
            setButton("CREATING...");
            axios.post(apiPath+"/createAuth", payload).then(res => {
                setSuccess(true);
                setButton("CREATED");
            }).catch(err => {
                setButton("CREATE");
                if(err && err.response && err.response.data && err.response.data.err){
                    setError(err.response.data.err);
                }else {
                    setError("Something went wrong. Please contact your provider or try again later");
                }
            });;
        }
    };

    return (
        <div id="simpleModal" className="modal">
            <div className="relative modal-content">
                {
                    !data.uid ? !success ? <div>
                        {
                            !invalid ? data ? <form onSubmit={(event) => createAuth(event)}>
                                <div className="food-popup-heading">
                                    <h1>Pet Owner Details</h1>
                                </div>
                                <div className="food-popup-para mt-4">
                                    {
                                        data.email &&
                                        <p className="pt-2"><b>Email:</b> {data.email}</p>
                                    }
                                    {
                                        data.workPhone &&
                                        <p className="pt-2"><b>Phone:</b> {data.workPhone}</p>
                                    }

                                </div>
                                {
                                    data.email &&
                                    <div className="flex flex-col mb-2 inputvision mt-8">
                                        <label className="mb-1" htmlFor="first_name">Password</label>
                                        <ReactPasswordStrength
                                            minLength={8}
                                            maxLength={50}
                                            minScore={1}
                                            scoreWords={[
                                                "weak",
                                                "medium",
                                                "good",
                                                "strong",
                                                "stronger"
                                            ]}
                                            changeCallback={event => {
                                                setPassword(event.password);
                                            }}
                                            required
                                            inputProps={{
                                                autoComplete: "off",
                                                id: "password",
                                                minLength: 8,
                                                maxLength: 50,
                                                required: true
                                            }}
                                        />
                                    </div>
                                }

                                {
                                    data.email &&
                                    <div className="flex flex-col mb-2 inputvision mt-6">
                                        <label className="mb-1" htmlFor="first_name">Confirm password</label>
                                        <ReactPasswordStrength
                                            minLength={8}
                                            maxLength={50}
                                            minScore={1}
                                            scoreWords={[
                                                "weak",
                                                "medium",
                                                "good",
                                                "strong",
                                                "stronger"
                                            ]}
                                            changeCallback={event => {
                                                checkRePass(event.password);
                                            }}
                                            required
                                            inputProps={{
                                                autoComplete: "off",
                                                id: "password",
                                                minLength: 8,
                                                maxLength: 50,
                                                required: true
                                            }}
                                        />
                                        {
                                            match &&
                                            <p className="red">Passwords did not match</p>
                                        }
                                    </div>
                                }
                                <div className="error-message">
                                    <p className="red">{error}</p>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button type="submit" className="activityBtn-popup" disabled={buttonText === "CREATING..."}>{buttonText}</button>
                                </div>
                            </form> :<Loader/> : <div className="food-popup-heading text-center">
                                <h1 className="text-lg red">Token invalid</h1>
                            </div>
                        }
                    </div> : <div>
                        <div className="food-popup-heading text-center">
                            <h1 className="text-lg">You have successfully signed up for Furbaby pet owner app. Please <a href="http://bit.ly/2RB5KTe">click</a> here to download the app.</h1>
                        </div>
                    </div> : <div className="food-popup-heading text-center">
                        <h1 className="text-lg">You already have account in FBT please get your app from <a href="http://bit.ly/2RB5KTe">here</a> or for contacting support click <a href="https://www.furbabytracker.com/support">here</a>.</h1>
                    </div>
                }
                <Style/>
            </div>
        </div>
    )
}

export default withRouter(createPetOwner);
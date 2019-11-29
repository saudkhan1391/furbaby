import React, {useState, useEffect} from "react";
import axios from "axios";
import Style from './resetUserPopupStyle'
import { NotificationManager} from 'react-notifications';
import {apiPath} from "../../../config";
function editUser(props) {
    let {user, setResetPopup} = props;
    const [password, setPassword] = useState("");
    const [passwordValidator, setPasswordValidator] = useState("");
    const [rPassword, setRPassword] = useState("");
    const [rPasswordValidator, setRPasswordValidator] = useState("");
    const [button, setButton] = useState("UPDATE");

    const updateUser = (event) => {
        event.preventDefault();
        if (!password) {
            setPasswordValidator("required");
        }
        if (password && password.length < 8) {
            setPasswordValidator("Password must be 8 characters")
        }
        if (!rPassword) {
            setRPasswordValidator("required")
        }
        if (rPassword && rPassword.length < 8) {
            setRPasswordValidator("Password must be 8 characters")
        }
        if (!password || password.length < 8 || !rPassword || rPassword.length < 8) {
            return;
        } else if (password !== rPassword) {
            setRPasswordValidator("Password do not match")
        } else {
            setButton("UPDATING...");
            let payload = {
                password: password,
            };
            axios.put((apiPath + "/resetClinicianPassword?uid=" + user.uid), payload).then(res => {
                setButton("UPDATED");
                setTimeout(() => {
                    setButton("UPDATE");
                }, 5000);
                // showMessage({
                //     message: "Password Updated Successfully",
                //     type: "success",
                //     backgroundColor: "#28a745",
                //     color: "white",
                //     icon: "info"
                // });
                setPassword("");
                setRPassword("");
                NotificationManager.success('Password Updated Successfully.', 'User Update.');
            }).catch(err => {
                console.log("err", err.response)
                NotificationManager.error('Something went wrong.', 'User Update.');
            });
        }
    };

    return <div id="simpleModal" className="modal">
        <div className="modal-content">
            <div className="flex justify-end">
                <img onClick={() => setResetPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
            </div>
            <form onSubmit={(event) => updateUser(event)}>
                <div className="flex flex-wrap justify-center">
                    <div className="mr-12">
                        <label className="block label-text mb-2">New Password<span
                            style={{color: "red"}}>*</span></label>
                        <input className="input-field py-1  px-2"
                               style={passwordValidator ? {borderColor: "red"} : {borderColor: ""}}
                               type="password"
                               value={password}
                               onChange={(event) => {
                                   setPassword(event.target.value);
                                   passwordValidator ? setPasswordValidator("") : "";
                               }}
                        />
                        <div style={{height: "13px"}}>
                            <p style={{color: "red", fontSize: 12}}>
                                {passwordValidator ? passwordValidator : ""}
                            </p>
                        </div>
                    </div>
                    <div className="mr-12">
                        <label className="block label-text mb-2">Re-enter Password <span
                            style={{color: "red"}}>*</span></label>
                        <input className="input-field py-1  px-2"
                               type="password"
                               style={rPasswordValidator ? {borderColor: "red"} : {borderColor: ""}}
                               value={rPassword}
                               onChange={(event) => {
                                   setRPassword(event.target.value);
                                   rPasswordValidator ? setRPasswordValidator("") : ""
                               }}
                        />
                        <div style={{height: "13px"}}>
                            <p style={{color: "red", fontSize: 12}}>
                                {rPasswordValidator ? rPasswordValidator : ""}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-24">
                    <button className="activityBtn-popup">{button}</button>
                    <button className="CnclBtn-popup ml-4" onClick={() => setResetPopup(false)}>CANCEL</button>
                </div>
            </form>
        </div>
        <Style/>
    </div>
}

export default editUser;
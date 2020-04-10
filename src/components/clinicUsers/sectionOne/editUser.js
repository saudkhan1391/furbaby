import React, {useState, useEffect} from "react";
import axios from "axios";
import Style from './editUserPopuStyle'
import {apiPath} from "../../../config";
import { NotificationManager} from 'react-notifications';
import {validateEmail} from "../../functions";
function editUser(props) {
    let {user, setEditPopup, addUsers} = props;
    const [firstName, setFirstName] = useState("");
    const [firstNameValidator, setFirstNameValidator] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameValidator, setLastNameValidator] = useState(false);
    const [email, setEmail] = useState("");
    const [emailValidator, setEmailValidator] = useState(false);
    const [jobTitle, setJobTitle] = useState("");
    const [jobTitleValidator, setJobTitleValidator] = useState(false);
    const [workPhone, setWorkPhone] = useState("");
    const [workPhoneValidator, setWorkPhoneValidator] = useState(false);
    const [button, setButton] = useState("UPDATE");
    const [role, setRole] = useState("");

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setJobTitle(user.jobTitle);
            setWorkPhone(user.workPhone);
        }
    }, [user]);

    const updateUser = (event) => {
        event.preventDefault();
        let payload = {
            name: firstName,
            clinicId: user.clinicId,
            firstName: firstName,
            lastName: lastName,
            email,
            workPhone,
            uid: user.uid,
            jobTitle,
            joinDate: user.joinDate,
            role: role
        };
        if (!firstName) {
            setFirstNameValidator(true);
        }
        if (!lastName) {
            setLastNameValidator(true)
        }
        if (!email || !validateEmail(email)) {
            setEmailValidator(true)
        }
        if (!workPhone) {
            setWorkPhoneValidator(true)
        }
        if (!jobTitle) {
            setJobTitleValidator(true)
        }
        if (!firstName || !lastName || !email || !workPhone || !jobTitle) {
            return
        }
        else {
            setButton("UPDATING...");
            axios.post((apiPath + "/updateClinician/?id=" + user.uid), payload).then(res => {
                addUsers();
                setButton("UPDATED");
                NotificationManager.success('User successfully Updated.', 'User Update.');
                setTimeout(() => {
                    setButton("UPDATE");
                }, 5000);
            }).catch(err => {
                console.log("err", err.response)
                setButton("UPDATE");
                NotificationManager.error('Something went wrong.', 'User Update.');
            });
        }
    };

    return <div id="simpleModal" className="modal">
        <div className="modal-content">
            <div className="flex justify-end">
                <img onClick={() => setEditPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
            </div>
            <form onSubmit={(event) => updateUser(event)}>
                <div className="flex flex-wrap">
                    <div className="mr-12">
                        <label className="block label-text mb-2">User First Name <span
                            style={{color: "red"}}>*</span></label>
                        <input className="input-field py-1  px-2"
                               style={firstNameValidator ? {borderColor: "red"} : {borderColor: ""}}
                               type="text" value={firstName}
                               onChange={(event) => {
                                   setFirstName(event.target.value);
                                   setFirstNameValidator(false);
                               }}/>
                        <div style={{height: "13px"}}>
                            {firstNameValidator && <p style={{color: "red", fontSize: 12}}>
                                required
                            </p>}
                        </div>
                    </div>
                    <div className="mr-12">
                        <label className="block label-text mb-2">User Last Name <span
                            style={{color: "red"}}>*</span></label>
                        <input className="input-field py-1  px-2" type="text"
                               value={lastName ? lastName : ""}
                               onChange={(event) => {
                                   setLastName(event.target.value);
                                   setLastNameValidator(false);
                               }}
                               style={lastNameValidator ? {borderColor: "red"} : {borderColor: ""}}
                        />
                        <div style={{height: "13px"}}>
                            {lastNameValidator && <p style={{color: "red", fontSize: 12}}>
                                required
                            </p>}
                        </div>
                    </div>
                    <div className="mr-12">
                        <label className="block label-text mb-2">Email <span style={{color: "red"}}>*</span></label>
                        <input className="input-field py-1  px-2" type="text"
                               value={email}
                               onChange={(event) => {
                                   setEmail(event.target.value);
                                   setEmailValidator(false);
                               }}
                               style={emailValidator ? {borderColor: "red"} : {borderColor: ""}}
                        />
                        <div style={{height: "13px"}}>
                            {emailValidator && <p style={{color: "red", fontSize: 12}}>
                                {email ? "Email is Invalid" : "required"}
                            </p>}
                        </div>
                    </div>
                    <div>
                        <label className="block label-text mb-2">Work Phone <span
                            style={{color: "red"}}>*</span></label>
                        <input className="input-field py-1  px-2"
                               value={workPhone}
                               onChange={(event) => {
                                   setWorkPhone(event.target.value);
                                   setWorkPhoneValidator(false);
                               }}
                               style={workPhoneValidator ? {borderColor: "red"} : {borderColor: ""}}
                        />
                        <div style={{height: "13px"}}>
                            {workPhoneValidator && <p style={{color: "red", fontSize: 12}}>
                                required
                            </p>}
                        </div>
                    </div>
                    <div className="mr-12">
                        <label className="block label-text mb-2">Job Title <span
                            style={{color: "red"}}>*</span></label>
                        <input className="input-field py-1  px-2" type="text"
                               value={jobTitle}
                               onChange={(event) => {
                                   setJobTitle(event.target.value);
                                   setJobTitleValidator(false);
                               }}
                               style={jobTitleValidator ? {borderColor: "red"} : {borderColor: ""}}
                        />
                        <div style={{height: "13px"}}>
                            {jobTitleValidator && <p style={{color: "red", fontSize: 12}}>
                                required
                            </p>}
                        </div>
                    </div>
                    <div>
                        <label className="block label-text mb-2">Role</label>
                        <select className="input-field py-1  px-2"
                                value={role}
                                onChange={(event) => {
                                    setRole(event.target.value);
                                }}
                        >
                            <option value=""/>
                            <option value="staff">Staff</option>
                            <option value="practiceManager">Practice Manager</option>
                            <option value="veterinarian">Veterinarian</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center mt-24">
                    <button className="activityBtn-popup">{button}</button>
                    <button className="CnclBtn-popup ml-4" onClick={() => setEditPopup(false)}>CANCEL</button>
                </div>
            </form>
        </div>
        <Style/>
    </div>
}

export default editUser;
import React, {useState, useEffect} from "react";
import EditUser from './editUser';
import ResetUser from './resetPassword';
import Style from './style';
import axios from "axios";
import {validateEmail} from "../../functions";
import {apiPath} from "../../../config";
import { NotificationManager} from 'react-notifications';
const SectionOne = (props) => {
    let {clinicId, dispatch, users} = props;

    const [firstName, setFirstName] = useState("");
    const [firstNameValidator, setFirstNameValidator] = useState(false);
    const [editPopup, setEditPopup] = useState(false);
    const [resetPopup, setResetPopup] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameValidator, setLastNameValidator] = useState(false);
    const [email, setEmail] = useState("");
    const [emailValidator, setEmailValidator] = useState(false);
    const [jobTitle, setJobTitle] = useState("");
    const [jobTitleValidator, setJobTitleValidator] = useState(false);
    const [workPhone, setWorkPhone] = useState("");
    const [workPhoneValidator, setWorkPhoneValidator] = useState(false);
    const [allUsers, setUsers] = useState(null);
    const [userIndex, setUserIndex] = useState(0);
    const [panel, setPanel] = useState(700);
    const [userData, setUserData] = useState({});
    const [button, setButton] = useState("ADD NEW USER");
    const [role, setRole] = useState("clinician");
    useEffect(() => {
        if (users.length === 0) {
            addUsers();
        } else {
            setUsers(users);
        }

    }, [users]);
    const addUsers = () => {
        axios.post(apiPath + "/getAllClinicUsers", {
            clinicId: clinicId
        }).then(res => {
            dispatch({
                type: "SET_ALL_USERS",
                payload: res.data.data
            });
            setUsers(res.data.data);
        })
    };

    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            axios.delete(apiPath + "/deleteClinician?uid=" + id).then(res => {
                dispatch({
                    type: "SET_ALL_USERS",
                    payload: allUsers.filter(item => item.uid !== id)
                });
                // showMessage({
                //     message: "User successfully deleted.",
                //     type: "success",
                //     backgroundColor: "#28a745",
                //     color: "white",
                //     icon: "info"
                // });
                NotificationManager.success('User successfully deleted.', 'User Update.');
            });
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
        let payload = {
            clinicId: clinicId,
            firstName: firstName,
            lastName: lastName,
            email,
            phone: workPhone,
            workPhone,
            mobilePhone: workPhone,
            fax: "",
            joinDate: new Date(),
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
            setButton("ADDING...");
            axios.post(apiPath + "/addClinicianByFBTAdmin", payload).then(res => {
                setButton("ADD NEW USER");
                // showMessage({
                //     message: "New user added successfully",
                //     type: "success",
                //     backgroundColor: "#28a745",
                //     color: "white",
                //     icon: "info"
                // });
                NotificationManager.success('New user added successfully.', 'User Update.');
                setFirstName("");
                setLastName("");
                setEmail("");
                setWorkPhone("");
                setJobTitle("");
                dispatch({
                    type: "SET_ALL_USERS",
                    payload: []
                });
                addUsers();
            }).catch(err => {

            })
        }
    };

    const setEditUserPopup = (user) => {
        setUserData(user);
        setEditPopup(true);
    };

    const setResetUserPopup = (user) => {
        setUserData(user);
        setResetPopup(true);
    };


    return (
        <div>
            <div className="manageUsersAll container mx-auto">
                <div className="mt-12">
                    <h2 className="heading">MANAGE USERS</h2>
                    <div className="hr mt-4"></div>
                </div>
                <div className="mt-12 mb-8">
                    <h2 className="heading-2">ADD A NEW FUR BABY TRACKER USER</h2>
                </div>
                <form onSubmit={(event) => onSubmit(event)}>
                    <div className="flex flex-wrap">
                        <div className="mr-12">
                            <label className="block label-text mb-2">User First Name <span
                                style={{color: "red"}}>*</span></label>
                            <input className="input-field py-1  px-2"
                                   style={firstNameValidator ? {borderColor: "red"} : {borderColor: ""}}
                                   type="text" value={firstName}
                                   onChange={(event) => {
                                       setFirstName(event.target.value);
                                       firstNameValidator ? setFirstNameValidator(false) : "";
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
                                       lastNameValidator ? setLastNameValidator(false) : "";
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
                                       emailValidator ? setEmailValidator(false) : "";
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
                                       workPhoneValidator ? setWorkPhoneValidator(false) : "";
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
                                       jobTitleValidator ? setJobTitleValidator(false) : "";
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
                                <option value="clinician">Staff</option>
                                <option value="practiceManager">Practice Manager</option>
                                <option value="veterinarian">Veterinarian</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="inline btn-chk1 mr-4">{button}</button>
                        {/*<button className="inline btn-chk2">DEACTIVATE USER</button>*/}
                    </div>
                </form>
                <div className="mt-12 mb-8">
                    <h2 className="heading-2">USER MANAGEMENT</h2>
                </div>
                <div className="overFlowDiv">
                    <table className="mb-12 table-data">
                        <th></th>
                        <th className="text-left head-text pb-2">User Name</th>
                        <th className="text-left head-text">Email</th>
                        <th className="text-left head-text">Job Title</th>
                        <th className="text-left head-text">Role</th>
                        <th className="text-left head-text">Actions</th>
                        <tbody>
                        {/*{let a = {clinicId: "-LriNdcv8W30HhcqU_Q7"*/}
                        {/*email: "development@redsqware.com"*/}
                        {/*firstName: "Development"*/}
                        {/*jobTitle: "Practive Admin"*/}
                        {/*joinDate: "1571662503458"*/}
                        {/*lastName: "Test Yes"*/}
                        {/*role: "practiceAdmin"*/}
                        {/*uid: "5WUnaZozZYWG3vAXp1Vojs2XmWa2"*/}
                        {/*workPhone: "+923333333333"}}*/}
                        {users && users.length !== 0 && users.map((sin, index) => <tr key={index}
                                                                                      className="data-back-g">
                            <td className="py-5 pl-5 img"></td>
                            <td className="py-5 pr-5 pl-0 text">{sin.firstName}</td>
                            <td className="py-5 email text">{sin.email}</td>
                            <td className="py-5 pr-5 text">{sin.jobTitle ? sin.jobTitle : "-"}</td>
                            <td className="py-5 pr-5 flex text">
                                <div className="oval-g mr-3"></div>
                                {sin.role}
                            </td>
                            <td className="py-5 pr-5 last text">
                                <button className="action-btn1 mr-4" onClick={() => setEditUserPopup(sin)}>EDIT USER
                                </button>
                                <button className="action-btn3 mr-4" onClick={() => deleteUser(sin.uid)}>DELETE
                                    USER
                                </button>
                                <button className="action-btn2" onClick={() => setResetUserPopup(sin)}>RESET PASSWORD</button>
                            </td>
                        </tr>)}
                        </tbody>
                    </table>
                </div>
                {editPopup && <EditUser setEditPopup={setEditPopup} user={userData} addUsers={addUsers}/>}
                {resetPopup && <ResetUser setResetPopup={setResetPopup} user={userData}/>}
            </div>
            {/*container*/}
            <Style />
        </div>
    );
}

export default SectionOne;
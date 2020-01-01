import React, {useState, useEffect} from 'react';
import Style from './style';
import axios from 'axios';
import {apiPath} from "../../../config";
import { NotificationManager} from 'react-notifications';
import { detectPhone } from "../../functions";
const SectionFour = (props) => {
    let {current, setAddedPopup, updateCurrentValue} = props;
    const [button, setButton] = useState("UPDATE");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(current){
            setFirstName(current.firstName);
            setLastName(current.lastName);
            setPhone(current.workPhone);
            setEmail(current.email);
        }
    }, [current]);

    const addFurbaby = () => {
        let main = {...current};
        main.firstName = firstName;
        main.lastName = lastName;
        main.email = email;
        main.workPhone = (phone);
        let temp = {...main};
        delete main.pets;
        setButton("UPDATING...");
        setError("");
        axios.post(apiPath + "/updatePetOwner", main).then(res => {
            setButton("UPDATED");
            updateCurrentValue(temp);
            setTimeout(() =>  {
                setButton("UPDATE");
            }, 7000);
            setAddedPopupClose();
            NotificationManager.success('Pet Owner information has been successfully updated', 'Pet Owner ');
        }).catch(err => {
            if(err && err.response && err.response.data && err.response.data.err){
                if(err.response.data.err.code === "auth/invalid-phone-number"){
                    setError("Invalid phone number. Phone number format should be +10000000000");
                }else {
                    setError(err.response.data.err.message);
                }
            }
            setButton("UPDATE");
        });
    };

    const setAddedPopupClose = () => {
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setAddedPopup(false)
    };


    return (
        <div id="simpleModal" className="modal">
            <div className="modal-content">
                <div className="flex justify-end">
                    <img onClick={() => {
                        setAddedPopupClose()
                    }} src={require('../../../assets/images/close.png')}
                         alt="pic"/>
                </div>
                <div className="container mx-auto">
                    <div className="flex mb-4">
                        <div className="w-full mt-12">
                            <div className="customMedication">
                                <h1>PET OWNER DETAILS</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2 mt-8 ml-10">
                        <div className="w-1/2 px-2">
                            <div className="h-12">
                                <div className="flex flex-col mb-4 inputvision">
                                    <label className="mb-2" htmlFor="first_name">First Name</label>
                                    <input className="border py-2 px-3 " type="text"
                                           value={firstName}
                                           onChange={event => {
                                               setFirstName(event.target.value);
                                           }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 px-2">
                            <div className="h-12">
                                <div className="flex flex-col mb-4 inputvision">
                                    <label className="mb-2" htmlFor="first_name">Last Name</label>
                                    <input className="border py-2 px-3 " type="text"
                                           value={lastName}
                                           onChange={event => {
                                               setLastName(event.target.value);
                                           }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2 mt-8 ml-10">
                        <div className="w-1/2 px-2">
                            <div className="h-12">
                                <div className="flex flex-col mb-4 inputvision">
                                    <label className="mb-2" htmlFor="first_name">Email</label>
                                    <input className="border py-2 px-3 " type="text"
                                           value={email}
                                           onChange={event => {
                                               setEmail(event.target.value);
                                           }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 px-2">
                            <div className="h-12">
                                <div className="flex flex-col mb-4 inputvision">
                                    <label className="mb-2" htmlFor="first_name">Phone Number</label>
                                    <input className="border py-2 px-3 " type="text"
                                           value={phone}
                                           onChange={event => {
                                               setPhone(event.target.value);
                                           }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="ml-12 h-32">
                        <div className="flex w-100 mb-4">
                            <p className="red-color">{error}</p>
                        </div>
                        <div className="flex w-100">
                            <div className="savebtnText mr-4">
                                <button onClick={(event) => {
                                    addFurbaby()
                                }}>{button}
                                </button>
                            </div>
                            <div className="savebtnText">
                                <button className="bg-grey" onClick={() => {
                                    setAddedPopupClose()
                                }}>Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Style/>
        </div>
    );
}
export default SectionFour;
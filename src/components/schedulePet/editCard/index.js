import React, {useEffect, useState} from "react";
import axios from "axios";
import {apiPath} from "../../../config";
import DatePicker from 'react-date-picker';
import {timeZoneUS} from '../../functions';
import {NotificationManager} from 'react-notifications';
import History from "./historyCard";
import Loader from "../../../commoncomponents/loader";
function EditCard(props) {

    let {setForm, showForm, dispatch, setShow, schedule, setSchedule} = props;
    let {description, startTime, appointmentStatus, petOwner: {phone: ownerPhone}} = showForm;
    const [date, setDate] = useState(startTime);
    const [status, setStatus] = useState(appointmentStatus);
    const [statuses, setStatuses] = useState(appointmentStatus);
    const [text, setText] = useState(description);
    const [addPhone, setAddPhone] = useState(false);
    const [phone, setPhone] = useState(null);
    const [load, setLoad] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    useEffect(() => {
        if (schedule) {
            setStatus("In Hospital");
        }
        setStatus(appointmentStatus);
        setStatuses(appointmentStatus);
        setDate(startTime);
        setText(description);
    }, [schedule, startTime, appointmentStatus, description]);

    const setLoader = () => {
        setShow(false);
        setForm(false);
        setTimeout(() => {
            setShow(true);
            dispatch({
                type: "SET_LOADER",
                payload: false
            })
        });
    };


    const checkIn = () => {
        let data = {...showForm};
        data.appointmentStatus = status;
        data.startTime = (new Date(date)).toISOString();
        data.description = text;
        let main = {...data};
        delete main.pet;
        delete main.petOwner;
        let payload = {};
        if (!addPhone) {
            payload = {
                appointment: main
            }
        } else {
            payload = {
                appointment: main,
                workPhone: phone
            }
        }

        dispatch({
            type: "SET_LOADER",
            payload: true
        });
        setLoad(true);
        if (status === "In Hospital") {
            axios.post(apiPath + "/appointmentStatusInHospital", payload).then(res => {
                dispatch({
                    type: "UPDATE_CURRENT_FURBABY",
                    payload: data
                });
                setLoader();
                setSchedule(false);
                setLoad(false);
                if (status === "In Hospital" && status !== statuses) {
                    NotificationManager.success('Furbaby successfully checked in', 'Furbaby Check in');
                } else {
                    NotificationManager.success('Furbaby schedule is updated successfully', 'Schedule Updated');
                }
            }).catch(err => {
                if (err.response.data.err.message) {
                    dispatch({
                        type: "SET_LOADER",
                        payload: false
                    });
                } else {
                    setLoader();
                    setSchedule(false);
                }
                setLoad(false);
            })
        } else {
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: data
            });
            setLoader();
            setSchedule(false);
            setLoad(false);
            NotificationManager.success('Furbaby schedule is updated successfully', 'Schedule Updated');
        }
    };


    const removeFromSchedule = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            dispatch({
                type: "REMOVE_CURRENT_FURBABY",
                payload: id
            });
            setLoader();
        }
    };

    return (
        <div className="px-2 relative pb-10">
            <div className="flex flex-wrap -mx-2 mt-8">
                {
                    !ownerPhone &&
                    <div className="w-screen phone-message">
                        <div className="flex flex-col mb-4 inputvision">
                            <p>Owners phone number doesn't exist. <span onClick={() => setAddPhone(!addPhone)}>{!addPhone ? "Add" : "Remove"}</span></p>
                        </div>
                    </div>

                }
                {
                    !ownerPhone && addPhone &&
                    <div className="w-screen px-2">
                        <div className="flex flex-col mb-4 inputvision">
                            <label className="mb-2" htmlFor="first_name">Owner Phone</label>
                            <input value={phone} className="border py-2 px-3 h-10" type="text"
                                   onChange={event => setPhone(event.target.value)}/>
                        </div>
                    </div>
                }
                <div className="w-screen px-2">
                    <div className="flex flex-col mb-4 inputvision">
                        <label className="mb-2" htmlFor="first_name">Visit Reason</label>
                        <input value={text} className="border py-2 px-3 h-10" type="text"
                               onChange={event => setText(event.target.value)}/>
                    </div>
                </div>
                <div className="w-screen px-2">
                    <div className="flex flex-col mb-4 inputvision">
                        <label className="mb-2" htmlFor="first_name">Status</label>
                        <select className="border py-2 px-3 h-10" id="" value={status} disabled={status === "Complete"}
                                onChange={(event) => setStatus(event.target.value)}>
                            <option value=""/>
                            {
                                status === "Complete" &&
                                <option value="Complete">Complete</option>
                            }
                            <option value="Confirmed">Confirmed</option>
                            <option value="In Hospital">Check In</option>
                        </select>
                    </div>
                </div>
                <div className="w-screen px-2">
                    <div className="flex flex-col mb-4 inputvision">
                        <label className="mb-2" htmlFor="first_name">Schedule Date</label>
                        <DatePicker
                            onChange={event => setDate(timeZoneUS(event))}
                            value={timeZoneUS(date)}
                        />
                        {/*<input className="border py-2 px-3 h-10" value={date} onChange={event => setDate((new Date(event.target.value)).toISOString())} type="datetime-local" placeholder="06/22/2019 12:00 PM"/>*/}
                    </div>
                </div>
            </div>

            <div className="flex mb-4 mt-5 allButtons">
                <button className="rmvBtn mr-4" onClick={() => removeFromSchedule(showForm.appointmentId)}>REMOVE FROM
                    SCHEDULE
                </button>
                <button className="rmvBtn mr-4"
                        onClick={() => setShowHistory(!showHistory)}>{showHistory ? "HIDE" : "VIEW"} PATIENT RECORD
                </button>
                <button className="saveBtn mr-4" onClick={() => checkIn()}>SAVE CHANGES</button>
                <button className="cancelBtn mr-4" onClick={() => setForm(null)}>CANCEL</button>
            </div>
            {
                showHistory && showForm &&
                <History showForm={showForm}/>
            }
            {
                load &&
                <Loader backgroundColor="#ffffffc9"/>
            }
        </div>
    )
}

export default EditCard;
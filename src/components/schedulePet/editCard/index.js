import React, {useEffect, useState} from "react";
import axios from "axios";
import {apiPath} from "../../../config";
import DatePicker from 'react-date-picker';
import {NotificationManager} from 'react-notifications';
import History from "./historyCard";
import Loader from "../../../commoncomponents/loader";
import { detectPhone, defaultTracker } from "../../functions";
import firebase from "../../../utils/firebase";

function EditCard(props) {

    let {setForm, showForm, dispatch, schedule, setSchedule, clinic} = props;
    let {description, startTime, appointmentStatus, trackingComponent} = showForm;
    const [date, setDate] = useState(startTime);
    const [status, setStatus] = useState(appointmentStatus);
    const [statuses, setStatuses] = useState(appointmentStatus);
    const [text, setText] = useState(description);
    const [addPhone, setAddPhone] = useState(false);
    const [phone, setPhone] = useState("");
    const [load, setLoad] = useState(false);
    const [show, setShow] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [ownerPhone, setOwnerPhone] = useState(null);
    const [trackerComponents, setTrackerComponent] = useState(JSON.parse(trackingComponent));
    const [showHistory, setShowHistory] = useState(false);
    let defaultTrackers = clinic.trackers ? JSON.parse(clinic.trackers) : defaultTracker();
    const [custom, setCustom] = useState("");
    useEffect(() => {
        setStatus(appointmentStatus);
        setStatuses(appointmentStatus);
        setDate(startTime);
        setText(description);
        setText(description);
        setTrackerComponent(JSON.parse(trackingComponent));
        if (schedule) {
            setStatus("In Hospital");
        }
        firebase.database().ref("/petOwner/"+showForm.petOwnerId+"/workPhone").on('value', (snapshot) => {
            setOwnerPhone(snapshot.val());
            setShowPhone(true);
        });
    }, [schedule, startTime, appointmentStatus, description]);


    const setLoader = () => {
        setForm(false);
        setTimeout(() => {
            dispatch({
                type: "SET_LOADER",
                payload: false
            })
        });
    };

    const setCurrentTracker = (index, value) => {
        let components = JSON.parse(JSON.stringify(trackerComponents));
        components[index].show = value;
        setTrackerComponent(components);
    };

    const checkIn = () => {
        let data = {...showForm};

        let mainData = [...trackerComponents];
        let temp = [];
        let newCustom = custom.split('\n');
        newCustom.forEach((item, index) => {
            if (item) {
                mainData.push({
                    id: index + 1,
                    title: item,
                    value: false,
                    status: 1,
                    show: true
                })
            }
        });
        mainData.forEach(item => {
            if (item.show || item.show === undefined) {
                temp.push(item);
            }
        });


        data.trackingComponent = JSON.stringify(temp);
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
                workPhone: phone ? detectPhone(phone) : ""
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
            firebase.database().ref("/appointments").child(id).remove();
            setLoader();
        }
    };

    const setValue = (value) => {
        setText(value);
        let tracker = defaultTrackers.find(item => item.name === value);
        if (tracker !== undefined) {
            setTrackerComponent([]);
            setTimeout(() => {
                let temp = [...tracker.trackers];
                temp.forEach(item => {
                    item.show = true;
                });
                setTrackerComponent(temp);
            }, 1);
        } else {
            setTrackerComponent([]);
        }
    };

    const setField = (value) => {
        setCustom(value)
    };

    return (
        <div className="px-2 relative pb-10">
            <div className="flex flex-wrap -mx-2 mt-8">
                {
                    showPhone && !ownerPhone &&
                    <div className="w-screen phone-message mb-4">
                        <div className="flex flex-col mb-4 inputvision">
                            <p>Owners phone number doesn't exist. <span
                                onClick={() => setAddPhone(!addPhone)}>{!addPhone ? "Add" : "Remove"}</span></p>
                        </div>
                    </div>

                }
                {
                    showPhone && !ownerPhone && addPhone &&
                    <div className="w-screen px-2">
                        <div className="flex flex-col mb-4 inputvision">
                            <label className="mb-2" htmlFor="first_name">Owner Phone</label>
                            <input value={phone} className="border py-2 px-3 h-10" type="number" placeholder="0000000000"
                                   onChange={event => setPhone(event.target.value)}/>
                        </div>
                    </div>
                }
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
                            onChange={(event) => {
                                setDate(event)
                            }}
                            value={new Date(date)}
                        />
                        {/*<input className="border py-2 px-3 h-10" value={date} onChange={event => setDate((new Date(event.target.value)).toISOString())} type="datetime-local" placeholder="06/22/2019 12:00 PM"/>*/}
                    </div>
                </div>
                <div className="w-screen px-2">
                    <div className="flex flex-col mb-4 inputvision">
                        <label className="mb-2" htmlFor="first_name">Visit Reason</label>
                        {/*<input value={text} className="border py-2 px-3 h-10" type="text"*/}
                        {/*onChange={event => setText(event.target.value)}/>*/}
                        <select className="border py-2 px-3 h-10" value={text} onChange={event => {
                            setValue(event.target.value);
                        }}>
                            <option value="">Select</option>
                            {
                                defaultTrackers.map((item, index) => {
                                    return <option key={index} label={item.name}
                                                   value={item.name}/>
                                })
                            }
                        </select>
                    </div>
                </div>
                {
                    show ? <div>
                        <div className="flex justify-between pl-12 mt-10 treatment">
                            <div>
                                <h1>DEFAULT TREATMENT PLAN INCLUDES</h1>
                            </div>
                            <div className="mr-16">
                                <button onClick={() => setShow(false)}>REMOVE</button>
                            </div>
                        </div>
                        <div className="pl-12 mt-4 optional">
                            <p>OPTIONAL - CUSTOMIZE TREATMENT PLAN</p>
                        </div>
                        <div className="flex pl-12 mt-8 label">
                            <div className="checkbox1 flex flex-wrap">
                                {trackerComponents.map((single, index) => {
                                        return (<div key={index} className="flex mr-12 check-mar pt-4">
                                            <label className="container1">
                                                <input type="checkbox" name="same"
                                                       defaultChecked={single.show || single.show === undefined}
                                                       onClick={(event) => setCurrentTracker(index, event.target.checked)}/>
                                                <span className="checkmark"/>
                                            </label>
                                            <label>{single.title}</label>
                                        </div>)
                                    }
                                )}
                            </div>
                        </div>
                        <div className="pl-12 mt-8">
                            <div className="addCustom">
                                <p>Add custom plan components</p>
                            </div>
                            <div className="fotText-area">
                                        <textarea
                                            onChange={event => setField(event.target.value)}
                                            rows="5" cols="80"/>
                            </div>
                        </div>
                    </div> :
                        <div className="mt-5 pl-2" onClick={() => setShow(true)}>
                            <button className="reviewBtn">OPTIONAL: REVIEW & CUSTOMIZE TREATMENT PLAN</button>
                        </div>
                }
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
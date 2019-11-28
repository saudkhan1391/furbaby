import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiPath } from "../../../config";
import DateTimePicker from 'react-datetime-picker';

function EditCard(props) {

    let { setForm, showForm, dispatch, setShow, scrollToDetail, setShowHistory, setShowEdit, schedule, setSchedule } = props;
    let { pet, description, startTime, appointmentStatus, petOwner: { phone: ownerPhone } } = showForm;
    const [date, setDate] = useState(startTime);
    const [status, setStatus] = useState(appointmentStatus);
    const [text, setText] = useState(description);
    const [addPhone, setAddPhone] = useState(false);
    const [phone, setPhone] = useState(null);

    useEffect(() => {
        if(schedule){
            setStatus("In Hospital");
        }
    }, [schedule]);

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
        data.startTime = date;
        data.description = text;
        let main = {...data};
        delete main.pet;
        delete main.petOwner;
        let payload = {};
        if(!addPhone){
            payload = {
                appointment: main
            }
        }else {
            payload = {
                appointment: main,
                workPhone: phone
            }
        }
        dispatch({
            type: "SET_LOADER",
            payload: true
        });
        if(status === "In Hospital"){
            axios.post(apiPath+"/appointmentStatusInHospital", payload).then(res => {
                dispatch({
                    type: "UPDATE_CURRENT_FURBABY",
                    payload: data
                });
                setLoader();
                setSchedule(false);
            }).catch(err => {
                if(err.response.data.err.message){
                    dispatch({
                        type: "SET_LOADER",
                        payload: false
                    });
                }else {
                    setLoader();
                    setSchedule(false);
                }
            })
        }else {
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: data
            });
            setLoader();
            setSchedule(false);
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

    const showHistory = () => {
        setShowHistory(true);
        setTimeout(() => {
            scrollToDetail();
        })
    };

    console.log(date);

    return (
        <div className="px-2">
            <div className="flex flex-wrap -mx-2 mt-8">
                <div className="w-1/2 px-2">
                    <div className="flex flex-col mb-4 inputvision">
                        <label className="mb-2" htmlFor="first_name">Visit Reason</label>
                        <input value={text} className="border py-2 px-3 h-10" type="text" onChange={event => setText(event.target.value)}/>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="flex flex-col mb-4 inputvision">
                        <label className="mb-2" htmlFor="first_name">Status</label>
                        <select className="border py-2 px-3 h-10" id="" value={status} onChange={(event) => setStatus(event.target.value)}>
                            <option value=""/>
                            <option value="Confirmed">Confirmed</option>
                            <option value="In Hospital">Check In</option>
                        </select>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="flex flex-col mb-4 inputvision">
                        <label className="mb-2" htmlFor="first_name">Schedule Date</label>
                        <DateTimePicker
                            onChange={event => setDate(event.toISOString())}
                            value={new Date(date)}
                        />
                        {/*<input className="border py-2 px-3 h-10" value={date} onChange={event => setDate((new Date(event.target.value)).toISOString())} type="datetime-local" placeholder="06/22/2019 12:00 PM"/>*/}
                    </div>
                </div>
            </div>

            <div className="flex mb-4 mt-5 allButtons">
                <button className="rmvBtn mr-4" onClick={() => removeFromSchedule(showForm.appointmentId)}>REMOVE FROM SCHEDULE</button>
                <button className="rmvBtn mr-4">VIEW PATIENT RECORD</button>
                <button className="saveBtn mr-4" onClick={() => checkIn()}>SAVE CHANGES</button>
                <button className="cancelBtn mr-4" onClick={() => setForm(null)}>CANCEL</button>
            </div>
        </div>
    )
}

export default EditCard;
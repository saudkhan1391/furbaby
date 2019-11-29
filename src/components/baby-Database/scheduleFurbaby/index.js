import React, {useState} from 'react';
import Style from './style';
import axios from 'axios';
import { NotificationManager} from 'react-notifications';
import { defaultTracker } from "../../functions";
import {apiPath} from "../../../config";
const SectionFour = (props) => {
    let {clinicId, current, petId, dispatch, appointments, setAddedPopup} = props;
    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);
    const [descriptionValidator, setDescriptionValidator] = useState("");
    const [date, setDate] = useState(new Date());
    const [dateValidation, setDateValidation] = useState(false);

    const [custom, setCustom] = useState("");
    const [trackerName, setTrackerName] = useState("Annual Exam");
    const [defaultTrackers] = useState(defaultTracker());
    const [button, setButton] = useState("ADD TO SCHEDULE");

    const setCurrentTracker = (name, val) => {
        if (val) {
            setTrackerName(name);
        } else {
            setTrackerName("Annual Exam");
        }
        setCustom("");
    };

    const setTracker = () => {
        return defaultTrackers.find(item => item.name === trackerName).trackers;
    };

    const addCustomAppointment = () => {
        let mainData = [];
        let valid = false;
        let newCustom = custom.split('\n');
        newCustom.forEach((item, index) => {
            if (item) {
                mainData.push({
                    id: index + 1,
                    title: item,
                    value: false,
                    status: 1
                })
            }
        });
        if (!date) {
            setDateValidation(true);
            valid = true;
        }
        if (!description) {
            setDescriptionValidator(true);
            valid = true;
        }
        if (valid) {
            return;
        }
        let payload = {
            appointment: {
                duration: "",
                startTime: date,
                description,
                appointmentStatus: "Confirmed",
                appointmentType: "Clinical",
                trackingComponent: mainData && mainData.length !== 0 ? JSON.stringify(mainData) : JSON.stringify(setTracker()),
                clinicId,
                petOwnerId: current.id,
                petId,
                food: "[]",
                galleryPhotos: "[]",
                medications: "[]",
                notes: "[]",
            }
        };
        setButton("Adding...")
        axios.post(apiPath + "/addAppointment", payload).then(res => {
            let final = [...appointments];
            final.push(res.data.pet);
            dispatch({
                type: "SET_APPOINTMENTS",
                payload: final
            });
            // showMessage({
            //     message: "Furbaby has been successfully scheduled",
            //     type: "success",
            //     backgroundColor: "#28a745",
            //     color: "white",
            //     icon: "info"
            // });
            NotificationManager.success('FurBaby has been successfully scheduled', 'Schedule Update.');
            setAddedPopupClose();
            setButton("ADD TO SCHEDULE")
        });
    };



    const setAddedPopupClose = () => {
        setDate(null);
        setDescription(null);
        setDescriptionValidator(false);
        setDateValidation(false);
        setAddedPopup(false)
    };

    const setField = (value) => {
        setTrackerName("");
        setCustom(value)
    }


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
                                <h1>ADD FURBABY SCHEDULE</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2 mt-8 ml-10">
                        <div>
                            <div className="flex -mx-2 mt-8 ml-10">
                                {/*<div className="w-1/2 px-2">*/}
                                {/*<div className="h-12">*/}
                                {/*<div className="flex flex-col mb-4 inputvision">*/}
                                {/*<label className="mb-2" htmlFor="first_name">Visit Reason</label>*/}
                                {/*<select className="border py-2 px-3 " type="text">*/}
                                {/*<option value="" selected="">Select</option>*/}
                                {/*<option>FIRST</option>*/}
                                {/*<option>SECOND</option>*/}
                                {/*<option>THIRD</option>*/}
                                {/*</select>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                <div className="w-1/2 px-2">
                                    <div className=" h-12">
                                        <div className="flex flex-col mb-4 inputvision">
                                            <label className="mb-2" htmlFor="first_name">Visit Reason</label>
                                            <input className="border py-2 px-3 " type="text"
                                                   onChange={event => {
                                                       setDescription(event.target.value);
                                                       setDescriptionValidator(false)
                                                   }}
                                                   style={descriptionValidator ? {borderColor: "red"} : {borderColor: ""}}
                                            />
                                            <div style={{height: "13px"}}>
                                                {descriptionValidator && <p style={{color: "red", fontSize: 12}}>
                                                    required
                                                </p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 px-2">
                                    <div className=" h-12">
                                        <div className="flex flex-col mb-4 inputvision">
                                            <label className="mb-2" htmlFor="first_name">Schedule Date</label>
                                            <input type="datetime-local"
                                                   className="border py-2 px-3 "
                                                   value={date}
                                                   onChange={(event) => {
                                                       setDate(event.target.value);
                                                       setDateValidation(false)
                                                   }}
                                                   placeholder="06/22/2019 12:00 AM"
                                                   style={dateValidation ? {borderColor: "red"} : {borderColor: ""}}
                                            />
                                            <div style={{height: "13px"}}>
                                                {dateValidation && <p style={{color: "red", fontSize: "12px"}}>
                                                    required
                                                </p>}
                                            </div>
                                        </div>
                                    </div>
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
                                        <div className="checkbox1">
                                            {defaultTrackers.map((single, index) =>
                                                <div key={index} className="flex mr-12 check-mar">
                                                    <label className="container1">
                                                        <input type="radio" name="same"
                                                               checked={trackerName === single.name}
                                                               onClick={() => setCurrentTracker(single.name, true)}/>
                                                        <span className="checkmark"/>
                                                    </label>
                                                    <label>{single.name}</label>
                                                </div>
                                            )}
                                        </div>
                                        <div className="checkbox1">
                                            <div className="flex mr-12 check-mar">
                                                <label className="container1">
                                                    <input type="checkbox"/>
                                                    <span className="checkmark"/>
                                                </label>
                                                <label>Checkbox Label</label>
                                            </div>
                                            <div className="flex mr-12 mt-4 check-mar">
                                                <label className="container1">
                                                    <input type="checkbox"/>
                                                    <span className="checkmark"/>
                                                </label>
                                                <label>Checkbox Label</label>
                                            </div>
                                            <div className="flex mr-12 mt-4 check-mar">
                                                <label className="container1">
                                                    <input type="checkbox"/>
                                                    <span className="checkmark"/>
                                                </label>
                                                <label>Checkbox Label</label>
                                            </div>

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
                                    <div className="pl-12 mt-10" onClick={() => setShow(true)}>
                                        <button className="reviewBtn">OPTIONAL: REVIEW & CUSTOMIZE TREATMENT PLAN</button>
                                    </div>
                            }
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="flex justify-center h-32">
                        <div className="flex justify-between w-80">
                            <div className="savebtnText">
                                <button onClick={(event) => {
                                    addCustomAppointment()
                                }}>{button}
                                </button>
                            </div>
                            <div className="savebtnText">
                                <button onClick={() => {
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
import React, {useState} from 'react';
import Style from './style';
import DatePicker from 'react-date-picker';
import {timeZoneUS} from '../../functions/index';
import axios from 'axios';
import {NotificationManager} from 'react-notifications';
import {defaultTracker} from "../../functions";
import {apiPath} from "../../../config";
const SectionFour = (props) => {
    let {clinicId, current, petId, dispatch, appointments, setAddedPopup, clinic} = props;
    const [description, setDescription] = useState("");
    const [show, setShow] = useState(false);
    const [descriptionValidator, setDescriptionValidator] = useState("");
    const [date, setDate] = useState(new Date());
    const [dateValidation, setDateValidation] = useState(false);
    const [trackerComponents, setTrackerComponent] = useState([]);

    const [custom, setCustom] = useState("");
    const [defaultTrackers] = useState( clinic.trackers ? JSON.parse(clinic.trackers):defaultTracker());
    const [button, setButton] = useState("ADD TO SCHEDULE");

    const setCurrentTracker = (index, value) => {
        let components = JSON.parse(JSON.stringify(trackerComponents));
        components[index].show = value;
        setTrackerComponent(components);
    };

    const addCustomAppointment = () => {
        let mainData = [...trackerComponents];
        let valid = false;
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
            if (item.show) {
                temp.push(item);
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
                trackingComponent: JSON.stringify(temp),
                clinicId,
                petOwnerId: current.id,
                petId,
                food: "[]",
                galleryPhotos: "[]",
                medications: "[]",
                notes: "[]",
            },
            type: "web"
        };
        setButton("Adding...");
        axios.post(apiPath + "/addAppointment", payload).then(res => {
            // let final = [...appointments];
            // final.push(res.data.pet);
            // dispatch({
            //     type: "SET_APPOINTMENTS",
            //     payload: final
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
        setCustom(value)
    };

    const setValue = (value) => {
        setDescription(value);
        setDescriptionValidator(false);
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
                        <div className="w-full mt-12 ml-10">
                            <div className="customMedication">
                                <h1>ADD FURBABY SCHEDULE</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2">
                        <div>
                            <div className="flex -mx-2 mt-8 ml-10">
                                <div className="w-1/2 px-2">
                                    <div className="h-12">
                                        <div className="flex flex-col mb-4 inputvision">
                                            <label className="mb-2" htmlFor="first_name">Visit Reason</label>
                                            <select className="border py-2 px-3 height-36" onChange={event => setValue(event.target.value)} style={descriptionValidator ? {borderColor: "red"} : {borderColor: ""}}>
                                                <option value="">Select</option>
                                                {
                                                    defaultTrackers.map((item, index) => {
                                                        return <option key={index} label={item.name} value={item.name}/>
                                                    })
                                                }
                                            </select>
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
                                        <div className="flex flex-col mb-4 inputvision calendar-div2">
                                            <label className="mb-2" htmlFor="first_name">Schedule Date</label>
                                            <DatePicker
                                                className="border py-2 px-3"
                                                onChange={event => {
                                                    setDate(event);
                                                    setDateValidation(false)
                                                }}
                                                style={dateValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                value={date}
                                                disableClock
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
                                        <div className="checkbox1 flex flex-wrap">
                                            {trackerComponents.map((single, index) =>{
                                                return (
                                                    <div key={index} className="flex mr-12 check-mar">
                                                        <label className="container1">
                                                            <input type="checkbox" name="same"
                                                                   checked={single.show}
                                                                   onClick={(event) => setCurrentTracker(index, event.target.checked)}/>
                                                            <span className="checkmark"/>
                                                        </label>
                                                        <label>{single.title}</label>
                                                    </div>
                                                )
                                            })}
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
                                        <button className="reviewBtn">OPTIONAL: REVIEW & CUSTOMIZE TREATMENT PLAN
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="flex ml-10 h-32">
                        <div className="flex w-80">
                            <div className="savebtnText mr-4">
                                <button
                                    onClick={(event) => {
                                        addCustomAppointment()
                                    }}
                                    disabled={button === "Adding..."}
                                >{button}
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
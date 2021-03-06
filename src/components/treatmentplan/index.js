import React, {useState} from 'react';
import Layout from '../layout/container';
import SmallLoader from '../../commoncomponents/smallLoader'
import Style from './style';
import DatePicker from 'react-date-picker';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';
import firebase from "../../utils/firebase";
import {apiPath} from '../../config';
import {defaultTracker, validateEmail, detectPhone, convertObjectToArray, standardDate} from "../functions/index";
import Loader from "../../commoncomponents/loader";
import { withRouter } from "react-router-dom";
import uuid from "uuid";

const Treatmentplan = (props) => {
    let { appointments, dispatch, clinic, history } = props;
    const [loader, setLoader] = useState(false);
    const [show, setShow] = useState(false);
    let currentDate = standardDate(new Date());

    const [email, setEmail] = useState("");
    const [emailValidation, setEmailValidation] = useState(false);
    const [uid, setUid] = useState("");
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [firstNameValidation, setFirstNameValidation] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameValidation, setValidationLastName] = useState(false);
    const [phone, setPhone] = useState("");
    const [phoneValidation, setPhoneValidation] = useState("");

    const [petName, setPetName] = useState("");
    const [petNameValidation, setPetNameValidation] = useState(false);
    const [microchip, setMicrochip] = useState("");
    const [dob, setDob] = useState(null);
    const [dobValidation, setDobValidation] = useState(false);
    const [species, setSpecies] = useState("");
    const [speciesValidation, setSpeciesValidation] = useState(false);
    const [breed, setBreed] = useState("");
    const [breedValidation, setBreedValidation] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState("");
    const [coverPhotoValidation, setCoverPhotoValidation] = useState(false);

    const [date, setDate] = useState(new Date());
    const [dateValidation, setDateValidation] = useState(false);
    const [description, setDescription] = useState("");
    const [descriptionValidation, setDescriptionValidation] = useState(false);
    const [showLoader, setMainLoader] = useState(false);

    const [custom, setCustom] = useState("");
    let defaultTrackers = clinic.trackers ? JSON.parse(clinic.trackers) : defaultTracker();
    const [trackerComponents, setTrackerComponent] = useState([]);
    const setCurrentTracker = (index, value) => {
        let components = JSON.parse(JSON.stringify(trackerComponents));
        components[index].show = value;
        setTrackerComponent(components);
    };

    const cancelHandler = () => {
        setEmail("");
        setEmailValidation(false);
        setUid("");
        setId("");
        setFirstName("");
        setFirstNameValidation(false);
        setLastName("");
        setValidationLastName(false);
        setPhone("");
        setPhoneValidation(false);
        setPetName("");
        setPetNameValidation(false);
        setMicrochip("");
        setDob(null);
        setDobValidation(false);
        setSpecies("");
        setSpeciesValidation(false);
        setBreed("");
        setBreedValidation(false);
        setCoverPhoto("");
        setCoverPhotoValidation(false);
        setDate(new Date());
        setDateValidation(false);
        setDescription("");
        setDescriptionValidation(false);
        setCustom("");
    };

    const addCustomAppointment = () => {
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
            if (item.show) {
                temp.push(item);
            }
        });
        if (!firstName) {
            setFirstNameValidation(true);
        }
        if (!lastName) {
            setValidationLastName(true);
        }
        if (!phone) {
            setPhoneValidation("required");
        }
        if (!email || !validateEmail(email)) {
            setEmailValidation(true)
        }
        if (!petName) {
            setPetNameValidation(true);
        }
        if (!dob) {
            setDobValidation(true);
        }
        if (!species) {
            setSpeciesValidation(true);
        }
        if (!breed) {
            setBreedValidation(true);
        }
        if (!description) {
            setDescriptionValidation(true);
        }
        if (!description) {
            setDescriptionValidation(true);
        }
        if (!description) {
            setDescriptionValidation(true);
        }
        if (!date) {
            setDateValidation(true);
        }
        if (!firstName || !lastName || !phone || (!email || !validateEmail(email)) || !petName || !dob || !species || !breed || !description || !date) {
            return;
        }
        if(phoneValidation === "required" || phoneValidation === "This phone number is already in use by another user. Please select another phone number"){
            return;
        }
        else {
            setMainLoader(true);
            let requestedData = {
                petOwner: {
                    firstName: firstName ? firstName : "",
                    lastName: lastName ? lastName : "",
                    phone: phone ? detectPhone(phone) : "",
                    email: email ? email : "",
                    fax: "",
                    practiceId: "",
                    uid: uid ? uid : "",
                    role: "petOwner",
                    id: id ? id : ""
                },
                pet: {
                    name: petName,
                    microchip: microchip,
                    dob: dob,
                    species: species,
                    breed: breed,
                    notes: JSON.stringify([]),
                    coverPhoto: coverPhoto ? coverPhoto : "",
                    visitHistory: JSON.stringify([]),
                    petOwnerId: "",
                    primaryVetId: ""
                },
                appointment: {
                    duration: "",
                    startTime: date,
                    description: description,
                    appointmentType: "Clinical",
                    appointmentStatus: "Confirmed",
                    trackingComponent: JSON.stringify(temp),
                    clinicId: props.clinicId,
                    petOwnerId: "",
                    petId: "",
                    food: JSON.stringify([]),
                    galleryPhotos: JSON.stringify([]),
                    medications: JSON.stringify([]),
                    notes: JSON.stringify([])
                },
                type: "web"
            };
            dispatch({
                type: "SET_LOADER",
                payload: true
            });
            axios.post(apiPath + '/addCustomAppointment', requestedData)
                .then(res => {
                    // let final = [...appointments];
                    // final.push(res.data.data.appointment);
                    setMainLoader(false);
                    // dispatch({
                    //     type: "SET_APPOINTMENTS",
                    //     payload: final
                    // });
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setDate(null);
                    setDob(null);
                    setShow(false);
                    // setBack();
                    dispatch({
                        type: "SET_LOADER",
                        payload: false
                    });
                    NotificationManager.success('Added Successfully.', "New Record");
                    history.push("/schedule");

                }).catch(err => {
                NotificationManager.error('Something went wrong, Please check your internet or try again later.', 'New Record');
                dispatch({
                    type: "SET_LOADER",
                    payload: false
                })
                setMainLoader(false);
            })
        }
    };

    const checkPetOwner = () => {
        setMainLoader(true);
        axios.get(apiPath + '/findPetOwnerByEmail?email=' + email)
            .then(res => {
                let data = {...res.data.data};
                setUid(data.uid);
                setId(data.id);
                setFirstNameValidation(false);
                setValidationLastName(false);
                setPhoneValidation(false);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setPhone(data.workPhone);
                setMainLoader(false);
            }).catch(err => {
            console.log("err", err);
            setUid("");
            setId("");
            setFirstName("");
            setLastName("");
            setPhone("");
            setMainLoader(false);
            dispatch({
                type: "SET_LOADER",
                payload: false
            })
        })
    };

    const checkPhoneNumber = () => {
        if(phone){
            setMainLoader(true);
            firebase.database().ref("/petOwner").orderByChild('workPhone').equalTo(detectPhone(phone)).once('value', (snapshot) => {
                let data = {...snapshot.val()};
                data = convertObjectToArray(data);
                if(data.length){
                    setPhoneValidation("This phone number is already in use by another user. Please select another phone number");
                }
                setMainLoader(false);
            });
        }
    };

    const addPhoto = (event) => {
        let uid = uuid();
        const file = event.target.files[0];
        const storage = firebase.storage();
        const imageRef = storage.ref('furBabyCoverPhotos').child(uid);
        let data = imageRef.put(file);
        data.on('state_changed', (snapshot) => {
            setCoverPhoto("loader");
        }, (err) => {
        }, (complete) => {
            imageRef.getDownloadURL().then(function (downloadURL) {
                setCoverPhoto(downloadURL);
            });
        });
    };

    const remove = () => {
        if (window.confirm("Are you sure you wand delete the photo")) {
            setCoverPhoto("");
        }
    };

    const setValue = (value) => {
        setDescription(value);
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
        <Layout>
            <div className=" flex mb-4 mt-10 mb">
                <div className="flex dbpage w-1/2 h-12 ml-12 headingSchedule">
                    <h1>FUR BABIES SCHEDULED FOR</h1>

                    <div className="ml-6 mt-2 date">
                        <p>{currentDate.dayName}, {currentDate.monthName} {currentDate.dateNumber}, {currentDate.fullYear}</p>
                    </div>
                </div>
            </div>
            <hr className="style1"/>
            <div className="px-2 mt-10 relative">
                {
                    showLoader &&
                    <Loader backgroundColor="#ffffffc9"/>
                }
                <div className="flex -mx-2">
                    <div className="w-1/2 px-2 vr">
                        <div className="pl-10 breeze mt-12 manually">
                            <h1>MANUALLY CREATE NEW FUR BABY</h1>
                        </div>
                        {loader ?
                            <SmallLoader/>
                            :
                            <div className="dbFor">
                                <div className="flex -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className="h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Owner Email <span
                                                    style={{color: "red"}}>*</span></label>
                                                <input id="ownerMail" className="border py-2 px-3 " type="text"
                                                       onBlur={() => checkPetOwner()}
                                                       onChange={event => {
                                                           setEmail(event.target.value);
                                                           setEmailValidation(false)
                                                       }}
                                                       value={email ? email : ""}
                                                       style={emailValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                />
                                                <div style={{height: "13px"}}>
                                                    {emailValidation && !email ?
                                                        <p style={{color: "red", fontSize: 12}}>
                                                            required
                                                        </p> : emailValidation && email ?
                                                            <p style={{color: "red", fontSize: 12}}>
                                                                Invalid Email
                                                            </p> : <p/>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <div className="h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Owner First Name<span
                                                    style={{color: "red"}}>*</span></label>
                                                <input id="ownerFirst" className="border py-2 px-3 " type="text"
                                                       defaultValue={firstName ? firstName : ""}
                                                       onChange={event => {
                                                           setFirstName(event.target.value);
                                                           setFirstNameValidation(false);
                                                       }}
                                                       disabled={uid}
                                                       style={firstNameValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                />
                                                <div style={{height: "13px"}}>
                                                    {firstNameValidation && <p style={{color: "red", fontSize: "12px"}}>
                                                        required
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2 mt-2" htmlFor="first_name">Owner Last Name<span
                                                    style={{color: "red"}}>*</span></label>
                                                <input id="ownerLast" className="border py-2 px-3 " type="text"
                                                       value={lastName ? lastName : ""}
                                                       onChange={event => {
                                                           setLastName(event.target.value);
                                                           setValidationLastName(false);
                                                       }}
                                                       placeholder=""
                                                       disabled={uid}
                                                       style={lastNameValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                    // style={uid?{}:{}}
                                                />
                                                <div style={{height: "13px"}}>
                                                    {lastNameValidation && <p style={{color: "red", fontSize: 12}}>required</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <div className="">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label htmlFor="first_name">Owner Phone Number<span
                                                    style={{color: "red"}}>*</span></label>
                                                <label><small>Please enter the 10-digit phone number in the format 0000000000</small></label>
                                                <input id="pNumber" className="border py-2 px-3 " type="number"
                                                       disabled={uid}
                                                       placeholder="0000000000"
                                                       onBlur={() => checkPhoneNumber()}
                                                       value={phone}
                                                       onChange={event => {
                                                           setPhone(event.target.value);
                                                           setPhoneValidation(false)
                                                       }}
                                                    // style={uid?styles.whenYouStartTypinTextInput:styles.whenYouStartTypinTextInputGray}
                                                       style={phoneValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                />
                                                <div style={{height: "13px"}}>
                                                    {phoneValidation && <p style={{color: "red", fontSize: 12}}>
                                                        {phoneValidation}
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex bcv -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Fur Baby Name<span
                                                    style={{color: "red"}}>*</span></label>
                                                <input id="furBabyName" className="border lftW py-2 px-3 " type="text"
                                                       onChange={event => {
                                                           setPetName(event.target.value);
                                                           setPetNameValidation(false);
                                                       }}
                                                    // style={styles.whenYouStartTypinTextInput}
                                                       style={ petNameValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                />
                                                <div style={{height: 13}}>
                                                    {petNameValidation && <p style={{color: "red", fontSize: 12}}>
                                                        required
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <div className="">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Fur Baby Image</label>
                                                {/*<input className="border py-2 px-3 " type="text"*/}
                                                {/*value={coverPhoto}*/}
                                                {/*onChange={event => setCoverPhoto(event.target.value)}*/}
                                                {/*style={coverPhotoValidation ? {borderColor: "red"} : {borderColor: ""}}*/}
                                                {/*/>*/}
                                                {coverPhoto ? coverPhoto === "loader" ?
                                                    <img className="relatedimage"
                                                         src={require("../../assets/images/loader.gif")}
                                                         alt=""/> :
                                                    <div className="flex relative">
                                                        <div className="relatedimage"
                                                             style={{
                                                                 backgroundImage: `url(${coverPhoto ? coverPhoto : ""})`,
                                                                 backgroundPosition: "center",
                                                                 backgroundRepeat: "no-repeat",
                                                                 backgroundSize: "cover"
                                                             }}
                                                             alt=""/>
                                                        <span className="corsswalaspan"
                                                              onClick={() => remove()}>x</span>
                                                    </div> : <input type="file" accept="image/png, image/jpeg"
                                                                    onChange={event => addPhoto(event)}
                                                                    style={coverPhotoValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                />}
                                                <div style={{height: "13px"}}>
                                                    {coverPhotoValidation &&
                                                    <p style={{color: "red", fontSize: "12px"}}>
                                                        required
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex ttFur -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Fur Baby Microchip</label>
                                                <input id="furBabyMc" className="border py-2 px-3 " type="text"
                                                       onChange={event => setMicrochip(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision calendar-div2">
                                                <label className="mb-2" htmlFor="first_name">Fur Baby DOB<span
                                                    style={{color: "red"}}>*</span></label>
                                                <DatePicker
                                                    className="border firstDate py-2 px-3"
                                                    onChange={event => {
                                                        setDob(event);
                                                        setDobValidation(false)
                                                    }}
                                                    style={dobValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                    value={dob}
                                                    disableClock
                                                />
                                                <div style={{height: "13px"}}>
                                                    {dobValidation && <p style={{color: "red", fontSize: "12px"}}>
                                                        required
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Species<span
                                                    style={{color: "red"}}>*</span></label>
                                                <input id="furBabySpec" className="border py-2 px-3 " type="text"
                                                       onChange={event => {
                                                           setSpecies(event.target.value);
                                                           setSpeciesValidation(false);
                                                       }}
                                                       style={speciesValidation ? {borderColor: "red"} : {borderColor: ""}}/>
                                                <div style={{height: "13px"}}>
                                                    {speciesValidation && <p style={{color: "red", fontSize: "12px"}}>
                                                        required
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Breed<span
                                                    style={{color: "red"}}>*</span></label>
                                                <input id="furBabyBreed" className="border py-2 px-3 " type="text"
                                                       onChange={event => {
                                                           setBreed(event.target.value);
                                                           setBreedValidation(false);
                                                       }}
                                                       style={breedValidation ? {borderColor: "red"} : {borderColor: ""}}/>
                                                <div style={{height: "13px"}}>
                                                    {breedValidation && <p style={{color: "red", fontSize: 12}}>
                                                        required
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-10 mt-12 manually">
                                    <h1>STEP 2: SELECT REASON FOR VISIT AND DATE</h1>
                                </div>
                                <div className="flex ttFur -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className="h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Visit Reason<span
                                                    style={{color: "red"}}>*</span></label>
                                                <select id="reasonFb" className="border py-2 px-3 height-36" onChange={event => {
                                                    setValue(event.target.value);
                                                    setDescriptionValidation(false);
                                                }} style={descriptionValidation ? {borderColor: "red"} : {borderColor: ""}}>
                                                    <option value="">Select</option>
                                                    {
                                                        defaultTrackers.map((item, index) => {
                                                            return <option key={index} label={item.name}
                                                                           value={item.name}/>
                                                        })
                                                    }
                                                </select>
                                                <div style={{height: "13px"}}>
                                                    {descriptionValidation && <p style={{color: "red", fontSize: 12}}>
                                                        required
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="w-1/2 px-2">*/}
                                    {/*<div className=" h-12">*/}
                                    {/*<div className="flex flex-col mb-4 inputvision">*/}
                                    {/*<label className="mb-2" htmlFor="first_name">Visit Reason</label>*/}
                                    {/*<input className="border py-2 px-3 " type="text"*/}
                                    {/*onChange={event => {*/}
                                    {/*setDescription(event.target.value);*/}
                                    {/*setDescriptionValidation(false)*/}
                                    {/*}}*/}
                                    {/*style={descriptionValidation ? {borderColor: "red"} : {borderColor: ""}}*/}
                                    {/*/>*/}
                                    {/*<div style={{height: "13px"}}>*/}
                                    {/*{descriptionValidation && <p style={{color: "red", fontSize: 12}}>*/}
                                    {/*required*/}
                                    {/*</p>}*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    {/*</div>*/}
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision calendar-div2">
                                                <label className="mb-2" htmlFor="first_name">Schedule Date<span
                                                    style={{color: "red"}}>*</span></label>
                                                <DatePicker
                                                    className="border secDate py-2 px-3"
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
                            </div>
                        }
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
                                                               checked={single.show}
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
                                <div className="pl-12 mt-10" onClick={() => setShow(true)}>
                                    <button className="reviewBtn">OPTIONAL: REVIEW & CUSTOMIZE TREATMENT PLAN</button>
                                </div>
                        }

                        <div className="flex dbAllB mb-4 mt-5 ml-12 h-24 allButtons create-n-button">
                            <div className="w-1/4 h-12">
                                <div>
                                    <button className="addBtn" onClick={() => addCustomAppointment()}>ADD TO SCHEDULE
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/4 h-12">
                                <div>
                                    <button className="cnclBtn" onClick={() => {
                                        cancelHandler()
                                    }}>CANCEL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Style/>
        </Layout>
    );
}
export default withRouter(Treatmentplan);
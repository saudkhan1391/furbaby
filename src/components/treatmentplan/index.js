import React, {useState} from 'react';
import Layout from '../layout/container';
import SmallLoader from '../../commoncomponents/smallLoader'
import Style from './style';
import DatePicker from 'react-date-picker';
import {timeZoneUS} from '../functions/index';
import {NotificationManager} from 'react-notifications';
import axios from 'axios';
import firebase from "../../utils/firebase";
import {apiPath} from '../../config';
import {defaultTracker, validateEmail} from "../functions/index";
const Treatmentplan = (props) => {
    let {appointments, dispatch} = props; // clinicId
    const [loader, setLoader] = useState(false);
    const [show, setShow] = useState(false);
    // const [showForm, setForm] = useState(false);


    const [email, setEmail] = useState("");
    const [emailValidation, setEmailValidation] = useState(false);
    const [uid, setUid] = useState("");
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [firstNameValidation, setFirstNameValidation] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameValidation, setValidationLastName] = useState(false);
    const [phone, setPhone] = useState("");
    const [phoneValidation, setPhoneValidation] = useState(false);

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


    const [custom, setCustom] = useState("");

    const [defaultTrackers] = useState(defaultTracker());
    const [trackerComponents, setTrackerComponent] = useState([]);
    const [trackerName, setTrackerName] = useState("Annual Exam");

    const setCurrentTracker = (name, val) => {
        let components = JSON.parse(JSON.stringify(trackerComponents));
        components.forEach((item => {
            if (item.id === name) {
                item.show = val
            }
        }));
        if (val) {
            setTrackerName(name);
        } else {
            setTrackerName("Annual Exam");
        }
        setTrackerComponent(components);
        setCustom("");
    };

    const setTracker = () => {
        return defaultTrackers.find(item => item.name === trackerName).trackers;
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
        setTrackerName("Annual Exam");
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
                    status: 1
                })
            }
        });
        mainData.forEach(item => {
            if (item.show === undefined || item.show) {
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
            setPhoneValidation(true);
        }
        if (!email || !validateEmail(email)) {
            setEmailValidation(true)
        }
        if (!petName) {
            setPetNameValidation(true);
        }
        if (!coverPhoto) {
            setCoverPhotoValidation(true);
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
        if (!firstName || !lastName || !phone || (!email || !validateEmail(email)) || !petName || !coverPhoto || !dob || !species || !breed || !description || !date) {
            return
        }
        else {
            let requestedData = {
                petOwner: {
                    firstName: firstName ? firstName : "",
                    lastName: lastName ? lastName : "",
                    phone: phone ? phone : "",
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
                }
            };
            dispatch({
                type: "SET_LOADER",
                payload: true
            });
            axios.post(apiPath + '/addCustomAppointment', requestedData)
                .then(res => {
                    let final = [...appointments];
                    final.push(res.data.data.appointment);
                    dispatch({
                        type: "SET_APPOINTMENTS",
                        payload: final
                    });
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setDate(null);
                    setDob(null);
                    setShow(false);
                    setTrackerName("Annual Exam");
                    // setBack();
                    dispatch({
                        type: "SET_LOADER",
                        payload: false
                    })
                    // showMessage({
                    //     message: "Added Successfully",
                    //     type: "success",
                    //     backgroundColor: "#28a745",
                    //     color: "white",
                    //     icon: "info"
                    // });
                    NotificationManager.success('Added Successfully.', 'Appointment Update.');

                }).catch(err => {
                // showMessage({
                //     message: "Something went wrong, Please check your internet or try again later.",
                //     type: "success",
                //     backgroundColor: "#a71f00",
                //     color: "white",
                //     icon: "info"
                // });
                NotificationManager.error('Something went wrong, Please check your internet or try again later.', 'Appointment Update.');
                console.log("err", err.response);
                dispatch({
                    type: "SET_LOADER",
                    payload: false
                })
            })
        }
    };

    const checkPetOwner = () => {
        setLoader(true);
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
                setLoader(false);
            }).catch(err => {
            console.log("err", err);
            setUid("");
            setId("");
            setFirstName("");
            setLastName("");
            setPhone("");
            setLoader(false);
            dispatch({
                type: "SET_LOADER",
                payload: false
            })
        })
    };

    const addPhoto = (event) => {
        const file = event.target.files[0];
        const storage = firebase.storage();
        const imageRef = storage.ref('furBabyCoverPhotos');
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
                setTrackerComponent(tracker.trackers);
            }, 1);
        } else {
            setTrackerComponent([]);
        }
    };

    const setField = (value) => {
        setTrackerName("");
        setCustom(value)
    }


    return (
        <Layout>
            <div className=" flex mb-4 mt-10 mb">
                <div className="flex dbpage w-1/2 h-12 ml-12 headingSchedule">
                    <h1>FUR BABIES SCHEDULED FOR</h1>

                    <div className="ml-6 mt-2 date">
                        <p>TODAY, January 15, 2019</p>
                    </div>
                </div>
            </div>
            <hr className="style1"/>
            <div className="px-2 mt-10">
                <div className="flex -mx-2">
                    <div className="w-1/2 px-2 vr">
                        {/*<div className="pl-10 pb-4 select-Furbaby-Schedule">*/}
                        {/*<h1>STEP 1: SELECT FUR BABY TO SCHEDULE</h1>*/}
                        {/*</div>*/}
                        {/*<div className="flex h-12 ml-10 form">*/}
                        {/*<input type="text" name="fname" placeholder="  Search for a schedule pet"/>*/}
                        {/*<div className=" img">*/}
                        {/*<img src={require('../../assets/images/search.png')} alt="pic"/>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="pl-10 mt-4">*/}
                        {/*<button className="refreshBtn">CLICK TO REFRESH DATA FROM CONNECTED PRACTICE MANAGEMENT*/}
                        {/*SOFTWARE*/}
                        {/*</button>*/}
                        {/*</div>*/}
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
                                                <input className="border py-2 px-3 " type="text"
                                                       onBlur={() => checkPetOwner()}
                                                       autoCorrect={false}
                                                       onChange={event => {
                                                           setEmail(event.target.value);
                                                           setEmailValidation(false)
                                                       }}
                                                       value={email ? email : ""}
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
                                                <label className="mb-2" htmlFor="first_name">Owner First Name</label>
                                                <input className="border py-2 px-3 " type="text"
                                                       defaultValue={firstName ? firstName : ""}
                                                       onChange={event => {
                                                           setFirstName(event.target.value);
                                                           setFirstNameValidation(false);
                                                       }}

                                                    // style={firstNameValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                    //    style={uid ? {backgroundColor: "lightgray"} : {backgroundColor: ""}}
                                                    // disabled={uid}
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
                                                <label className="mb-2" htmlFor="first_name">Owner Last Name</label>
                                                <input className="border py-2 px-3 " type="text"
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
                                                    {lastNameValidation && <p style={{color: "red", fontSize: 12}}>
                                                        required
                                                    </p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Owner Phone Number</label>
                                                <input className="border py-2 px-3 " type="text"
                                                       disabled={uid}
                                                       autoCorrect={false}
                                                       placeholder=""
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
                                                        required
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
                                                <label className="mb-2" htmlFor="first_name">Fur Baby Name</label>
                                                <input className="border lftW py-2 px-3 " type="text"
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
                                    <div className=" px-2">
                                        <div className="">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Furbaby Image</label>
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
                                <div className="flex -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Fur Baby Microchip</label>
                                                <input className="border py-2 px-3 " type="text"
                                                       onChange={event => setMicrochip(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision calendar-div2">
                                                <label className="mb-2" htmlFor="first_name">Fur Baby DOB</label>
                                                <DatePicker
                                                    className="border py-2 px-3"
                                                    onChange={event => {
                                                        setDob(timeZoneUS(event));
                                                        setDobValidation(false)
                                                    }}
                                                    style={dobValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                    value={timeZoneUS(dob)}
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
                                                <label className="mb-2" htmlFor="first_name">Species</label>
                                                <input className="border py-2 px-3 " type="text"
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
                                                <label className="mb-2" htmlFor="first_name">Breed</label>
                                                <input className="border py-2 px-3 " type="text"
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
                                <div className="flex -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className="h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Visit Reason</label>
                                                <select className="border py-2 px-3 " onChange={event => {
                                                    setValue(event.target.value);
                                                    setDescriptionValidation(false);
                                                }}
                                                        style={descriptionValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                        type="text">
                                                    <option value="" selected="">Select</option>
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
                                                <label className="mb-2" htmlFor="first_name">Schedule Date</label>
                                                <DatePicker
                                                    className="border py-2 px-3"
                                                    onChange={event => {
                                                        setDate(timeZoneUS(event));
                                                        setDateValidation(false)
                                                    }}
                                                    style={dateValidation ? {borderColor: "red"} : {borderColor: ""}}
                                                    value={timeZoneUS(date)}
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

                        <div className="flex dbAllB mb-4 mt-5 ml-12 h-24 allButtons">
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
export default Treatmentplan;
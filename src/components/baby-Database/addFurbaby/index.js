import React, {useState} from 'react';
import Style from './style';
import DatePicker from 'react-date-picker';
import {timeZoneUS} from '../../functions/index';
import axios from 'axios';
import firebase from "../../../utils/firebase";
import {apiPath} from "../../../config";
import { NotificationManager} from 'react-notifications';
const SectionFour = (props) => {
    let {current, addBackFurbaby, setAddedPopup} = props;
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
    const [button, setButton] = useState("Add FurBaby");

    const addFurbaby = () => {
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
        if (!petName || !coverPhoto || !dob || !species || !breed) {
            return
        }
        else {
            let payload = {
                pet: {
                    name: petName,
                    microchip,
                    notes: "",
                    petOwnerId: current.id,
                    breed,
                    coverPhoto,
                    dob,
                    species,
                    primaryVetId: "",
                    visitHistory: "[]"
                }
            };
            setButton("Adding");
            axios.post(apiPath + "/addNewFurbaby", payload).then(res => {
                addBackFurbaby(res.data.pet);
                setButton("Add new");
                setAddedPopupClose()
                // showMessage({
                //     message: "New furbaby has been successfully added.",
                //     type: "success",
                //     backgroundColor: "#28a745",
                //     color: "white",
                //     icon: "info"
                // });
                NotificationManager.success('New Fur Baby has been successfully added.', 'Fur Baby Update.');
            });
        }
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

    const setAddedPopupClose = () => {
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
                                <h1>MANUALLY CREATE NEW FUR BABY</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-2 mt-8 ml-10">
                        <div className="w-1/2 px-2">
                            <div className=" h-12">
                                <div className="flex flex-col mb-4 inputvision">
                                    <label className="mb-2" htmlFor="first_name">Fur Baby Name</label>
                                    <input className="border py-2 px-3 " type="text"
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
                                             src={require("../../../assets/images/loader.gif")}
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
                    <br/>
                    <br/>
                    <div className="flex justify-center h-32">
                        <div className="flex justify-between w-80">
                            <div className="savebtnText">
                                <button onClick={(event) => {
                                    addFurbaby()
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
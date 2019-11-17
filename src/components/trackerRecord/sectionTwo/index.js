import React, { useState } from 'react';
import Style from './style';
import Layout from '../../layout/container';

const SectionTwo=(props) => {
    let { foodData, medicationData, notes, pee, show, dispatch, furBaby, galleryPhotos } = props;

    const [foodPopup, setFoodPopup]=useState(false);
    const [medicationPopup, setMedicationPopup]=useState(false);
    const [peePopup, setPeePopup]=useState(false);
    const [notesPopup, setNotesPopup]=useState(false);
    const [snapPopup, setSnapPopup]=useState(false);


    const formatAMPM = (date) =>  {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };

    const removePee = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            let data = [...pee];
            data = data.filter(item => item.id !== id);
            furBaby.pee = JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
        }
    };

    const removeNotes = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            let data = [...notes];
            data = data.filter(item => item.id !== id);
            furBaby.notes = JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
        }
    };


    const removeFood = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            let data = [...foodData];
            data = data.filter(item => item.id !== id);
            furBaby.food = JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
        }
    };

    const removeMedication = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            let data = [...medicationData];
            data = data.filter(item => item.id !== id);
            furBaby.medications =  JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
        }
    };

    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-12 mb-6 heading">
                    <h3>ACTIVITY REPORT</h3>
                </div>

                <div>
                    <div className="activity mb-6">
                        <div className=" flex act-top justify-between px-5 py-5">
                            <div className="act-1"><h3>Medication</h3></div>
                            <div className="act-2"><button onClick={()=>setMedicationPopup(true)}>ADD ACTIVITY</button></div>
                        </div>

                        <div className="act-data justify-between px-5 py-5">
                            <h3>Posted Activities</h3>
                            {
                                medicationData.map(single => {
                                    let date = new Date(single.date);
                                    return <div key={single.id}>
                                    <img className="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic" onClick={() => removeMedication(single.id)}/>
                                    <p className="mt-2 inline">{single.type} {formatAMPM(date)}</p><br/>
                                   </div>
                                })
                            }
                        </div>
                    </div>
                    {medicationPopup&&<div id="simpleModal" className="modal">
                        <div className="modal-content">
                            <div className="flex justify-end">
                                <img onClick={()=>setMedicationPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div className="food-popup-heading">
                                <h1>Medication</h1>
                            </div>
                            <div className="food-popup-para mt-4">
                                <p>Select the medication administered from the dropdown below. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div className="flex flex-col mb-2 inputvision mt-8">
                                <label className="mb-1" for="first_name">Medication</label>
                                <select className="border py-2 px-3 " type="text">
                                    <option value="" selected="">Select</option>
                                    <option>FIRST</option>
                                    <option>SECOND</option>
                                    <option>THIRD</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-2 inputvision mt-6">
                                <label className="mb-1" for="first_name">Dose Administered</label>
                                <select className="border py-2 px-3 " type="text">
                                    <option value="" selected="">Select</option>
                                    <option>FIRST</option>
                                    <option>SECOND</option>
                                    <option>THIRD</option>
                                </select>
                            </div>
                            <div className="flex justify-center mt-24">
                                <button className="activityBtn-popup">ADD ACTIVITY</button>
                                <button className="CnclBtn-popup ml-4" onClick={()=>setMedicationPopup(false)}>CANCEL</button>
                            </div>
                        </div>

                    </div>}
                </div>

                <div>
                    <div className="activity mb-6">
                        <div className=" flex act-top justify-between px-5 py-5">
                            <div className="act-1"><h3>Food</h3></div>
                            <div className="act-2"><button onClick={()=>setFoodPopup(true)}>ADD ACTIVITY</button></div>
                        </div>

                        <div className="act-data justify-between px-5 py-5">
                            <h3>Posted Activities</h3>
                            {
                                foodData.map(single => {
                                    return <div key={single.id}>
                                        <img className="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic" onClick={() => removeFood(single.id)}/>
                                        <p className="mt-2 inline">{single.type} {single.quantity ? (", "+single.quantity) : ""}</p><br/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {foodPopup&&<div id="simpleModal" className="modal">
                        <div className="modal-content">
                            <div className="flex justify-end">
                                <img onClick={()=>setFoodPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div className="food-popup-heading">
                                <h1>Food</h1>
                            </div>
                            <div className="food-popup-para mt-4">
                                <p>Select the food given from the dropdown below. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div className="flex flex-col mb-2 inputvision mt-8">
                                <label className="mb-1" for="first_name">Food</label>
                                <select className="border py-2 px-3 " type="text">
                                    <option value="" selected="">Select</option>
                                    <option>FIRST</option>
                                    <option>SECOND</option>
                                    <option>THIRD</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-2 inputvision mt-6">
                                <label className="mb-1" for="first_name">Select The Amount Given (Optional)</label>
                                <select className="border py-2 px-3 " type="text">
                                    <option value="" selected="">Select</option>
                                    <option>FIRST</option>
                                    <option>SECOND</option>
                                    <option>THIRD</option>
                                </select>
                            </div>
                            <div className="flex justify-center mt-24">
                                <button className="activityBtn-popup">ADD ACTIVITY</button>
                                <button className="CnclBtn-popup ml-4" onClick={()=>setFoodPopup(false)}>CANCEL</button>
                            </div>
                        </div>

                    </div>}
                </div>

                <div>
                    <div className="activity mb-6">
                        <div className=" flex act-top justify-between px-5 py-5">
                            <div className="act-1"><h3>Pee &amp; Poop</h3></div>
                            <div className="act-2"><button onClick={()=>setPeePopup(true)}>ADD ACTIVITY</button></div>
                        </div>

                        <div className="act-data justify-between px-5 py-5">
                            <h3>Posted Activities</h3>
                            {
                                pee.map(single => {
                                    let date = new Date(single.date);
                                    return <div key={single.id}>
                                        <img className="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic" onClick={() => removePee(single.id)}/>
                                        <p className="mt-2 inline">{single.type} {formatAMPM(date)}</p><br/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {peePopup&&<div id="simpleModal" className="modal">
                        <div className="pee-content">
                            <div className="flex justify-end">
                                <img onClick={()=>setPeePopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div className="food-popup-heading">
                                <h1>Pee &amp; Poop</h1>
                            </div>
                            <div className="food-popup-para mt-4">
                                <p>Select the pee or poop icon below. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div className="flex flex-col mb-2 inputvision mt-8">
                                <label className="mb-1" for="first_name">Food</label>
                                <select className="border py-2 px-3 " type="text">
                                    <option value="" selected="">Select</option>
                                    <option>FIRST</option>
                                    <option>SECOND</option>
                                    <option>THIRD</option>
                                </select>
                            </div>
                            <div className="flex justify-center mt-24">
                                <button className="activityBtn-popup">ADD ACTIVITY</button>
                                <button className="CnclBtn-popup ml-4" onClick={()=>setPeePopup(false)}>CANCEL</button>
                            </div>
                        </div>

                    </div>}
                </div>

                <div>
                    <div className="activity mb-6">
                        <div className=" flex act-top justify-between px-5 py-5">
                            <div className="act-1"><h3>Notes</h3></div>
                            <div className="act-2"><button onClick={()=>setNotesPopup(true)}>ADD ACTIVITY</button></div>
                        </div>

                        <div className="act-data justify-between px-5 py-5">
                            <h3>Posted Activities</h3>
                            {
                                notes.map(single => {
                                    return <div key={single.id}>
                                        <img className="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic" onClick={() => removeNotes(single.id)}/>
                                        <p className="mt-2 inline">{single.note}</p><br/>
                                        {
                                            single.photos && single.photos.length !== 0 &&
                                            <div className="imageCont">
                                                {
                                                    single.photos.map(item => {
                                                        return (
                                                            <img className="mr-4" key={item.id} src={item.uri}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {notesPopup&&<div id="simpleModal" className="modal">
                        <div className="notes-content">
                            <div className="flex justify-end">
                                <img onClick={()=>setNotesPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div className="food-popup-heading">
                                <h1>Notes</h1>
                            </div>
                            <div className="food-popup-para mt-4">
                                <p>Select the food given from the dropdown below. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div className="flex flex-col mb-2 inputvision mt-8">
                                <label className="mb-1" for="first_name">Notes</label>
                                <select className="border py-2 px-3 " type="text">
                                    <option value="" selected="">Select</option>
                                    <option>FIRST</option>
                                    <option>SECOND</option>
                                    <option>THIRD</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-2 fotText-area mt-6">
                                <textarea rows="5" cols="80" placeholder="Text area" spellcheck="false"></textarea>
                            </div>
                            <div className="flex justify-center mt-24">
                                <button className="activityBtn-popup">ADD ACTIVITY</button>
                                <button className="CnclBtn-popup ml-4" onClick={()=>setNotesPopup(false)}>CANCEL</button>
                            </div>
                        </div>

                    </div>}
                </div>
                <div>
                    <div className="pb-12 mb-12">
                        <div className="activity mb-12">
                            <div className=" flex act-top justify-between px-5 py-5">
                                <div className="act-1"><h3>Snapshots</h3></div>
                                <div className="act-2"><button onClick={()=>setSnapPopup(true)}>ADD ACTIVITY</button></div>
                            </div>

                            <div className="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <div className="flex mt-5 mb-4">
                                    <img className="mr-5" src={require('../../../assets/images/img3-placeholder.png')} alt="pic"/>
                                    <img className="mr-5" src={require('../../../assets/images/img3-placeholder.png')} alt="pic"/>
                                    <img src={require('../../../assets/images/img3-placeholder.png')} alt="pic"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {snapPopup&&<div id="simpleModal" className="modal">
                        <div className="snapshots-content">
                            <div className="flex justify-end">
                                <img onClick={()=>setSnapPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div className="food-popup-heading">
                                <h1>Snapshots</h1>
                            </div>
                            <div className="food-popup-para mt-4">
                                <p>Select the photo you wish to share. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div className="flex justify-around mt-12">
                                <div>
                                    <img src={require('../../../assets/images/image.png')} alt="pic"/>
                                    <h1 className="library-heading mt-2">Access From Library</h1>
                                </div>
                                <div>
                                    <img src={require('../../../assets/images/photo-camera.png')} alt="pic"/>
                                    <h1 className="photo-heading mt-2">Take Photo</h1>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <div>
                                    <img className="pl-1" src={require('../../../assets/images/img3-placeholder.png')} alt="pic"/><br></br>
                                    <img className="ml-12" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                </div>
                                <div>
                                    <img className="pl-6" src={require('../../../assets/images/img3-placeholder.png')} alt="pic"/><br></br>
                                    <img className="ml-16" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                </div>
                                <div>
                                    <img className="pl-6" src={require('../../../assets/images/img-placehold.png')} alt="pic"/>
                                </div>
                            </div>
                            <div className="flex justify-center mt-20">
                                <button className="activityBtn-popup">ADD ACTIVITY</button>
                                <button className="CnclBtn-popup ml-4" onClick={()=>setSnapPopup(false)}>CANCEL</button>
                            </div>
                        </div>

                    </div>}
                </div>

            </div>
            <Style />
        </div>
    );
}

export default SectionTwo;
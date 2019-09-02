import React, { useState } from 'react';
import Style from './style';
import Layout from '../../layout';

const SectionTwo = () => {
    const [foodPopup, setFoodPopup] = useState(false);
    const [medicationPopup, setMedicationPopup] = useState(false);
    const [peePopup, setPeePopup] = useState(false);
    const [notesPopup, setNotesPopup] = useState(false);
    const [snapPopup, setSnapPopup] = useState(false);
    return (
        <div>
                <div class="container mx-auto">
                    <div class="mt-12 mb-6 heading">
                        <h3>ACTIVITY REPORT</h3>
                    </div>

                    <div>
                        <div class="activity mb-6">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Medication</h3></div>
                                <div class="act-2"><button onClick={()=>setMedicationPopup(true)}>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <img class="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                <p class="mt-2 inline">Tramadol 7:25 AM</p><br/>
                                <img class="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                <p class="mt-2 inline">Amoxicillin 3:41 PM</p>
                            </div>
                        </div>
                        {medicationPopup&&<div id="simpleModal" class="modal">
                        <div class="modal-content">
                            <div class="flex justify-end">
                            <img onClick={()=>setMedicationPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div class="food-popup-heading">
                                <h1>Medication</h1>
                            </div>
                            <div class="food-popup-para mt-4">
                                <p>Select the medication administered from the dropdown below. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div class="flex flex-col mb-2 inputvision mt-8">
                            <label class="mb-1" for="first_name">Medication</label>
                            <select class="border py-2 px-3 " type="text">
                            <option value="" selected="">Select</option>
                            <option>FIRST</option>
                            <option>SECOND</option>
                            <option>THIRD</option>
                            </select>
                            </div>
                            <div class="flex flex-col mb-2 inputvision mt-6">
                            <label class="mb-1" for="first_name">Dose Administered</label>
                            <select class="border py-2 px-3 " type="text">
                            <option value="" selected="">Select</option>
                            <option>FIRST</option>
                            <option>SECOND</option>
                            <option>THIRD</option>
                            </select>
                            </div>
                            <div class="flex justify-center mt-24">
                                <button class="activityBtn-popup">ADD ACTIVITY</button>
                                <button class="CnclBtn-popup ml-4" onClick={()=>setMedicationPopup(false)}>CANCEL</button>
                            </div>
                            </div>
                        
                        </div>}
                    </div>

                    <div>
                        <div class="activity mb-6">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Food</h3></div>
                                <div class="act-2"><button onClick={()=>setFoodPopup(true)}>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <img class="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                <p class="mt-2 inline">Royal Canin Breed Health, 1/2 Cup</p>
                            </div>
                        </div>
                        {foodPopup&&<div id="simpleModal" class="modal">
                        <div class="modal-content">
                            <div class="flex justify-end">
                            <img onClick={()=>setFoodPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div class="food-popup-heading">
                                <h1>Food</h1>
                            </div>
                            <div class="food-popup-para mt-4">
                                <p>Select the food given from the dropdown below. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div class="flex flex-col mb-2 inputvision mt-8">
                            <label class="mb-1" for="first_name">Food</label>
                            <select class="border py-2 px-3 " type="text">
                            <option value="" selected="">Select</option>
                            <option>FIRST</option>
                            <option>SECOND</option>
                            <option>THIRD</option>
                            </select>
                            </div>
                            <div class="flex flex-col mb-2 inputvision mt-6">
                            <label class="mb-1" for="first_name">Select The Amount Given (Optional)</label>
                            <select class="border py-2 px-3 " type="text">
                            <option value="" selected="">Select</option>
                            <option>FIRST</option>
                            <option>SECOND</option>
                            <option>THIRD</option>
                            </select>
                            </div>
                            <div class="flex justify-center mt-24">
                                <button class="activityBtn-popup">ADD ACTIVITY</button>
                                <button class="CnclBtn-popup ml-4" onClick={()=>setFoodPopup(false)}>CANCEL</button>
                            </div>
                            </div>
                        
                        </div>}
                    </div>

                    <div>
                        <div class="activity mb-6">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Pee &amp; Poop</h3></div>
                                <div class="act-2"><button onClick={()=>setPeePopup(true)}>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <img class="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                <p class="mt-2 inline">Pee 8:11 AM</p><br/>
                                <img class="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                <p class="mt-2 inline">Pee &amp; Poop 12:37 PM</p>
                            </div>
                        </div>
                        {peePopup&&<div id="simpleModal" class="modal">
                        <div class="pee-content">
                            <div class="flex justify-end">
                            <img onClick={()=>setPeePopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div class="food-popup-heading">
                                <h1>Pee &amp; Poop</h1>
                            </div>
                            <div class="food-popup-para mt-4">
                                <p>Select the pee or poop icon below. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div class="flex flex-col mb-2 inputvision mt-8">
                            <label class="mb-1" for="first_name">Food</label>
                            <select class="border py-2 px-3 " type="text">
                            <option value="" selected="">Select</option>
                            <option>FIRST</option>
                            <option>SECOND</option>
                            <option>THIRD</option>
                            </select>
                            </div>
                            <div class="flex justify-center mt-24">
                                <button class="activityBtn-popup">ADD ACTIVITY</button>
                                <button class="CnclBtn-popup ml-4" onClick={()=>setPeePopup(false)}>CANCEL</button>
                            </div>
                            </div>
                        
                        </div>}
                    </div>

                    <div>
                        <div class="activity mb-6">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Notes</h3></div>
                                <div class="act-2"><button onClick={()=>setNotesPopup(true)}>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <img class="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                <p class="mt-2 inline">Tobby is doing great and is getting settled in. We will update her tracker when she goes into diagnostics.</p>
                            </div>
                        </div>
                        {notesPopup&&<div id="simpleModal" class="modal">
                        <div class="notes-content">
                            <div class="flex justify-end">
                            <img onClick={()=>setNotesPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div class="food-popup-heading">
                                <h1>Notes</h1>
                            </div>
                            <div class="food-popup-para mt-4">
                                <p>Select the food given from the dropdown below. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div class="flex flex-col mb-2 inputvision mt-8">
                            <label class="mb-1" for="first_name">Notes</label>
                            <select class="border py-2 px-3 " type="text">
                            <option value="" selected="">Select</option>
                            <option>FIRST</option>
                            <option>SECOND</option>
                            <option>THIRD</option>
                            </select>
                            </div>
                            <div class="flex flex-col mb-2 fotText-area mt-6">
                            <textarea rows="5" cols="80" placeholder="Text area" spellcheck="false"></textarea>
                            </div>
                            <div class="flex justify-center mt-24">
                                <button class="activityBtn-popup">ADD ACTIVITY</button>
                                <button class="CnclBtn-popup ml-4" onClick={()=>setNotesPopup(false)}>CANCEL</button>
                            </div>
                            </div>
                        
                        </div>}
                    </div>
                    <div>
                    <div class="pb-12 mb-12">
                        <div class="activity mb-12">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Snapshots</h3></div>
                                <div class="act-2"><button onClick={()=>setSnapPopup(true)}>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <div class="flex mt-5 mb-4">
                                <img class="mr-5" src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
                                <img class="mr-5" src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
                                <img src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {snapPopup&&<div id="simpleModal" class="modal">
                        <div class="snapshots-content">
                            <div class="flex justify-end">
                            <img onClick={()=>setSnapPopup(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                            </div>
                            <div class="food-popup-heading">
                                <h1>Snapshots</h1>
                            </div>
                            <div class="food-popup-para mt-4">
                                <p>Select the photo you wish to share. Click add activity to send the update to the pet owner.</p>
                            </div>
                            <div class="flex justify-around mt-12">
                                <div>
                                <img src={require('../../../assets/images/image.png')} alt="pic"/>
                                <h1 class="library-heading mt-2">Access From Library</h1>
                                </div>
                                <div>
                                <img src={require('../../../assets/images/photo-camera.png')} alt="pic"/>
                                <h1 class="photo-heading mt-2">Take Photo</h1>
                                </div>
                            </div>
                            <div class="flex justify-center mt-8">
                                <div>
                                <img class="pl-1" src={require('../../../assets/images/img3-placeholder.png')} alt="pic"/><br></br>
                                <img class="ml-12" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                </div>
                                <div>
                                <img class="pl-6" src={require('../../../assets/images/img3-placeholder.png')} alt="pic"/><br></br>
                                <img class="ml-16" src={require('../../../assets/images/bin.png')} alt="pic"/>
                                </div>
                                <div>
                                <img class="pl-6" src={require('../../../assets/images/img-placehold.png')} alt="pic"/>
                                </div>
                            </div>
                            <div class="flex justify-center mt-20">
                                <button class="activityBtn-popup">ADD ACTIVITY</button>
                                <button class="CnclBtn-popup ml-4" onClick={()=>setSnapPopup(false)}>CANCEL</button>
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
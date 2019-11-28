import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import { apiPath } from "../../../config";

function UpdateNotes(props) {
    let { notes, setModel, dispatch, furBaby, name, clinic, petOwner, pet, lastName, description, DefaultNotes } = props;
    const [type, setType] = useState(null);
    const [content, setContent] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [progress, setProgress] = useState(0);
    let activeNote = clinic.notes ? JSON.parse(clinic.notes): DefaultNotes;

    const update = (event) => {
        event.preventDefault();
        let data = [...notes];
        if(content){
            data.push({
                id: uuid(),
                type,
                note: convertContentValues(content),
                photos
            });
            setType(null);
            setContent(null);
            setPhotos([]);
            furBaby.notes = JSON.stringify(data);
            let payload = {
                appointment: {...furBaby, pet, petOwner},
                type: "Notes",
                note: convertContentValues(content)
            };
            axios.post(apiPath+"/notesOrGalleryUpdated", payload).then(res => {
            }).catch(err => {
                console.log("err.", err.response);
            });
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
            setModel(null);
        }
    };

    const setContentValue = (id) => {
        let value = activeNote.find((item) => item.id === id);
        if(value){
            setContent(value.content);
            setPhotos(value.photos ? value.photos : []);
            setType(id)
        }

    };

    const convertContentValues = (content) => {
        content = content.replace(new RegExp("\\[petname]","g"), name);
        content = content.replace(new RegExp("\\[ownername]","g"), lastName);
        return content.replace(new RegExp("\\[visitreason]","g"), description);
    };

    return (
        <div id="simpleModal" className="modal">
            <form onSubmit={(event) => update(event)} className="notes-content">
                <div className="flex justify-end">
                    <img onClick={()=>setModel(null)} src={require('../../../assets/images/close.png')} alt="pic"/>
                </div>
                <div className="food-popup-heading">
                    <h1>Notes</h1>
                </div>
                <div className="food-popup-para mt-4">
                    <p>Select the food given from the dropdown below. Click add activity to send the update to the pet owner.</p>
                </div>
                <div className="flex flex-col mb-2 inputvision mt-8">
                    <label className="mb-1" htmlFor="first_name">Notes</label>
                    <select className="border py-2 px-3 " onChange={event => setContentValue(event.target.value)}>
                        <option value="" selected="">Select</option>
                        {
                            activeNote.map((item, index) => {
                                return <option key={index} value={item.id}>{item.title}</option>
                            })
                        }
                    </select>
                </div>
                <div className="flex flex-col mb-2 fotText-area mt-6">
                    <textarea rows="5" cols="80" placeholder="Text area" value={content ? content : ""} onChange={event => setContent(event.target.value)}/>
                </div>
                <button type="button" className="activityBtn-popup-small">ADD IMAGE</button>
                {
                    photos.length !== 0 &&
                    <div>
                        <div className="food-popup-heading">
                            <h1>Related Photos</h1>
                        </div>
                        <div className="food-popup-heading">
                            {
                                photos.map(item => {
                                    return(
                                        <img src={item.uri} alt="Image"/>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                <div className="flex justify-center mt-24">
                    <button type="submit" className="activityBtn-popup">ADD ACTIVITY</button>
                    <button type="button" className="CnclBtn-popup ml-4" onClick={()=>setModel(null)}>CANCEL</button>
                </div>
            </form>

        </div>
    )
}

export default UpdateNotes;
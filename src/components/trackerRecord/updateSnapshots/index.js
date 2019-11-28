import React, { useState } from "react";
import firebase from "../../../utils/firebase";
import uuid from "uuid";
import axios from "axios";
import { apiPath } from "../../../config";
import {NotificationManager} from 'react-notifications';

function UpdateSnapshot(props) {
    let { galleryPhotos, dispatch, furBaby, id, petOwner, pet, setModel } = props;
    const [ gallery, setGallery ] = useState(galleryPhotos);
    const [deleteImageId, setDeleteImageId] = useState([]);
    const [added, setAdded] = useState(false);
    const updateAppointment = () => {
        furBaby.galleryPhotos = JSON.stringify(gallery);
        dispatch({
            type: "UPDATE_CURRENT_FURBABY",
            payload: furBaby
        });
        let ids = [...deleteImageId];
        ids.forEach(item => {
            firebase.storage().ref("appointments/"+id).child(item).delete().then(res => {});
        });
        setDeleteImageId([]);
        setModel(null);
        let payload = {
            appointment: {...furBaby, pet, petOwner},
            type: "Gallery"
        };
        axios.post(apiPath+"/notesOrGalleryUpdated", payload).then(res => {
            if(added){
                NotificationManager.success('New snapshot added', 'Gallery Update');
            }
            setAdded(false);
        }).catch(err => {
            console.log("err.", err.response);
        });
    };

    const remove = (uid) => {
        let ids = [...deleteImageId];
        ids.push(uid);
        setDeleteImageId(ids);
        setGallery(gallery.filter(item => item.id !== uid));
    };

    const deleteMedia = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            remove(id);
        }
    };

    const addPhotoImage = (event) => {
        let uid = uuid();
        let gall = [...gallery];
        const file = event.target.files[0];
        const storage = firebase.storage();
        const imageRef = storage.ref('appointments/'+id).child(uid);
        let data = imageRef.put(file);
        data.on('state_changed', (snapshot) => {
            if (gall.find(item => item.id === uid) === undefined) {
                gall.push({
                    id: uid,
                    uri: "loader"
                });
                setGallery([...gall]);
            }
        }, (err) => {
        }, (complete) => {
            imageRef.getDownloadURL().then(function (downloadURL) {
                gall.forEach(item => {
                    if (item.id === uid && item.uri === "loader") {
                        item.uri = downloadURL;
                    }
                });
                setGallery([...gall]);
                setAdded(true);
            });
        });
    };



    return (
        <div id="simpleModal" className="modal">
            <div className="snapshots-content">
                <div className="flex justify-end">
                    <img onClick={()=>setModel(null)} src={require('../../../assets/images/close.png')} alt="pic"/>
                </div>
                <div className="food-popup-heading">
                    <h1>Snapshots</h1>
                </div>
                <div className="food-popup-para mt-4">
                    <p>Select the photo you wish to share. Click add activity to send the update to the pet owner.</p>
                </div>
                <div className="flex justify-around mt-12">
                    <div className="flex">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                            <svg className="w-8 h-8" fill="#8BC53F" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">UPLOAD IMAGE</span>
                            <input type='file' onChange={event => addPhotoImage(event)} className="hidden" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center mt-8 flex-wrap">
                    {
                        gallery.map(item => {
                            return <div className="gallery-image" key={item.id}>
                                    {
                                        item.uri === "loader" ?
                                            <img className="pl-1 pic" src={require("../../../assets/images/loader.gif")}/>:
                                            <div className="pl-1 pic" style={{backgroundImage: "url("+item.uri+")"}}/>
                                    }
                                <br/>
                                <img className="ml-12" src={require('../../../assets/images/bin.png')} onClick={() => deleteMedia(item.id)} alt="pic"/>
                            </div>
                        })
                    }
                </div>
                <div className="flex justify-center mt-20">
                    <button className="activityBtn-popup" onClick={() => updateAppointment()}>ADD ACTIVITY</button>
                    <button className="CnclBtn-popup ml-4" onClick={()=>{setModel(null); setAdded(false);}}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateSnapshot;
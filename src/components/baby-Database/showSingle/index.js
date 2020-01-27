import React, { useEffect, useState } from "react";
import firebase from "../../../utils/firebase";

function ShowSingle({ item, placeholder, setCurrentPet, setSchedulelPopup }) {

    const [coverPhoto, setCoverPhoto] = useState(item.coverPhoto);
    useEffect(() => {
        firebase.database().ref("/pets/"+item.id+"/coverPhoto").on('value', (snapshot) => {
            setCoverPhoto(snapshot.val());
        });
    });

    return (
        <div className="pl-0 pr-1 m-1">
            <div className="max-w-sm rounded overflow-hidden shadow-border">
                <div className="px-6 py-4 flex justify-center m-auto pt-5">
                    <div className="img1">
                        <img style={{width: "130px", height: "130px"}}
                             src={coverPhoto ? coverPhoto : placeholder}/>
                    </div>
                </div>
                <div className="px-6 pt-10 py-5 flex justify-center m-auto items-center content-center forText">
                    <p>{item.name}<br/>
                        <span className="newVisitButton" onClick={() => {
                            setCurrentPet(item.id);
                            setSchedulelPopup(true)
                        }}><button className="mt-6">SCHEDULE NEW VISIT</button></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShowSingle;
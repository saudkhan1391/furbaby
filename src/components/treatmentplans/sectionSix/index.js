import React, {useState, useEffect} from 'react';
import uuid from "uuid";
import firebase from "../../../utils/firebase";
import Style from './style';
import { NotificationManager} from 'react-notifications';
const SectionFour = (props) => {
    let {trackers, clinic, dispatch, setTrackers} = props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [button, setButton] = useState("ADD TRACKER");

    const submit = (event) => {
        event.preventDefault();
        let newClinic = {...clinic};
        let tracker = [...trackers];
        let mainData = [];
        let newCustom = content.split('\n');
        newCustom.forEach((item, index) => {
            if(item){
                mainData.push({
                    id: index+1,
                    title: item,
                    value: false,
                    status: 1
                })
            }
        });
        tracker.push({
            id: uuid(),
            name: title,
            trackers: mainData,
        });
        newClinic.trackers = JSON.stringify(tracker);
        let main = {...newClinic};
        delete main.clinicId;
        setButton("ADDING...");
        firebase.database().ref("/clinics").child(newClinic.clinicId).set(main).then(res => {
            dispatch({
                type: "UPDATE_CLINIC",
                payload: newClinic
            });
            setTrackers(tracker);
            setTitle("");
            setContent("");
            NotificationManager.success('Tracker successfully updated.', 'Tracker Update.');
            setButton("ADD TRACKER");
        }).catch(err => {
            NotificationManager.error('Something went wrong. Please check your internet connection or try again later.', 'Tracker Update.');
            setButton("ADD TRACKER");
        });
    };

    return (
        <div className="sixtrackers">
            <div className="container mx-auto">
                <div className="flex mb-4">
                    <div className="w-full mt-12">
                        <div className="customMedication">
                            <h1>
                                ADD A NEW TRACKER
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="w-fullh-12">
                        <p className="noteTtle mt-4">TRACKER TITLE</p>
                        <div className="fotText-area mt-2">
                            <input className="border py-2 px-3" type="text"
                                   value={title ? title : ""}
                                   onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="flex mb-4">
                    <div className="w-fullh-12">
                        <p className="note mt-4">TRACKER COMPONENTS</p>
                        <p className="note text-sm">To add multiple separate by a line break</p>
                        <div className="fotText-area mt-2">
                            <textarea rows="5" cols="100"
                                      value={content ? content : ""}
                                      onChange={(event) => setContent(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex h-32">
                    <div className="savebtnText">
                        <button onClick={(event) => {
                            submit(event)
                        }}>{button}
                        </button>
                    </div>
                </div>
            </div>
            <Style/>
        </div>

    );
}
export default SectionFour;
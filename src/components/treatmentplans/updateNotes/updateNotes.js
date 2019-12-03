import React, {useState, useEffect} from 'react';
import firebase from "../../../utils/firebase";
import uuid from "uuid";
import Style from './style';
import { NotificationManager} from 'react-notifications';
const SectionFour = (props) => {
    let {trackers, clinic, dispatch, setTrackers, currentId, setEditPopup} = props;
    const [title, setTitle] = useState(trackers[currentId].name);
    const [content, setContent] = useState("");
    const [button, setButton] = useState("Update");
    useEffect(() => {
        setTitle(trackers[currentId].name);
        let temp = "";
        trackers[currentId].trackers.forEach(item => {
            temp = temp + item.title + "\n";
        });
        setContent(temp);
    }, [currentId]);

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
        tracker[currentId].title = title;
        tracker[currentId].trackers = mainData;
        newClinic.trackers = JSON.stringify(tracker);
        let main = {...newClinic};
        delete main.clinicId;
        setButton("Updating...");
        firebase.database().ref("/clinics").child(newClinic.clinicId).set(main).then(res => {
            dispatch({
                type: "UPDATE_CLINIC",
                payload: newClinic
            });
            setTrackers(tracker);
            setTitle("");
            setContent("");
            setEditPopup(false);
            setButton("Update");
            NotificationManager.success('Tracker successfully updated.', 'Tracker Update.');
        }).catch(err => {
            setEditPopup(false);
            NotificationManager.error('Something went wrong. Please check your internet connection or try again later.', 'Note Update.');
            setButton("Update");
        });
    };


    return (
        <div id="simpleModal" className="modal">
            <div className="modal-content">
                <div className="flex justify-end">
                    <img onClick={() => setEditPopup(false)} src={require('../../../assets/images/close.png')}
                         alt="pic"/>
                </div>
                <div className="container mx-auto">
                    <div className="flex mb-4">
                        <div className="w-full mt-12">
                            <div className="customMedication">
                                <h1>
                                    EDIT TRACKER
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-fullh-12">
                            <p className="noteTtle mt-4">TRACKER TITLE</p>
                            <div className="fotText-area mt-2">
                            <textarea rows="1" cols="100" value={title ? title : ""}
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
            </div>
            <Style/>
        </div>
    );
}
export default SectionFour;
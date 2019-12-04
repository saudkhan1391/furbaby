import React, {useState, useEffect} from 'react';
import firebase from '../../utils/firebase'
import SectionSix from './sectionSix';
import EditNote from './updateNotes/updateNotes';
import Style from './style';
import { NotificationManager} from 'react-notifications';
import Layout from '../layout/container';
import DTrackers from "../../jsons/defaultTracker.json";
const Schedule = (props) => {
    let {clinic, dispatch} = props;
    let [trackers, setTrackers] = useState(clinic.trackers ? JSON.parse(clinic.trackers) : DTrackers);
    const [currentId, setCurrent] = useState(null);
    const [editPopup, setEditPopup] = useState(false);
    const [deleteTrackers, setDeleteTrackers] = useState([]);
    useEffect(() => {
        let duplicate = clinic.trackers ? JSON.parse(clinic.trackers) : DTrackers;
        if (duplicate) {
            duplicate.forEach(sin => {
                sin.check = false;
            })
        }
        setTrackers(duplicate);
    }, [clinic]);


    const deleteCurrent = (id) => {
        let note = [...trackers];
        let temp = note.filter(item => item.id !== id);
        if (temp) {
            temp.forEach(sin => {
                delete sin.check;
            })
        }
        deleteTrackersFinal(temp);
    };

    const deleteTrackersFinal = (temp) => {
        let newClinic = {...clinic};
        newClinic.trackers = JSON.stringify(temp);
        let main = {...newClinic};
        delete main.clinicId;
        firebase.database().ref("/clinics").child(newClinic.clinicId).set(main).then(res => {
            dispatch({
                type: "UPDATE_CLINIC",
                payload: newClinic
            });
            setTrackers(temp);
            NotificationManager.success('Trackers successfully deleted.', 'Tracker Update.');
        }).catch(err => {
            NotificationManager.error('Something went wrong. Please check your internet connection or try again later.', 'Tracker Update.');
        });
    };

    const setDeleteMultipleTrackerIds = (id) => {
        let ids = [...deleteTrackers];
        let tracker = [...trackers];
        trackers.forEach(sin => {
            if (sin.id === id) {
                sin.check = !sin.check
            }
        });
        if (ids.find(sin => sin === id)) {
            ids = ids.filter(item => item !== id);
        } else {
            ids.push(id);
        }
        setTrackers(tracker);
        setDeleteTrackers(ids);
    };

    const deleteMultipleTracker = () => {
        let note = [...trackers];
        let temp = [];

        if (window.confirm("Are you sure you want to delete these tracker?")) {
            note.forEach(single => {
                if (deleteTrackers.find(item => item === single.id) === undefined) {
                    delete single.check;
                    temp.push(single);
                }
            });
            deleteTrackersFinal(temp);
            NotificationManager.success('Tracker successfully deleted.', 'Tracker Update.');
        }
    };
    return (
        <Layout>
          <div style={{"padding":"0 15px"}}>
            <div className="container mx-auto">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                    <div className="mt-12 medicationHeading">
                        <h1>CUSTOMIZE TRACKERS</h1>
                    </div>
                    <div className="mt-2 forline-again1"/>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                    <div className="flex justify-between mt-12">
                        <div className="medicationHeading2">
                            <h1>TRACKERS</h1>
                        </div>
                        <div className="flex mr-4">
                            <div>
                                <button className="deselectbtn" onClick={() => deleteMultipleTracker()}>DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="px-2">
                    <div className="flex flex-wrap">
                        {
                            trackers.map((item, index) => {
                                return (
                                    <div key={index} className="w-1/2 pr-2">
                                        <div className="bordersBoxes h-14 mt-2">
                                            <div className="flex px-4 py-3 justify-between">
                                                <div>
                                                    <div className="flex">
                                                        <label className="container1">
                                                            <input checked={item.check} type="checkbox" onClick={() => {
                                                                setDeleteMultipleTrackerIds(item.id)
                                                            }}/>
                                                            <span className="checkmark"/>
                                                        </label>
                                                        <label>{item.name}</label>
                                                    </div>
                                                </div>
                                                <div className="duoBtn">
                                                    <button className="mr-2 blueBtn18" onClick={() => {
                                                        setCurrent(index);
                                                        setEditPopup(true);
                                                    }}>EDIT
                                                    </button>
                                                    <button className="greyBtn18" onClick={() => {
                                                        if (window.confirm("Are you sure you want to delete the note?")) {
                                                            deleteCurrent(item.id)
                                                        }
                                                    }}>DELETE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            <SectionSix setTrackers={setTrackers} trackers={trackers} clinic={clinic} dispatch={dispatch}/>
            {editPopup &&
            <EditNote currentId={currentId} setEditPopup={setEditPopup} setTrackers={setTrackers} trackers={trackers}
                        clinic={clinic} dispatch={dispatch}/>}
            <Style/>
            </div>
        </Layout>
    );
}
export default Schedule;
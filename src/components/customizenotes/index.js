import React, {useState, useEffect} from 'react';
import firebase from '../../utils/firebase'
import SectionSix from './sectionSix';
import EditNote from './updateNotes/updateNotes';
import Style from './style';
import { NotificationManager} from 'react-notifications';
import Layout from '../layout/container';
import DNotes from "../../jsons/notes.json";
const Schedule = (props) => {
    let {clinic, dispatch} = props;
    let [notes, setNotes] = useState(clinic.notes ? JSON.parse(clinic.notes) : DNotes);
    const [currentId, setCurrent] = useState(null);
    const [editPopup, setEditPopup] = useState(false);
    const [deleteNotes, setDeleteNotes] = useState([]);
    useEffect(() => {
        let duplicate = clinic.notes ? JSON.parse(clinic.notes) : DNotes;
        if (duplicate) {
            duplicate.forEach(sin => {
                sin.check = false;
            })
        }
        setNotes(duplicate);
    }, [clinic]);


    const deleteCurrent = (id) => {
        let note = [...notes];
        let temp = note.filter(item => item.id !== id);
        if (temp) {
            temp.forEach(sin => {
                delete sin.check;
            })
        }
        deleteNotesFinal(temp);
    };

    const deleteNotesFinal = (temp) => {
        let newClinic = {...clinic};
        newClinic.notes = JSON.stringify(temp);
        let main = {...newClinic};
        delete main.clinicId;
        firebase.database().ref("/clinics").child(newClinic.clinicId).set(main).then(res => {
            dispatch({
                type: "UPDATE_CLINIC",
                payload: newClinic
            });
            setNotes(temp);
            NotificationManager.success('Note successfully deleted.', 'Note Update.');
        }).catch(err => {
            NotificationManager.error('Something went wrong. Please check your internet connection or try again later.', 'Note Update.');
        });
    };

    const setDeleteMultipleNotesIds = (id) => {
        let ids = [...deleteNotes];
        let note = [...notes]
        notes.forEach(sin => {
            if (sin.id === id) {
                sin.check = !sin.check
            }
        });
        if (ids.find(sin => sin === id)) {
            ids = ids.filter(item => item !== id);
        } else {
            ids.push(id);
        }
        setNotes(note);
        setDeleteNotes(ids);
    };

    const deleteMultipleNotes = () => {
        let note = [...notes];
        let temp = [];

        if (window.confirm("Are you sure you want to delete these notes?")) {
            note.forEach(single => {
                if (deleteNotes.find(item => item === single.id) === undefined) {
                    delete single.check;
                    temp.push(single);
                }
            });
            deleteNotesFinal(temp)
            NotificationManager.success('Note successfully deleted.', 'Note Update.');
        }
    };
    return (
        <Layout>
            <div className="container mx-auto" style={{"padding":"0 15px"}}>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                    <div className="mt-12 medicationHeading">
                        <h1>CUSTOMIZE NOTES</h1>
                    </div>
                    <div className="mt-2 forline-again1"></div>
                </div>
            </div>
            <div className="container notess mx-auto" style={{"padding":"0 15px"}}>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                    <div className="flex justify-between mt-12">
                        <div className="medicationHeading2">
                            <h1>NOTES</h1>
                        </div>
                        <div className="flex mr-4">
                            <div>
                                <button className="deselectbtn" onClick={() => deleteMultipleNotes()}>DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bbBoxes mx-auto" style={{"padding":"0 15px"}}>
                <div className="px-2">
                    <div className="flex flex-wrap">
                        {notes.map((item, index) => <div key={index} className="w-1/2 pr-2">
                            <div className="bordersBoxes h-14 mt-2">
                                <div className="flex px-4 py-3 justify-between treat-plan-card" >
                                    <div>
                                        <div className="flex">
                                            <label className="container1">
                                                <input checked={item.check} type="checkbox" onClick={() => {
                                                    setDeleteMultipleNotesIds(item.id)
                                                }}/>
                                                <span className="checkmark"></span>
                                            </label>
                                            <label>{item.title}</label>
                                        </div>
                                    </div>
                                    <div>
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
                        </div>)}
                    </div>
                </div>
            </div>
            <SectionSix setNotes={setNotes} notes={notes} clinic={clinic} dispatch={dispatch}/>
            {editPopup &&
            <EditNote currentId={currentId} setEditPopup={setEditPopup} setNotes={setNotes} notes={notes}
                        clinic={clinic} dispatch={dispatch}/>}
            <Style/>
        </Layout>
    );
}
export default Schedule;
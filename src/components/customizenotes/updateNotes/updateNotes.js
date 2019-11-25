import React, {useState, useEffect} from 'react';
import firebase from "../../../utils/firebase";
import Style from './style';
const SectionFour = (props) => {
    let {notes, clinic, dispatch, setNotes, currentId, setEditPopup} = props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [gallery, setGallery] = useState([]);
    const [button, setButton] = useState("Update");

    useEffect(() => {
        setTitle(notes[currentId].title);
        setContent(notes[currentId].content);
        setGallery(notes[currentId].photos);
    }, [currentId]);

    const submit = (event) => {
        event.preventDefault();
        let newClinic = {...clinic};
        let note = [...notes];
        note[currentId].title = title;
        note[currentId].content = content;
        note[currentId].photos = gallery;
        newClinic.notes = JSON.stringify(note);
        let main = {...newClinic};
        delete main.clinicId;
        setButton("Updating...");
        firebase.database().ref("/clinics").child(newClinic.clinicId).set(main).then(res => {
            dispatch({
                type: "UPDATE_CLINIC",
                payload: newClinic
            });
            setNotes(note);
            setTitle("");
            setContent("");
            setEditPopup(false);
            setButton("Update");
        }).catch(err => {
            setEditPopup(false)
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
                                    Edit NOTE
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-fullh-12">
                            <p className="noteTtle mt-4">Note Title</p>
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
                            <p className="note mt-4">Note</p>
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
                        {/*<div className="attachmentbtn ml-4">*/}
                        {/*<button>ADD / EDIT PHOTO ATTACHMENTS TO NOTE</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <Style/>
        </div>
    );
}
export default SectionFour;
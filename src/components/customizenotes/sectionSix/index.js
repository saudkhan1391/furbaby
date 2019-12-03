import React, {useState, useEffect} from 'react';
import uuid from "uuid";
import firebase from "../../../utils/firebase";
import Style from './style';
import { NotificationManager} from 'react-notifications';
const SectionFour = (props) => {
    let {notes, clinic, dispatch, setNotes} = props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [gallery, setGallery] = useState([]);
    const [button, setButton] = useState("ADD NOTE");

    useEffect(() => {
        // action on update of movies
    }, [gallery]);
    const submit = (event) => {
        event.preventDefault();
        let newClinic = {...clinic};
        let note = [...notes];
        note.push({
            id: uuid(),
            title,
            content,
            photos: gallery
        });
        newClinic.notes = JSON.stringify(note);
        let main = {...newClinic};
        delete main.clinicId;
        setButton("ADDING...");
        firebase.database().ref("/clinics").child(newClinic.clinicId).set(main).then(res => {
            dispatch({
                type: "UPDATE_CLINIC",
                payload: newClinic
            });
            setNotes(note);
            setTitle("");
            setContent("");
            NotificationManager.success('Note successfully updated.', 'Note Update.');
            setButton("ADD NOTE");
        }).catch(err => {
            NotificationManager.error('Something went wrong. Please check your internet connection or try again later.', 'Note Update.');
        });
    };

    const addPhoto = (event) => {
        let uid = uuid();
        let gall = [...gallery];
        const file = event.target.files[0];
        const storage = firebase.storage();
        const imageRef = storage.ref('notes').child(uid);
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
            });
        });
    };

    const remove = (uid) => {
        if (window.confirm("Are you sure you wand delete the photo"))
            firebase.storage().ref("notes").child(uid).delete().then(res => {
                setGallery(gallery.filter(item => item.id !== uid));
                NotificationManager.success('Photo Deleted.', 'Note Update.');
            });
    };

    return (
        <div className="sixNotes">
            <div className="container mx-auto">
                <div className="flex mb-4">
                    <div className="w-full mt-12">
                        <div className="customMedication">
                            <h1>
                                ADD A NEW NOTE
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="w-fullh-12">
                        <p className="noteTtle mt-4">Note Title</p>
                        <div className="fotText-area mt-2">
                            <input className="border py-2 px-3" rows="1" cols="100" type="text"
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
                        <p className="note mt-4">Note</p>
                        <div className="fotText-area mt-2">
                            <textarea rows="5" cols="100"
                                      value={content ? content : ""}
                                      onChange={(event) => setContent(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {
                    gallery.length !== 0 &&
                    <div>
                        <p>Related Photos</p>
                        <div className="flex flex-wrap">
                            {gallery.map((sin, index) => sin.uri === "loader" ?
                                <img className="relatedimage"
                                     src={require("../../../assets/images/loader.gif")}
                                     alt=""/>
                                :
                                <div key={index} className="flex relative">
                                    <img key={index} className="relatedimage" src={sin.uri ? sin.uri : ""} alt=""/>
                                    <span className="corsswalaspan" onClick={() => remove(sin.id)}>x</span>
                                </div>
                            )}
                        </div>
                    </div>
                }
                <div className="flex h-32">
                    <div className="savebtnText">
                        <button onClick={(event) => {
                            submit(event)
                        }}>Add
                        </button>
                    </div>
                    <div className="attachmentbtn ml-4 mt-2">
                        <label className="custom-file-upload">
                            <input type="file" accept="image/png, image/jpeg" onChange={event => addPhoto(event)}/>
                            ADD PHOTO ATTACHMENTS TO NOTE
                        </label>
                    </div>
                </div>
            </div>
            <Style/>
        </div>

    );
}
export default SectionFour;
import React, { useState } from 'react';
import Style from './style';
import UpdateMedication from "../updateMedication";
import UpdateFood from "../updateFood";
import UpdatePeePoop from "../updatePeePoop";
import UpdateNotes from "../updateNotes";
import UpdateSnapshot from "../updateSnapshots";
import UpdateOwenNotes from "../updateClinicNotes";


const SectionTwo=(props) => {
    let { foodData, medicationData, notes, pee, dispatch, furBaby, clinic, Foods, Meds, DefaultNotes, lastName, description, current, galleryPhotos, staffNotes } = props;
    const [model, setModel]=useState(null);


    const formatAMPM = (date) =>  {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };

    const removePee = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            let data = [...pee];
            data = data.filter(item => item.id !== id);
            furBaby.pee = JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
        }
    };

    const removeNotes = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            let data = [...notes];
            data = data.filter(item => item.id !== id);
            furBaby.notes = JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
        }
    };


    const removeFood = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            let data = [...foodData];
            data = data.filter(item => item.id !== id);
            furBaby.food = JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
        }
    };

    const removeMedication = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            let data = [...medicationData];
            data = data.filter(item => item.id !== id);
            furBaby.medications =  JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
        }
    };

    const showPopups = () => {
        switch(model){
            case 1:
                return <UpdateMedication Meds={Meds} setModel={setModel}  medicationData={medicationData} dispatch={dispatch} furBaby={furBaby} clinic={clinic}/>;
            case 2:
                return <UpdateFood Foods={Foods} setModel={setModel} foodData={foodData} dispatch={dispatch} furBaby={furBaby} clinic={clinic}/>;
            case 3:
                return <UpdatePeePoop  pee={pee} dispatch={dispatch} furBaby={furBaby} setModel={setModel}/>;
            case 4:
                return <UpdateNotes  DefaultNotes={DefaultNotes} description={description} notes={notes} dispatch={dispatch} furBaby={furBaby} pet={current.pet} petOwner={current.petOwner} name={name} lastName={lastName} clinic={clinic} setModel={setModel}/>;
            case 5:
                return <UpdateSnapshot  galleryPhotos={galleryPhotos} dispatch={dispatch} furBaby={furBaby}  pet={current.pet} petOwner={current.petOwner} id={current.appointmentId} setModel={setModel}/>;
            case 6:
                return <UpdateOwenNotes  setModel={setModel} staffNotes={staffNotes} dispatch={dispatch} furBaby={furBaby} pet={current.pet} petOwner={current.petOwner} name={name} clinic={clinic}/>;
            default:
                return;

        }
    };

    const convertNote = (note) => {
        if(note){
            note = note.split("\n");
            return note;
        }else {
            return [""];
        }
    }

    return (
        <div>
            <div className="container mx-auto">
                <div className="mt-12 mb-6 heading">
                    <h3>ACTIVITY REPORT</h3>
                </div>

                <div>
                    <div className="activity mb-6">
                        <div className=" flex act-top justify-between px-5 py-5">
                            <div className="act-1"><h3>Medication</h3></div>
                            <div className="act-2"><button onClick={()=>setModel(1)}>ADD ACTIVITY</button></div>
                        </div>

                        <div className="act-data justify-between px-5 py-5">
                            <h3>Posted Activities</h3>
                            {
                                medicationData.map(single => {
                                    let date = new Date(single.date);
                                    return <div key={single.id}>
                                    <img className="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic" onClick={() => removeMedication(single.id)}/>
                                    <p className="mt-2 inline">{single.type} {formatAMPM(date)}</p><br/>
                                   </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <div className="activity mb-6">
                        <div className=" flex act-top justify-between px-5 py-5">
                            <div className="act-1"><h3>Food</h3></div>
                            <div className="act-2"><button onClick={()=>setModel(2)}>ADD ACTIVITY</button></div>
                        </div>

                        <div className="act-data justify-between px-5 py-5">
                            <h3>Posted Activities</h3>
                            {
                                foodData.map(single => {
                                    return <div key={single.id}>
                                        <img className="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic" onClick={() => removeFood(single.id)}/>
                                        <p className="mt-2 inline">{single.type} {single.quantity ? (", "+single.quantity+"Cup") : ""}</p><br/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <div className="activity mb-6">
                        <div className=" flex act-top justify-between px-5 py-5">
                            <div className="act-1"><h3>Pee &amp; Poop</h3></div>
                            <div className="act-2"><button onClick={()=>setModel(3)}>ADD ACTIVITY</button></div>
                        </div>

                        <div className="act-data justify-between px-5 py-5">
                            <h3>Posted Activities</h3>
                            {
                                pee.map(single => {
                                    let date = new Date(single.date);
                                    return <div key={single.id}>
                                        <img className="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic" onClick={() => removePee(single.id)}/>
                                        <p className="mt-2 inline">{single.type} {formatAMPM(date)}</p><br/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="activity mb-6">
                    <div className=" flex act-top justify-between px-5 py-5">
                        <div className="act-1"><h3>Notes</h3></div>
                        <div className="act-2"><button onClick={()=>setModel(4)}>ADD ACTIVITY</button></div>
                    </div>
                    <div className="act-data justify-between px-5 py-5">
                        <h3>Posted Activities</h3>
                        {
                            notes.map(single => {
                                return <div key={single.id}>
                                    <img className="bin-img inline mr-2" src={require('../../../assets/images/bin.png')} alt="pic" onClick={() => removeNotes(single.id)}/>
                                    <p className="mt-2 inline">{single.note}</p><br/>
                                    {
                                        single.photos && single.photos.length !== 0 &&
                                        <div className="imageCont">
                                            {
                                                single.photos.map(item => {
                                                    return (
                                                        <img alt="" className="mr-4" key={item.id} src={item.uri}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </div>
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className="">
                        <div className="activity mb-6">
                            <div className=" flex act-top justify-between px-5 py-5">
                                <div className="act-1"><h3>Snapshots</h3></div>
                                <div className="act-2"><button onClick={()=>setModel(5)}>ADD ACTIVITY</button></div>
                            </div>

                            <div className="act-data gallery-images justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <div className="flex mt-5 mb-4">
                                    {
                                        galleryPhotos.map(item => {
                                            return (
                                                <img className="mr-3" key={item.uri} src={item.uri} alt="pic"/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity mb-12 staffnotes">
                    <div className=" flex act-top justify-between px-5 py-5">
                        <div className="act-1"><h3>Staff Only Notes</h3></div>
                        <div className="act-2"><button onClick={()=>setModel(6)}>UPDATE NOTE</button></div>
                    </div>
                    <div className="act-data justify-between px-5 py-5">
                        <div>
                            {
                                convertNote(staffNotes).map((item, index) => {
                                    return <div key={index}>
                                        <p className="mt-2 inline">{item}</p>
                                        <br/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
            {
                showPopups()
            }
            <Style/>
        </div>
    );
}

export default SectionTwo;
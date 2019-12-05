import React, { useState, useEffect } from 'react';
import SectionOne from '../trackerRecord/sectionOne';
import SectionTwo from '../trackerRecord/sectionTwo';
import Layout from '../layout/container';
import firebase from "../../utils/firebase";
import Foods from "../../jsons/food.json";
import Meds from "../../jsons/medications.json";
import DefaultNotes from "../../jsons/notes.json";

const trackerRecord = (props) => {
    let { current, dispatch, clinic } = props;
    const [furBaby, setFurBaby] = useState(current);
    const [show, setShow] = useState(false);

    useEffect(() => {
        firebase.database().ref("/appointments/"+current.appointmentId).on('value', (snapshot) => {
            let data = {...snapshot.val()};
            data.appointmentId = current.appointmentId;
            setFurBaby(data);
        });
        setShow(true);
    }, [current]);
    let { trackingComponent, medications, food, pee, notes, appointmentType, petOwnerNote, startTime, galleryPhotos, description, staffNotes } = furBaby;
    let tracker =  trackingComponent ? JSON.parse(trackingComponent) : [];
    let { name, coverPhoto } = current.pet;
    let { firstName, lastName, workPhone, email } = current.petOwner;
    medications = medications ? JSON.parse(medications) : Meds;
    food = food ? JSON.parse(food) : Foods;
    pee = pee ? JSON.parse(pee) : [];
    notes = notes ? JSON.parse(notes) : DefaultNotes;
    galleryPhotos = galleryPhotos ? JSON.parse(galleryPhotos) : [];
    console.log("current", current);
    return(
        <Layout>
            <SectionOne
                pet={current.pet}
                petOwner={current.petOwner}
                petId={current.petId}
                data={tracker}
                furBaby={furBaby}
                dispatch={dispatch}
                name={name}
                treatment={appointmentType}
                image={coverPhoto}
                petOwnerNote={petOwnerNote}
                startTime={startTime}
                firstName={firstName}
                lastName={lastName}
                phone={workPhone}
                email={email}
                clinic={clinic}
            />
            <SectionTwo
                foodData={food}
                lastName={lastName}
                name={name}
                furBaby={furBaby}
                dispatch={dispatch}
                medicationData={medications}
                notes={notes}
                pee={pee}
                image={coverPhoto}
                galleryPhotos={galleryPhotos}
                clinic={clinic}
                DefaultNotes={DefaultNotes}
                Foods={Foods}
                Meds={Meds}
                description={description}
                current={current}
                staffNotes={staffNotes}
            />
        </Layout>
    );
}

export default trackerRecord;
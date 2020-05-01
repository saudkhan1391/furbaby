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
    const [owner, setOwner] = useState({});
    const [petData, setPet] = useState({});

    useEffect(() => {
        setFurBaby(current);
        firebase.database().ref("/pets/"+current.petId).on('value', (snapshot) => {
            setPet(snapshot.val());
        });
        firebase.database().ref("/petOwner/"+current.petOwnerId).on('value', (snapshot) => {
            setOwner(snapshot.val());
        });
    }, [current]);
    let { trackingComponent, medications, food, pee, notes, petOwnerNote, startTime, galleryPhotos, description, staffNotes } = current;
    let tracker =  trackingComponent ? JSON.parse(trackingComponent) : [];

    let { name, coverPhoto } = petData;

    let { firstName, lastName, workPhone, email } = owner;

    medications = medications ? JSON.parse(medications) : [];
    food = food ? JSON.parse(food) : [];
    pee = pee ? JSON.parse(pee) : [];
    notes = notes ? JSON.parse(notes) : [];
    galleryPhotos = galleryPhotos ? JSON.parse(galleryPhotos) : [];
    return (
        <Layout>
            {
                current &&
                <SectionOne
                    pet={current.pet}
                    petOwner={current.petOwner}
                    petId={current.petId}
                    data={tracker}
                    furBaby={furBaby}
                    dispatch={dispatch}
                    name={name}
                    treatment={description}
                    image={coverPhoto}
                    petOwnerNote={petOwnerNote}
                    startTime={startTime}
                    firstName={firstName}
                    lastName={lastName}
                    phone={workPhone}
                    email={email}
                    clinic={clinic}
                />
            }
            {
                current &&
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
            }
        </Layout>
    );
}

export default trackerRecord;
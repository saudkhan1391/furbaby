import React, { useState, useEffect } from 'react';
import SectionOne from '../trackerRecord/sectionOne';
import SectionTwo from '../trackerRecord/sectionTwo';
import Layout from '../layout/container';
import firebase from "../../utils/firebase";

const trackerRecord = (props) => {
    let { current, dispatch } = props;
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
    let { trackingComponent, medications, food, pee, notes, appointmentType, petOwnerNote, startTime, galleryPhotos } = furBaby;
    let tracker =  trackingComponent ? JSON.parse(trackingComponent) : [];
    let { name, coverPhoto } = current.pet;
    let { firstName, lastName, workPhone, email } = current.petOwner;
    medications = medications ? JSON.parse(medications) : [];
    food = food ? JSON.parse(food) : [];
    pee = pee ? JSON.parse(pee) : [];
    notes = notes ? JSON.parse(notes) : [];
    galleryPhotos = galleryPhotos ? JSON.parse(galleryPhotos) : [];

    return(
        <Layout>
            <SectionOne
                pet={current.pet}
                petOwner={current.petOwner}
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
            />
            <SectionTwo
                foodData={food}
                furBaby={furBaby}
                dispatch={dispatch}
                medicationData={medications}
                notes={notes}
                pee={pee}
                image={coverPhoto}
                galleryPhotos={galleryPhotos}
            />
        </Layout>
    );
}

export default trackerRecord;
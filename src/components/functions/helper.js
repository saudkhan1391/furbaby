import React from "react";
import firebase from "../../utils/firebase";
import ContentLoader from "react-content-loader";

export const setAppointment = async (data, dispatch, index, length) => {
    let { petId, petOwnerId } = data;
    let pet = await firebase.database().ref('/pets/' + petId)
        .once("value").then( snapshot => {

            return snapshot.val();
        });
    let petOwner = await firebase.database().ref('/petOwner/' + petOwnerId)
        .once("value").then( snapshot => {
            return snapshot.val();
        });
    data.pet = pet;
    data.petOwner = petOwner;
    if(petId && petOwnerId && pet && petOwner){
        dispatch({
            type: "ADD_APPOINTMENT",
            payload: data
        });
        if(index === length){
            dispatch({
                type: "ALL_APPOINTMENTS_ADDED",
                payload: data
            });
        }
    }
};

export const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={168}
        height={45}
        viewBox="0 0 168 45"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="20" y="5" rx="3" ry="3" width="88" height="6" />
        <rect x="37" y="23" rx="3" ry="3" width="52" height="6" />
    </ContentLoader>
)
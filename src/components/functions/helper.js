import firebase from "../../utils/firebase";

export const setAppointment = async (data, dispatch) => {
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
    }
};
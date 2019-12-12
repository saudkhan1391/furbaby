import React, {Component} from "react";
const Context = React.createContext();
import firebase from "../utils/firebase";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADED":
            return {...state, loaded: action.payload};
        case "SET_ID":
            return {...state, id: action.payload};
        case "SET_FURBABY":
            return {...state, furBabies: action.payload};
        case "SET_APPOINTMENTS":
            return {...state, appointments: action.payload};
        case "SET_ROLE":
            return {...state, role: action.payload};
        case "SET_CLINIC_DATA":
            let { appointments, clinic, clinician, uid } = action.payload;
            let { clinicId } = clinician;
            return {...state, appointments, clinic : clinic, clinician, clinicId, id: uid};

        case "UPDATE_CURRENT_FURBABY":
            let update = [...state.appointments];
            let { appointmentId, trackingComponent, food, medications, notes, pee, galleryPhotos, appointmentStatus, show, startTime, description } = action.payload;
            update.forEach(item => {
                if(item.appointmentId === appointmentId){
                    item.trackingComponent = trackingComponent;
                    item.food = food;
                    item.pee = pee ? pee : "[]";
                    item.medications = medications;
                    item.notes = notes;
                    item.appointmentStatus = appointmentStatus;
                    if(show){
                        item.show = show;
                    }
                    item.startTime = startTime;
                    item.description = description;
                    item.galleryPhotos = galleryPhotos;
                }
            });
            let data = {...JSON.parse(JSON.stringify({...action.payload}))};
            delete data.appointmentId;
            delete data.pet;
            delete data.petOwner;
            firebase.database().ref("/appointments").child(appointmentId).set(data).then(res => {
            });
            return {...state, furBabies: update};
        case "REMOVE_CURRENT_FURBABY":
            firebase.database().ref("/appointments").child(action.payload).remove().then(res => {});
            let fin = [...state.appointments];
            let temp = fin.filter(item => item.appointmentId !== action.payload);
            return {...state, appointments: temp};
        case "SET_CURRENT_FURBABY_ID":
            return {...state, currentFurBaby: action.payload};
        case "SET_ALL_USERS":
            return {...state, users: action.payload};
        case "UPDATE_CLINIC":
            return {...state, clinic: action.payload};
        case "SET_LOGGEDIN":
            return {...state, loggedIn: action.payload};
        default:
            return state;
    }
};

export class FurbabyProvider extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action))
        },
        id: null,
        currentFurBaby: "1",
        furBabies: [],
        medications: [],
        food: [],
        loaded: false,
        clinician: null,
        clinic: null,
        appointments: [],
        clinicId: null,
        users: [],
        role: null,
        loggedIn: false
    };

    render() {
        let {state, props: {children}} = this;
        return (
            <Context.Provider value={ state }>{children}</Context.Provider>
        )
    }
}

export const FurbabyConsumer = Context.Consumer;
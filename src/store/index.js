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
        case "ADD_APPOINTMENT":
            return {...state, appointments: [...state.appointments, action.payload]};
        case "REMOVE_APPOINTMENT":
            return {...state, appointments: state.appointments.filter(item => item.appointmentId !== action.payload)};
        case "SET_APPOINTMENTS":
            return {...state, appointments: action.payload, appointmentsLoaded: true};
        case "ALL_APPOINTMENTS_ADDED":
            console.log("ALL_APPOINTMENTS_ADDED");
            return {...state, appointmentsLoaded: true};
        case "SET_ROLE":
            return {...state, role: action.payload};
        case "SET_CLINIC_DATA":
            let { clinic, clinician, uid } = action.payload;
            let { clinicId } = clinician;
            return {...state, clinic : clinic, clinician, clinicId, id: uid};

        case "UPDATE_CURRENT_FURBABY":
            let update = [...state.appointments];
            let data = {...JSON.parse(JSON.stringify({...action.payload}))}; //
            let { appointmentId, trackingComponent, food, medications, notes, staffNotes, pee, galleryPhotos, appointmentStatus, show, startTime, description, endTime, appointmentType } = action.payload;
            update.forEach(item => {
                if(item.appointmentId === appointmentId){
                    item.trackingComponent = trackingComponent;
                    if(item.startTime !== startTime){ //
                        let time = startTime;
                        let day = time.slice(0, 10);
                        let month = time.slice(0,7);
                        let year = time.slice(0,4);
                        item.year_month_day_clinicId = day + '_' + item.clinicId;
                        item.year_month_clinicId = month + '_' + item.clinicId;
                        item.year_clinicId = year + '_' + item.clinicId;
                        data.year_month_day_clinicId = day + '_' + item.clinicId;
                        data.year_month_clinicId = month + '_' + item.clinicId;
                        data.year_clinicId = year + '_' + item.clinicId;
                        item.startTime_clinicId = startTime + ' ' + item.clinicId;
                        data.startTime_clinicId = startTime + ' ' + item.clinicId;
                    }
                    item.food = food;
                    item.pee = pee ? pee : "[]";
                    item.medications = medications;
                    item.notes = notes;
                    item.appointmentStatus = appointmentStatus;
                    item.appointmentType = appointmentType;
                    if(show){
                        item.show = show;
                    }
                    if(item.appointmentType === "Boarding"){
                        item.endTime = endTime;
                    }
                    item.startTime = startTime;
                    item.description = description;
                    item.galleryPhotos = galleryPhotos;
                    item.staffNotes = staffNotes;
                }
            });
            delete data.appointmentId;
            delete data.pet;
            delete data.petOwner;
            firebase.database().ref("/appointments").child(appointmentId).set(data).then(res => {
            });
            return {...state, furBabies: update};
        case "REMOVE_CURRENT_FURBABY":
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
        case "SET_LOADED_DATES":
            return {...state, loadedDates: action.payload};
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
        loggedIn: false,
        loadedDates: [],
        appointmentsLoaded: false
    };

    render() {
        let {state, props: {children}} = this;
        return (
            <Context.Provider value={ state }>{children}</Context.Provider>
        )
    }
}

export const FurbabyConsumer = Context.Consumer;
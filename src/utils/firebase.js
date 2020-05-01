import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

let main = firebase.initializeApp({
    apiKey: "AIzaSyBN5OzE9hrLbkVAFH-YAyU_m7ZHANQqfvY",
    authDomain: "fur-baby-tracker-dev.firebaseapp.com",
    databaseURL: "https://fur-baby-tracker-dev.firebaseio.com",
    projectId: "fur-baby-tracker-dev",
    storageBucket: "fur-baby-tracker-dev.appspot.com",
    messagingSenderId: "887552431013",
    appId: "1:887552431013:web:e201f0d18e110e5d2dce4c"
});

export default main;
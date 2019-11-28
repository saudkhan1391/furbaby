import React, { useEffect, useState } from "react";
import firebase from "../../../utils/firebase";
import { Link } from "react-router-dom";
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { placeholderPet } from "../../../config";

function card(props) {
    let { item } = props;
    let { trackingComponent } = item;
    const [pet, setPet] = useState(item.pet);
    const [data, setData] = useState(trackingComponent ? JSON.parse(trackingComponent): []);

    useEffect(() => {
        firebase.database().ref("/appointments/"+item.appointmentId).on('value', (snapshot) => {
            let main = {...snapshot.val()};
            let { trackingComponent: tracker } = main;
            setData(tracker ? JSON.parse(tracker): []);
        });

        firebase.database().ref("/pets/"+item.petId).on('value', (snapshot) => {
            let main = {...snapshot.val()};
            setPet(main);
        });
    },[item]);
    const calculate = () => {
        let single = 100/data.length;
        let temp = 0;
        data.forEach(item => {
            if(item.value === true) {
                temp++;
            }
        });
        return (single * temp);
    };
    return (

            <div className="shadow-bord">
                <div className="">
                    <CircularProgressbarWithChildren
                        value={calculate()}
                        styles={buildStyles({
                            rotation: 0,
                            strokeLinecap: 'rounded',
                            pathTransitionDuration: 1,
                            pathColor: calculate() === 100 ? "#8bc53f" :"#32c5ff"
                        })}>
                        <div className="coverPhoto" style={{backgroundImage: "url("+(pet.coverPhoto ? pet.coverPhoto: placeholderPet)+")"}}/>
                        {
                            calculate() === 100 &&
                            <img src={require("../../../assets/images/completed.png")} className="completed" />

                        }
                    </CircularProgressbarWithChildren>
                </div>
                <div className="forText">
                    <p>
                        {pet.name}
                        <br/>
                        <span className="normal">{pet.species}</span>
                    </p>
                </div>
            </div>
    )
}

export default card;
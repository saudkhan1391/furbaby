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
        <div className="flex-1 h-12 ml-4 ">
            <Link to={"/tracker-record/"+item.appointmentId}>
                <div className="rounded overflow-hidden shadow-bord">
                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
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
                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                        <p>
                            {pet.name}
                            <br/>
                            <span className="normal">{pet.species}</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default card;
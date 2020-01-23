import React, { useEffect, useState } from "react";
import firebase from "../../../utils/firebase";
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { standardDate } from "../../functions";
import { placeholderPet } from "../../../config";

function card(props) {
    // console.log(props,"schedulepet props")
    let { item, setForm, setSchedule } = props;
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

    const showStatus = (value) => {
        let current = standardDate(new Date());
        current = new Date(current.standardDate);
        let itemDate = standardDate(item.startTime);
        itemDate = new Date(itemDate.standardDate);
        if(itemDate < current){
            switch(value){
                case "In Hospital":
                case "Complete":
                    return <p className="greenWithOut">VISIT COMPLETE</p>;
                default:
                    return <p onClick={() => showBottom(false)} className="bluePress">RE-SCHEDULE</p>
            }
        }else {
            switch(value){
                case "In Hospital":
                    return <p className="greenWithOut">IN HOSPITAL</p>;
                case "Complete":
                    return <p className="greenWithOut">VISIT COMPLETE</p>;
                default:
                    return <p onClick={() => showBottom(true)} className="bluePress">CHECK IN</p>
            }
        }

    };

    const showBottom = (value) => {
        setSchedule(value);
        setForm(item);
    }

    return (
        <div className="mainWrapper">
            <div className="shadow-bord-main">
                <div className="upCard">
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
                    <div className="petName">
                    <p >
                        {pet.name}{" "}{item.petOwner.lastName}
                        <br/>
                    </p>
                    </div>
                    <p className="normal">{pet.species}</p>
                </div>
                <div className="forText mt-0imp">
                    {
                        showStatus(item.appointmentStatus)
                    }
                </div>
            </div>
            {
                <div className="extension">
                    <p>Edit: <span onClick={() => showBottom(false)}>Visit</span></p>
                </div>
            }
        </div>
    )
}

export default card;
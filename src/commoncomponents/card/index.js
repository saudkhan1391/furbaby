import React, { useEffect, useState } from "react";
import Style from "./style";
import firebase from "../../utils/firebase";
import { Link } from "react-router-dom";
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { placeholderPet } from "../../config";
import { calculate } from "../../components/functions";
import { MyLoader } from "../../components/functions/helper";

function card(props) {
    let { item } = props;
    let { trackingComponent, pet: petData, petOwner } = item;
    const [owner, setOwner] = useState(petOwner ? petOwner : {});
    const [pet, setPet] = useState(petData ? petData : {});
    const [data, setData] = useState(trackingComponent ? JSON.parse(trackingComponent): []);

    useEffect(() => {
        setData( trackingComponent ? JSON.parse(trackingComponent): []);
        if(petData && petOwner){
            setPet(petData);
            setOwner(petOwner);
        } else {
            firebase.database().ref("/pets/" + item.petId).once("value", snapshot => {
                let main = { ...snapshot.val() };
                setPet(main);
            });
            firebase.database().ref("/petOwner/"+item.petOwnerId).once('value', (snapshot) => {
                setOwner(snapshot.val());
            });
        }
    }, [item, trackingComponent, petData, petOwner]);

    const Inside = () => (
        <div className="max-w-sm rounded overflow-hidden shadow-bord">
            <div className="px-6 py-4 flex justify-center m-auto pt-8">
                <CircularProgressbarWithChildren
                    value={calculate(data, item)}
                    styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: 'rounded',
                        pathTransitionDuration: 1,
                        pathColor: item.appointmentStatus === "Complete" ? "#8bc53f" :"#32c5ff"
                    })}>
                    <div className="coverPhoto" style={{backgroundImage: "url("+(pet && pet.coverPhoto ? pet.coverPhoto: placeholderPet)+")"}}/>
                    {
                        item.appointmentStatus === "Complete" &&
                        <img src={require("../../assets/images/completed.png")} alt="" className="completed" />

                    }
                </CircularProgressbarWithChildren>
            </div>
            {
                pet ?
                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                        <p>
                            {pet.name}{" "}{owner.lastName}
                            <br/>
                            <span className="normal">{pet.species}</span>
                        </p>
                    </div> : <div className="pl-8 pt-2 py-4 flex justify-center m-auto items-center content-center forText"><MyLoader/></div>
            }
        </div>
    )

    return (
        <div id="abc" className="flex-1 h-12 ml-4 max-w-sm">
            {
                pet ?
                    <Link to={"/tracker-record/"+item.appointmentId}>
                        <Inside/>
                    </Link> : <Inside/>
            }
            <Style/>
        </div>
    )
}

export default card;
import React, { useEffect, useState } from "react";
import Style from "./style";
import { Link } from "react-router-dom";
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { placeholderPet } from "../../config";
import { calculate, standardDate } from "../../components/functions";
import { ContentLoader } from "../../components/functions/helper";

function card(props) {
    let { item, index } = props;
    let { trackingComponent, pet: petData, petOwner } = item;
    const [pet, setPet] = useState(petData);
    const [owner, setOwner] = useState(petOwner);
    const [data, setData] = useState(trackingComponent ? JSON.parse(trackingComponent): []);

    useEffect(() => {
        setData(trackingComponent ? JSON.parse(trackingComponent): []);
        setPet(petData);
        setOwner(petOwner);
    },[item, trackingComponent]);

    const Inside = () => (
        <div className="flex m-auto">
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
            <Style/>
        </div>
    )

    return(
        <tr className={index%2 === 0 ? "bg-gray-100" : ""}>
            <td className="px-4 py-2"><Inside/></td>
            <td className="px-4 py-2">{pet?(pet.name+" "+owner.lastName):<ContentLoader/>}</td>
            <td className="px-4 py-2">{pet?(pet.species):<ContentLoader/>}</td>
            <td className="px-4 py-2">{standardDate(item.startTime).standardDateUS}</td>
            <td className="px-4 py-2"><button><Link to={"/tracker-record/"+item.appointmentId}>Edit</Link></button></td>
        </tr>
    )
}

export default card;
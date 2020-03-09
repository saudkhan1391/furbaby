import React, { useEffect, useState } from "react";
import firebase from "../../../utils/firebase";
import { Link } from "react-router-dom";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { placeholderPet } from "../../../config";
import { calculate } from "../../../components/functions";

function card(props) {
  let { item } = props;
  let { trackingComponent } = item;
  const [pet, setPet] = useState(item.pet);
  const [data, setData] = useState(
    trackingComponent ? JSON.parse(trackingComponent) : []
  );

  useEffect(() => {
    firebase
      .database()
      .ref("/appointments/" + item.appointmentId)
      .on("value", snapshot => {
        let main = { ...snapshot.val() };
        let { trackingComponent: tracker } = main;
        setData(tracker ? JSON.parse(tracker) : []);
      });

    firebase
      .database()
      .ref("/pets/" + item.petId)
      .on("value", snapshot => {
        let main = { ...snapshot.val() };
        setPet(main);
      });
  }, [item]);
  return (
    <Link to={"/tracker-record/" + item.appointmentId}>
      <div className="shadow-bord">
        <div className="">
          <CircularProgressbarWithChildren
            value={calculate(data, item)}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "rounded",
              pathTransitionDuration: 1,
                pathColor: item.appointmentStatus === "Complete" ? "#8bc53f" :"#32c5ff"
            })}
          >
              {/* <div style={{borderWidth:9, alignSelf:"center",marginLeft:25}}> */}
            <div
              className="coverPhoto"
              style={{
                backgroundImage:
                  "url(" +
                  (pet.coverPhoto ? pet.coverPhoto : placeholderPet) +
                  ")"
              }}
            />
            {item.appointmentStatus === "Complete" && (
              <img
                alt=""
                src={require("../../../assets/images/completed.png")}
                className="completed"
              />
            )}
        {/* </div> */}
          </CircularProgressbarWithChildren>
        </div>
        <div className="forText">
          <p>
            {pet.name}
            <br />
            <span className="normal">{pet.species}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default card;

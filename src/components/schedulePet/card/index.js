import React, { useEffect, useState } from "react";
import firebase from "../../../utils/firebase";
import {CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { standardDate, calculate } from "../../functions";
import { placeholderPet } from "../../../config";
import { MyLoader } from "../../functions/helper";
function card(props) {
  let { item, setForm, setSchedule } = props;
  let { trackingComponent, pet:petData, petOwner } = item;
  const [pet, setPet] = useState(petData);
    const [owner, setOwner] = useState(petOwner);
  const [data, setData] = useState(
    trackingComponent ? JSON.parse(trackingComponent) : []
  );

  useEffect(() => {
    setData(trackingComponent ? JSON.parse(trackingComponent): []);
    setPet(petData);
    setOwner(petOwner);
  }, [item, trackingComponent]);
    const showBottom = (value) => {
        setSchedule(value);
        setForm(item);
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

  return (
    <div className="mainWrapper">
      <div className="shadow-bord-main">
        <div className="upCard">
          <CircularProgressbarWithChildren
            value={calculate(data, item)}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: "rounded",
              pathTransitionDuration: 1,
              pathColor: item.appointmentStatus === "Complete" ? "#8bc53f" : "#32c5ff"
            })}
          >
            <div
              className="coverPhoto"
              style={{
                backgroundImage:
                  "url(" +
                  (pet && pet.coverPhoto ? pet.coverPhoto : placeholderPet) +
                  ")"
              }}
            />
            {item.appointmentStatus === "Complete" && (
              <img
                src={require("../../../assets/images/completed.png")}
                className="completed"
              />
            )}
          </CircularProgressbarWithChildren>
        </div>
          {
              pet ?
              <div className="forText">
                  <div className="petName">
                      <p>
                          {pet.name} {owner.lastName}
                          <br />
                      </p>
                  </div>
                  <p className="normal">{pet.species}</p>
              </div> : <div className="forText"><MyLoader/></div>
          }
          {
              pet &&
              <div className="forText mt-0imp">
                  {showStatus(item.appointmentStatus)}
              </div>
          }
      </div>
      {
          pet &&
            <div className="extension">
              <p>
                Edit: <span onClick={() => showBottom(false)}>Visit</span>
              </p>
            </div>
      }
    </div>
  );
}

export default card;

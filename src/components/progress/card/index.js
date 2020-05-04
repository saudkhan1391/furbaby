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
import { MyLoader } from "../../functions/helper";

function card(props) {
  let { item } = props;
  let { trackingComponent, pet: petData, petOwner } = item;
  const [pet, setPet] = useState(petData);
  const [owner, setOwner] = useState(petOwner);
  const [data, setData] = useState(trackingComponent ? JSON.parse(trackingComponent) : []);

  useEffect(() => {
      setData(trackingComponent ? JSON.parse(trackingComponent): []);
      setPet(petData);
      setOwner(petOwner);
  }, [item, trackingComponent]);

  const Comp = () => (
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
                  <div
                      className="coverPhoto"
                      style={{
                          backgroundImage: "url(" + (pet && pet.coverPhoto ? pet.coverPhoto : placeholderPet) + ")"
                      }}
                  />
                  {item.appointmentStatus === "Complete" && (
                      <img
                          alt=""
                          src={require("../../../assets/images/completed.png")}
                          className="completed"
                      />
                  )}
              </CircularProgressbarWithChildren>
          </div>
          {
              pet ?
                  <div className="forText">
                      <p>
                          {pet.name}{" "}{owner.lastName}
                          <br />
                          <span className="normal">{pet.species}</span>
                      </p>
                  </div> : <div className="forText pl-2"><MyLoader/></div>
          }
      </div>
  );

  return pet ?(
    <Link to={"/tracker-record/" + item.appointmentId}>
        <Comp/>
    </Link>
  ): <div className="without-link">
      <Comp/>
  </div>
}

export default card;

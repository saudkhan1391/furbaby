import React, { useState, useEffect } from "react";
import Style from "./style";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { apiPath, placeholderPet } from "../../../config";
import Single from "./singleTracker";
import CompleteTracker from "./completeTracker";
import { standardDate } from "../../functions";
import { Link } from "react-router-dom";
import UpdateTracker from "../updateTracker";
import { NotificationManager } from "react-notifications";
import firebase from "../../../utils/firebase";
import uuid from "uuid";

const SectionOne = props => {
  // console.log(props,"sction one props")
  let {
    data,
    furBaby,
    dispatch,
    pet,
    petOwner,
    image,
    name,
    treatment,
    petOwnerNote,
    startTime,
    firstName,
    lastName,
    phone,
    email,
    clinic,
    petId
  } = props;
  const [tracker, setTracker] = useState(data);
  const [current, setCurrent] = useState(furBaby);
  const [disabled, setDisabled] = useState(true);
  const [load, setLoad] = useState(true);
  const [show, setShow] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(null);
  const [currentName, setCurrentName] = useState(null);
  const [button, setButton] = useState("UPDATE");
  const [photo, setPhoto] = useState(image);
  let dropDate = standardDate(new Date(startTime));

  useEffect(() => {
    setCurrent(furBaby);
    setTracker(data);
  }, [furBaby, data]);

  useEffect(() => {
    setPhoto(image);
  }, [image]);

  const updateComponent = () => {
    if (current.appointmentStatus === "Complete") {
      let payload = {
        appointment: { ...current, pet, petOwner },
        status: true
      };
      setButton("UPDATING...");
      setDisabled(true);
      axios.post(apiPath + "/completeTrackerComponent", payload).then(res => {
          let temp = { ...JSON.parse(JSON.stringify({ ...current })) };
          delete temp.pet;
          delete temp.petOwner;
          axios.post(apiPath + "/appointmentStatusInHospital", {
              appointment: temp
            }).then(res => {
              setButton("UPDATED");
              NotificationManager.success(
                "Furbaby appointment has been successfully completed",
                "Appointment Completed"
              );
              setTimeout(() => {
                setButton("UPDATE");
              }, 5000);
            });
        })
        .catch(err => {
          setDisabled(false);
          console.log("err.", err.response);
        });
    } else {
      let payload = {
        appointment: { ...current, pet, petOwner },
        trackerName: currentName,
        trackerStatus: currentStatus
      };
      setButton("UPDATING...");
      setDisabled(true);
      if (currentStatus) {
        axios.post(apiPath + "/changeTrackerComponentStatus", payload).then(res => {
            setButton("UPDATED");
            NotificationManager.success("", "Tracker Update");
            setTimeout(() => {
              setButton("UPDATE");
            }, 5000);
              dispatch({
                  type: "UPDATE_CURRENT_FURBABY",
                  payload: current
              });
          })
          .catch(err => {
            setDisabled(false);
            console.log("err.", err.response);
          });
      } else {
        setButton("UPDATED");
        NotificationManager.success("", "Tracker Update");
          dispatch({
              type: "UPDATE_CURRENT_FURBABY",
              payload: current
          });
        setTimeout(() => {
          setButton("UPDATE");
        }, 5000);
      }
    }
  };

  const calculate = () => {
    let single = 100 / data.length;
    let temp = 0;
    data.forEach(item => {
      if (item.value === true) {
        temp++;
      }
    });
    return single * temp;
  };

  const addPhotoImage = event => {
    let uid = uuid();
    const file = event.target.files[0];
    const storage = firebase.storage();
    const imageRef = storage.ref("furBabyCoverPhotos/").child(uid);
    let data = imageRef.put(file);
    data.on(
      "state_changed",
      snapshot => {
        data.on("state_changed", snapshot => {
          setPhoto("loading");
        });
      },
      err => {},
      res => {
        let final = { ...pet };
        imageRef.getDownloadURL().then(function(downloadURL) {
          final.coverPhoto = downloadURL;
          firebase
            .database()
            .ref("/pets")
            .child(petId)
            .set(final)
            .then(main => {
              setPhoto(downloadURL);
              NotificationManager.success("Cover Photo Updated");
            });
        });
      }
    );
  };

  return (
    <div style={{ padding: "0 15px" }} className="tcPage container mx-auto">
      <div>
        <div
          style={{ display: "flex;justify-content:space-around" }}
          className="sDiv mt-12"
        >
          <label className="tcRec font-bold lbl-2">
            FUR BABY TRACKER RECORD - TREATMENT
          </label>
          <Link to={"/dashboard"}>
            <button className="btn-background  font-bold float-right">
              RETURN TO IN PROGRESS DASHBOARD
            </button>
          </Link>
        </div>
      </div>
      <div className="hr mt-4" />

      <div className="main flex mt-12">
        <div className="profile mt-8 ml-8 flex mb-12">
          <div className="flex-1 cen h-12 ml-4 max-w-sm">
            <div className="cenCard rounded overflow-hidden shadow-bord">
              <div className="px-6 py-4 flex justify-center m-auto pt-8">
                <CircularProgressbarWithChildren
                  value={calculate()}
                  styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "rounded",
                    pathTransitionDuration: 0.5,
                    pathColor: calculate() === 100 ? "#8bc53f" : "#32c5ff"
                  })}
                >
                  {calculate() === 100 && (
                    <img
                      src={require("../../../assets/images/completed.png")}
                      className="completed"
                      alt="abcc"
                    />
                  )}
                  {photo ? (
                    photo === "loading" ? (
                      <img
                        className="coverPhoto"
                        src={require("../../../assets/images/loader.png")}
                        alt=""
                      />
                    ) : (
                      <div
                        className="coverPhoto"
                        style={{ backgroundImage: "url(" + photo + ")" }}
                      />
                    )
                  ) : (
                    <div
                      className="coverPhoto"
                      style={{ backgroundImage: "url(" + placeholderPet + ")" }}
                    />
                  )}
                </CircularProgressbarWithChildren>
              </div>
              <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText flex-col flex">
                <div className="petName1">
                  <p className="petName">
                    {name} {petOwner.lastName}
                  </p>
                  <br />
                  <span className="normal">
                    Todays Visit <br />
                    {treatment === "" ? "N/A" : treatment}
                  </span>
                </div>
                <label className="mt-4">
                  <span className="text-sm leading-normal activity-popup-small">
                    ADD COVER PHOTO
                  </span>
                  <input
                    type="file"
                    onChange={event => addPhotoImage(event)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="data-div flex-2">
            <div className="flex justify-between ">
              <label className=" ml-12 flex-1">Dropped Off @</label>
              <p className="text-end inline flex-1">
                {dropDate.time} <span className="pl-8" />
                {dropDate.standardDate}{" "}
              </p>
              {/*<img className="head-img inline flex-1/3" src={require('../../assets/images/settings-3.png')} alt="pic"/>*/}
            </div>
            <div className="flex justify-between">
              <label className=" ml-12">Owner:</label>
              <p className="text-end">
                {firstName} {lastName}
              </p>
            </div>
            <div className="flex justify-between text-left">
              <label className=" ml-12">Phone:</label>
              <p className="text-end">{phone}</p>
            </div>
            <div className="flex justify-between text-left">
              <label className=" ml-12">Email:</label>
              <p className="text-end">{email}</p>
            </div>

            <div className="ml-12 mt-8">
              <label>Notes from owner</label>
            </div>
            <div className="ml-12 mt-2">
              <textarea
                className="text-area pl-2 pt-2 pr-2"
                placeholder="Text Area"
                value={petOwnerNote ? petOwnerNote : ""}
                disabled={true}
              />
            </div>
          </div>

          <div className="flex-1 ml-12 pl-12">
            <div className="heading">
              <h3>FUR BABY TRACKER</h3>
              <button
                type="button"
                className="activity-popup-small"
                onClick={() => setShow(true)}
              >
                EDIT TRACKER COMPONENTS
              </button>
            </div>
            <div>
              <div className="flex tracks justify-between mt-5">
                {tracker &&
                  tracker.map((single, index) => {
                    return (
                      <Single
                        setLoad={setLoad}
                        setCurrentName={setCurrentName}
                        setCurrentStatus={setCurrentStatus}
                        status={single.status ? single.status : 1}
                        load={load}
                        furBaby={current}
                        setCurrent={setCurrent}
                        setTracker={setTracker}
                        setDisabled={setDisabled}
                        title={single.title}
                        data={data}
                        index={index}
                        single={single}
                        key={index}
                      />
                    );
                  })}
                <CompleteTracker
                  setLoad={setLoad}
                  setCurrentName={setCurrentName}
                  setCurrentStatus={setCurrentStatus}
                  load={load}
                  furBaby={current}
                  setCurrent={setCurrent}
                  setTracker={setTracker}
                  setDisabled={setDisabled}
                  title={"Ready for Pick Up"}
                  data={tracker}
                />
              </div>
            </div>
            <div>
              <div className="flex tracks-comp justify-between mt-10">
                <div className="track-txt-comp">
                  <img
                    className="inline mr-3"
                    src={require("../../../assets/images/stroke-2.png")}
                    alt="pic"
                  />
                  <label className="inline">In Progress - Click once.</label>
                </div>
                <div className="track-txt-comp">
                  <img
                    className="inline mr-3"
                    src={require("../../../assets/images/fill-2.png")}
                    alt="pic"
                  />
                  <label className="inline">Complete - Click twice.</label>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <button
                className="update-btn"
                disabled={disabled}
                onClick={() => updateComponent()}
              >
                {button}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Style />
      {show && (
        <UpdateTracker
          data={tracker}
          dispatch={dispatch}
          furBaby={furBaby}
          clinic={clinic}
          setShow={setShow}
        />
      )}
    </div>
  );
};

export default SectionOne;

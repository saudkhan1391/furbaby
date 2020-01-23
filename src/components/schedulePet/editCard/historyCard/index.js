import React, { useState } from "react";
import { convertObjectToArray, standardDate } from "../../../functions";
import Style from "./style";

function History({ showForm }) {
    let { pet: { visitHistory } } = showForm;
    let [dropdown, setDropDown] = useState(null);
    let data = convertObjectToArray(visitHistory);

    return <div className="history-container">
        {
            data.length !== 0 ?
                <div>
                    {
                        data.map((item, index) => {
                            let tracker = JSON.parse(item.trackingComponent);
                            let notes = JSON.parse(item.notes);
                            let food = JSON.parse(item.food);
                            let medications = JSON.parse(item.medications);
                            return (
                                <div key={index}>
                                    <div className="date-head" onClick={() => setDropDown(index === dropdown ? null: index)}>
                                        <p>{standardDate(item.startTime).standardDate}</p>
                                        <img src={require("../../../../assets/images/bottom-chavron.png")} alt=""/>
                                    </div>
                                    {
                                        dropdown === index &&
                                            <div className="content-container">
                                                <div>
                                                    <h3>Visit Reason</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                                {
                                                    tracker.length !== 0 &&
                                                    <div>
                                                        <h3>Tracker component</h3>
                                                        {
                                                            tracker.map((single, ind) => {
                                                                return (
                                                                    <p key={ind}>{single.title}</p>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                }
                                                {
                                                    medications.length !== 0 &&
                                                    <div>
                                                        <h3>Medications</h3>
                                                        {
                                                            medications.map((single, ind) => {
                                                                return (
                                                                    <p key={ind}>{single.type}, {single.quantity}</p>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                }
                                                {
                                                    food.length !== 0 &&
                                                    <div>
                                                        <h3>Food</h3>
                                                        {
                                                            medications.map((single, ind) => {
                                                                return (
                                                                    <p key={ind}>{single.type}, {single.quantity}</p>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                }
                                                {
                                                    notes.length !== 0 &&
                                                    <div>
                                                        <h3>Notes</h3>
                                                        {
                                                            notes.map((single, ind) => {
                                                                return (
                                                                    <div>
                                                                        <div key={ind}>{single.note}</div>
                                                                        <div className="image-container">
                                                                            {
                                                                                single.photos.map((item, ind) => {
                                                                                    return <div className="note-image" key={ind} style={{backgroundImage: "url("+item.uri+")"}}/>
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                }
                                            </div>
                                    }
                                    <div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div> : <div>
                <p>No previous history found.</p>
            </div>
        }
        <Style/>
    </div>
}

export default History;
import React, {useState, useEffect}from 'react';
import Style from './style';
import axios from 'axios';
import firebase from "../../../utils/firebase";
import Cards from "react-credit-cards";
import {validateEmail} from '../../functions'
import Loader from '../../../commoncomponents/smallLoader';
import {apiPath} from '../../../config';
import PaymentHistory from '../../paymentHistory'

import CreditCardInput from "react-credit-card-input";
const SectionFour = (props) => {
    let {clinic, dispatch} = props;
    let {trackerOptin: tracker, noteOptin: note, snapshotOptin: snapshot, appointmentCompleteOptin: appointment} = clinic;
    const [trackerOptin, setTrackerOptin] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [noteOptin, setNoteOptin] = useState(false);
    const [appointmentCompleteOptin, setAppointmentCompleteOptin] = useState(false);
    const [snapshotOptin, setSnapshotOptin] = useState(false);
    const [cardNumber, setCardNumber] = useState(null);
    const [cardNumberError, setCardNumberError] = useState(null);
    const [nameOnCard, setNameOnCard] = useState(null);
    const [expirationMonth, setExpirationMonth] = useState(null);
    const [expirationYear, setExpirationYear] = useState(null);
    const [expiryDateError, setExpiryDateError] = useState(null);
    const [CVC, setCVC] = useState(null);
    const [cvcError, setCVCError] = useState(null);
    const [currentSelected, setCurrentSelected] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState(null);
    const [requesting, setRequesting] = useState(false);
    const [paymentHistory, setPaymentHistory] = useState("null");

    const saveSetting = () => {
        setRequesting(true);
        clinic.appointmentCompleteOptin = appointmentCompleteOptin;
        clinic.trackerOptin = trackerOptin;
        clinic.noteOptin = noteOptin;
        clinic.snapshotOptin = snapshotOptin;
        firebase.database().ref("/clinics").child(clinic.clinicId).set(clinic).then(res => {
            setMessage("Settings successfully updated");
            setTimeout(() => {
                setMessage("");
                setRequesting(false);
            }, 5000);
            dispatch({
                type: "UPDATE_CLINIC",
                payload: clinic
            });
        }).catch(err => {
            setRequesting(false);
            setMessage("Something went wrong. Please check you internet or try again later.");
        });
    };


    useEffect(() => {
        setTrackerOptin((tracker + "") !== "undefined" ? tracker : true);
        setNoteOptin((note + "") !== "undefined" ? note : true);
        setSnapshotOptin((snapshot + "") !== "undefined" ? snapshot : true);
        setAppointmentCompleteOptin((appointment + "") !== "undefined" ? appointment : true);
    }, [tracker, note, snapshot, appointment]);

    const resetDefaults = () => {
        setAppointmentCompleteOptin(true);
        setNoteOptin(true);
        setSnapshotOptin(true);
        setTrackerOptin(true);
    };

    const showPaymentHistory = () => {
        firebase.database().ref("/clinicMetadata/" + clinic.clinicId + "/monthlyReport").once("value").then(res => {
            let history = [];
            let obj = res.val();
            let dates = Object.keys(obj);
            dates.forEach(sing => {
                history.push({date: sing, ...obj[sing]})
            });
            setPaymentHistory([...history]);
        }).catch(err => {
            console.log("err", err);
        })
    };
    const addPayment = () => {
        if (
            (email && !validateEmail(email)) ||
            (!email || email === "") ||
            (!nameOnCard || nameOnCard === "") ||
            ((!cardNumber || cardNumber === "") && !cardNumberError) ||
            (
                ((!expirationMonth || (expirationMonth === "")) ||
                (!expirationYear || (expirationYear === "")) ) &&
                !expiryDateError
            ) ||
            ((!CVC || CVC === "") && !cvcError)
        ) {
            console.log("requestedData")
            if (!email || email === "") {
                document.getElementById("email").focus();
                document.getElementById("email").classList.add("red-border");
                document.getElementById("emailContent").innerHTML =
                    "Email is required";
                setTimeout(() => {
                    document.getElementById("email").classList.remove("red-border");
                    document.getElementById("emailContent").innerHTML = " ";
                }, 5000);
            }
            if (email && !validateEmail(email)) {
                document.getElementById("email").classList.add("red-border");
                document.getElementById("emailContent").innerHTML =
                    "Email is invalid";
                setTimeout(() => {
                    document.getElementById("email").classList.remove("red-border");
                    document.getElementById("emailContent").innerHTML = " ";
                }, 5000);
            }
            if (!nameOnCard || nameOnCard === "") {
                document.getElementById("nameOnCard").classList.add("red-border");
                document.getElementById("nameOnCardContent").innerHTML =
                    "Name is required";
                setTimeout(() => {
                    document.getElementById("nameOnCard").classList.remove("red-border");
                    document.getElementById("nameOnCardContent").innerHTML = " ";
                }, 5000);
            }

            if (
                (!cardNumber || cardNumber === "") &&
                !cardNumberError
            ) {
                document.getElementById("field-wrapper").classList.add("red-border");
                document.getElementById("creditCardContent").innerHTML =
                    "Card Number is Required";
                setTimeout(() => {
                    document.getElementById("creditCard").classList.remove("red-border");
                    document.getElementById("creditCardContent").innerHTML = " ";
                }, 5000);
            }
            if (
                (
                ((!expirationMonth || expirationMonth === "") ||
                (!expirationYear || expirationYear === "")) &&
                !expiryDateError)
            ) {
                document.getElementById("field-wrapper").classList.add("red-border");
                document.getElementById("creditCardContent").innerHTML =
                    "Expiry Date is Required";
                setTimeout(() => {
                    document.getElementById("creditCard").classList.remove("red-border");
                    document.getElementById("creditCardContent").innerHTML = " ";
                }, 5000);
            }
            if ((!CVC || CVC === "") && !cvcError) {
                document.getElementById("field-wrapper").classList.add("red-border");
                document.getElementById("creditCardContent").innerHTML =
                    "CVC is Required";
                setTimeout(() => {
                    document.getElementById("creditCard").classList.remove("red-border");
                    document.getElementById("creditCardContent").innerHTML = " ";
                }, 5000);
            }
            return;
        }
        else {
            let requestedData = {
                card: {
                    number: cardNumber,
                    exp_month: expirationMonth ? expirationMonth : "",
                    exp_year: expirationYear ? expirationYear : "",
                    cvc: CVC,
                    name: nameOnCard
                },
                email,
                clinic
            };
            setShowLoader(true);
            axios.post(apiPath + "/addPayment", requestedData).then(res => {
                setShowLoader(false);
            }).catch(err => {
                setShowLoader(false);
            })
        }
    };

    const deletePopup = () => {
        let requestedData = {
            clinic
        };
        if (window.confirm('Are you sure you wish to delete this media file?')) {
            axios.post(apiPath + "/removePayment", requestedData).then(res => {
            }).catch(err => {
            })
        }
    };

    const switchBrand = (brand) => {
        switch (brand) {
            case "MasterCard":
                return <img src={require("../../../assets/images/mastercard.jpeg")} alt=""
                            width="32" height="32"/>;
            case "American Express":
                return <img src={require("../../../assets/images/americanExpress.jpg")}
                            width="32" height="32" alt=""/>;
            case "Visa":
                return <img src={require("../../../assets/images/visa.jpg")} alt=""
                            width="32" height="32"/>;
            default:
                return <p style={{
                    orManuallyCreateNText: {
                        backgroundColor: "transparent",
                        color: "rgb(68, 68, 68)",
                        // fontFamily: ".AppleSystemUIFont",
                        fontSize: 18,
                        fontStyle: "normal",
                        fontWeight: "600",
                        textAlign: "left",
                        lineHeight: 30,
                        alignSelf: "flex-start",
                    }
                }}>{brand}</p>
        }
    };


    return (
        <div>
            <div className="container mx-auto">
                <div className="px-2 mt-10">
                    <div className="flex -mx-2">
                        <div className="w-1/2">
                            <div className="h-12">
                                <div className="flex h-12 practice-Management-Heading">
                                    <h1>PRACTICE MANAGEMENT SOFTWARE INTEGRATION</h1>
                                </div>
                                <div>
                                    <div className="connectivity-Status">
                                        <p>Connectivity Status: <span>Connected</span><br></br>
                                            Last Synced: 6/29/2019. 05:29</p>
                                    </div>
                                    <div className="flex mt-4">
                                        <div className="manually-Sync-Blue-Button">
                                            <button>MANUALLY SYNC</button>
                                        </div>
                                        <div className="configure-Connect-Gray-Button ml-4">
                                            <button>CONFIGURE & CONNECT</button>
                                        </div>
                                    </div>
                                    <div className="mt-16 manage-Automatic-Heading">
                                        <h1>MANAGE AUTOMATIC NOTIFICATION SETTINGS</h1>
                                    </div>
                                    <div className="mt-2 automatic-Text-Emails-Paragraph">
                                        <p>Send automatic text message, emails, and push notifications when:</p>
                                    </div>
                                    <div
                                        className="px-6 py-4 justify-center m-auto items-center content-center pl-0 pr-0 pb-0">
                                        <div className="flex justify-center m-auto items-center content-center ">
                                            <hr className="style2"/>
                                        </div>
                                        <div className="label pt-2">
                                            <div className="flex mr-12 check-mar">
                                                <label className="container1">
                                                    <input type="checkbox" checked={appointmentCompleteOptin}
                                                           onChange={() => setAppointmentCompleteOptin(!appointmentCompleteOptin)}/>
                                                    <span className="checkmark"/>
                                                </label>
                                                <label>Tracker Completion</label>
                                            </div>
                                            <div className="flex mr-12 mt-4 check-mar">
                                                <label className="container1">
                                                    <input type="checkbox" checked={trackerOptin}
                                                           onClick={() => setTrackerOptin(!trackerOptin)}
                                                    />
                                                    <span className="checkmark"/>
                                                </label>
                                                <label>Anytime a tracker stage is updated to move onto the next
                                                    stage</label>
                                            </div>
                                            <div className="flex mr-12 mt-4 check-mar">
                                                <label className="container1">
                                                    <input type="checkbox" checked={noteOptin}
                                                           onChange={() => setNoteOptin(!noteOptin)}
                                                    />
                                                    <span className="checkmark"/>
                                                </label>
                                                <label>Anytime a note is added</label>
                                            </div>
                                            <div className="flex mr-12 mt-4 check-mar">
                                                <label className="container1">
                                                    <input type="checkbox" checked={snapshotOptin}
                                                           onChange={() => setSnapshotOptin(!snapshotOptin)}
                                                    />
                                                    <span className="checkmark"/>
                                                </label>
                                                <label>Anytime a snapshot is added</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-4">
                                        <div className="save-change-blue-btn">
                                            <button onClick={() => saveSetting()} disabled={requesting}>SAVE CHANGES
                                            </button>
                                        </div>
                                        <div className="ml-4 reset-default-gray-btn">
                                            <button onClick={() => {
                                                resetDefaults()
                                            }}>RESET TO DEFAULT
                                            </button>
                                        </div>
                                    </div>
                                    <div className="green">
                                        {message && message}
                                    </div>

                                    <div className="cardHeight">

                                    </div>
                                </div>


                            </div>
                        </div>


                        <div className="w-1/2 px-2">
                            <div className="billing">
                                <h1>BILLING & ACCOUNT INFORMATION</h1>
                            </div>
                            {clinic && clinic.source ?
                                <div>
                                    <div className="flex  justify-between" style={{paddingTop: 40}}>
                                        <div className="flex justify-between">
                                            {switchBrand(clinic.source.brand)}
                                            &nbsp;**** &nbsp;{clinic.source.last4}
                                        </div>
                                        <div className="configure-Connect-Gray-Button">
                                            <button onClick={() => deletePopup()}>Remove</button>
                                        </div>
                                    </div>
                                </div> : showLoader ?
                                    <Loader/>
                                    :
                                    <div>
                                        <div className="flex -mx-2 mt-8">
                                            <div className="w-1/2 px-2">
                                                <div className="h-12">
                                                    <div className="flex flex-col mb-4 inputvision4">
                                                        <label className="mb-2">Email <span
                                                            style={{color: "red"}}>*</span></label>
                                                        <input className="border py-2 px-3 "
                                                               id="email"
                                                               type="text"
                                                               onFocus={() =>
                                                                   setCurrentSelected("name")
                                                               }
                                                               onBlur={() =>
                                                                   setCurrentSelected("")
                                                               }
                                                               onChange={event =>
                                                                   setEmail(event.target.value)
                                                               }
                                                        />
                                                        <p id="emailContent" className="red-Content">
                                                            {" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="flex -mx-2 mt-8">
                                            <div className="w-1/2 px-2">
                                                <div className="h-12">
                                                    <div className="flex flex-col mb-4 inputvision4">
                                                        <label className="mb-2">Name On Card <span
                                                            style={{color: "red"}}>*</span></label>
                                                        <input className="border py-2 px-3 "
                                                               id="nameOnCard"
                                                               type="text"
                                                               onFocus={() =>
                                                                   setCurrentSelected("name")
                                                               }
                                                               onBlur={() =>
                                                                   setCurrentSelected("")
                                                               }
                                                               value={nameOnCard}
                                                               onChange={event =>
                                                                   setNameOnCard(event.target.value)
                                                               }
                                                        />
                                                        <p id="nameOnCardContent" className="red-Content">
                                                            {" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="wrp">
                                            <br/>
                                            <Cards
                                                number={cardNumber ? cardNumber : ""}
                                                name={nameOnCard ? nameOnCard : ""}
                                                expiry={
                                                    (expirationMonth ? expirationMonth : "") +
                                                    (expirationYear ? expirationYear : "")
                                                }
                                                cvc={CVC}
                                                focused={currentSelected}
                                            />
                                            <br/>
                                        </div>
                                        <div className="wrp">
                                            <label className="mb-2">Card Details <span
                                                style={{color: "red"}}>*</span></label>
                                            <br />
                                            <br />
                                            <div id="creditCard">
                                                <CreditCardInput
                                                    cardCVCInputProps={{
                                                        onBlur: event =>
                                                            setCurrentSelected(""),
                                                        onFocus: () =>
                                                            setCurrentSelected("cvc"),
                                                        onChange: event => {
                                                            setCVC(event.target.value)
                                                        },
                                                        onError: event => {
                                                            setCVCError(event)
                                                        }
                                                    }}
                                                    cardExpiryInputProps={{
                                                        onBlur: event =>
                                                            setCurrentSelected(""),
                                                        onFocus: () =>
                                                            setCurrentSelected("expiry"),
                                                        onChange: event => {
                                                            setExpiryDateError(null);
                                                            setExpirationMonth(event.target.value.substring(0, 2));
                                                            setExpirationYear(event.target.value.substring(5, 7));
                                                        },
                                                        onError: event => {
                                                            setExpiryDateError(event)
                                                        }
                                                    }}
                                                    cardNumberInputProps={{
                                                        onBlur: event =>
                                                            setCurrentSelected(""),
                                                        onChange: event =>
                                                            setCardNumber(event.target.value),
                                                        onFocus: () =>
                                                            setCurrentSelected("number"),
                                                        onError: event =>
                                                            setCardNumberError(event)
                                                    }}
                                                />
                                            </div>
                                            <p id="creditCardContent" className="red-Content">
                                                {" "}
                                            </p>
                                            <br />
                                        </div>
                                        <div className="middle-btn mt-16">
                                            <div className="save-changes-blue-btn-again">
                                                <button onClick={() => {
                                                    addPayment()
                                                }}>SAVE CHANGES
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                            }
                            <div className="pdTop">
                                <div className="save-changes-blue-btn-again">
                                    <button onClick={() => showPaymentHistory()}>Show Payment History</button>
                                </div>
                            </div>
                            <div>
                                {paymentHistory && paymentHistory.length !== 0 ? <div>
                                    {paymentHistory !== "null" ?
                                        <PaymentHistory visitHistory={paymentHistory}/> : <div/>}
                                </div> : <Loader/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Style/>
        </div>
    );
}
export default SectionFour;
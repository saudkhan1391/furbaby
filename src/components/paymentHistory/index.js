import React, {useState} from "react";
import Style from './style';

function FormGroup(props) {
    let {visitHistory} = props;
    let [dropdown, setDropDown] = useState(null);
    let data = (visitHistory);
    return <div>
        <h2 className="pdd-arround" id="focus">Payment History</h2>
        {
            data.length !== 0 ?
                data.map((item, index) => {
                    return (
                        <div key={index} className="pd-btm">
                            <div onClick={() => setDropDown(index === dropdown ? null : index)}>
                                <div>
                                    <div className="background-color dflex">
                                        <div>
                                            <p style={{color: "white"}}>{item.date}</p>
                                        </div>
                                        <div className="image-align">
                                            <img width="25px"
                                                 src={dropdown === index ? require("../../assets/images/up-chavron.png") : require("../../assets/images/bottom-chavron.png")}
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                dropdown === index && (
                                    <div>
                                        <div className="pdd-arround-payment">
                                            <h3>Monthly Subscription Charges</h3>
                                            <p>{item.charged.monthlySubscriptionCharges}</p>
                                        </div>

                                        {item.charged.integrationCharges && <div className="pdd-arround-payment">
                                            <h3>Integration Charges</h3>
                                            <p>{item.charged.integrationCharges}</p>
                                        </div>}

                                        <div className="pdd-arround-payment">
                                            <h3>Total Appointment Charges</h3>
                                            <p>{item.charged.totalPraticeCharges}</p>
                                        </div>

                                        <div className="pdd-arround-payment">
                                            <h3>Payment Status</h3>
                                            <p>{item.charged.payment}</p>
                                        </div>

                                        <div className="pdd-arround-payment">
                                            <h3>Total Charged</h3>
                                            <p>{item.charged.totalCharged}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }) : <div>
                <p>No previous record found</p>
            </div>
        }
        <Style/>
    </div>
}

export default FormGroup;
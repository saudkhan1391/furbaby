import React, {useState} from "react";
import Style from './style';

function FormGroup(props) {
    let {visitHistory} = props;
    let [dropdown, setDropDown] = useState(null);
    let data = (visitHistory);
    return <div>
        <p>Payment History</p>
        {
            data.length !== 0 ?
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div onClick={() => setDropDown(index === dropdown ? null : index)}>
                                <div>
                                    <div>
                                        <div className="background-color">
                                            <p>{item.date}</p>
                                        </div>
                                        <div >
                                            <img
                                                 src={dropdown === index ? require("../../assets/images/up-chavron.png") : require("../../assets/images/bottom-chavron.png")}
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                dropdown === index && (
                                    <div>
                                        <div>
                                            <p>Monthly Subscription Charges</p>
                                            <p>{item.charged.monthlySubscriptionCharges}</p>
                                        </div>

                                        {item.charged.integrationCharges && <div>
                                            <p>Integration Charges</p>
                                            <p>{item.charged.integrationCharges}</p>
                                        </div>}

                                        <div>
                                            <p>Total Appointment Charges</p>
                                            <p>{item.charged.totalPraticeCharges}</p>
                                        </div>

                                        <div>
                                            <p>Payment Status</p>
                                            <p>{item.charged.payment}</p>
                                        </div>

                                        <div>
                                            <p>Total Charged</p>
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
import React, { useState }  from "react";
import uuid from "uuid";
import {NotificationManager} from 'react-notifications';
function UpdateMedication(props) {
    let { setModel } = props;
    let { dispatch, furBaby, medicationData, clinic, Meds } = props;
    const [type, setType] = useState(null);
    const [quantity, setQuantity] = useState(null);
    let medication = clinic.medication ? JSON.parse(clinic.medication): Meds;

    const updateContent = (event) => {
        event.preventDefault();
        let data = [...medicationData];
        if(type){
            data.push({
                id: uuid(),
                type,
                quantity,
                date: new Date()
            });
            setType(null);
            setQuantity(null);
            furBaby.medications = JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
            NotificationManager.success('New medication added', 'Medication Update');
            setModel(null)
        }
    };

    return(
        <div id="simpleModal" className="modal">
            <form onSubmit={(event) => updateContent(event)} className="modal-content">
                <div className="flex justify-end">
                    <img onClick={() => setModel(null)} src={require('../../../assets/images/close.png')} alt="pic"/>
                </div>
                <div className="food-popup-heading">
                    <h1>Medication</h1>
                </div>
                <div className="food-popup-para mt-4">
                    <p>Select the medication administered from the dropdown below. Click add activity to send the update to the pet owner.</p>
                </div>
                <div className="flex flex-col mb-2 inputvision mt-8">
                    <label className="mb-1" htmlFor="first_name">Medication</label>
                    <select className="border" onChange={event => setType(event.target.value)}>
                        <option value="" selected="">Select</option>
                        {
                            medication.map(item => {
                                return  item.show && (
                                        <option>{item.name}</option>
                                    )
                            })
                        }
                    </select>
                </div>
                <div className="flex flex-col mb-2 inputvision mt-8">
                    <label className="mb-1" htmlFor="first_name">Add Custom Medication</label>
                    <input type="text" required className="customInput border" value={type} onChange={event => setType(event.target.value)}/>
                </div>
                <div className="flex flex-col mb-2 inputvision mt-6">
                    <label className="mb-1" htmlFor="first_name">Dose Administered</label>
                    <select className="border py-2 px-3 " onChange={event => setQuantity(event.target.value)}>
                        <option value="" selected="">Select</option>
                        <option>1</option>
                        <option>1/2</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="flex justify-center mt-24">
                    <button type="submit" className="activityBtn-popup">ADD ACTIVITY</button>
                    <button type="button" className="CnclBtn-popup ml-4" onClick={()=>setModel(null)}>CANCEL</button>
                </div>
            </form>

        </div>
    )
}

export default UpdateMedication;
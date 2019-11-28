import React, { useState } from "react";
import uuid from "uuid";
import {NotificationManager} from 'react-notifications';

function UpdatePeePoop(props) {

    let { pee, dispatch, furBaby, setModel } = props;
    const [type, setType] = useState(null);

    const update = (event) => {
        event.preventDefault();
        let data = [...pee];
        if(type){
            data.push({
                id: uuid(),
                type,
                date: new Date()
            });
            setType(null);
            furBaby.pee = JSON.stringify(data);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
            setModel(false);
            NotificationManager.success('New bathroom status added', 'Bathroom Update');
        }
    };

    return(
        <div id="simpleModal" className="modal">
            <form onSubmit={event => update(event)} className="pee-content">
                <div className="flex justify-end">
                    <img onClick={()=>setModel(null)} src={require('../../../assets/images/close.png')} alt="pic"/>
                </div>
                <div className="food-popup-heading">
                    <h1>Pee &amp; Poop</h1>
                </div>
                <div className="food-popup-para mt-4">
                    <p>Select the pee or poop icon below. Click add activity to send the update to the pet owner.</p>
                </div>
                <div className="flex flex-col mb-2 inputvision mt-8">
                    <label className="mb-1" htmlFor="first_name">Pee &amp; Poop</label>
                    <select required className="border py-2 px-3" onChange={(event) => setType(event.target.value)} >
                        <option value="" selected="">Select</option>
                        <option>Pee</option>
                        <option>Poop</option>
                        <option>Pee & Poop</option>
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

export default UpdatePeePoop;
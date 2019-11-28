import React, { useState }  from "react";
import uuid from "uuid";

function UpdateMedication(props) {
    let { dispatch, furBaby, foodData, clinic, Foods, setModel } = props;
    const [type, setType] = useState(null);
    const [quantity, setQuantity] = useState(null);
    let food = clinic.food ? JSON.parse(clinic.food): Foods;

    const updateContent = (event) => {
        event.preventDefault();
        let data = [...foodData];
        if(type){
            data.push({
                id: uuid(),
                type,
                quantity,
            });
            furBaby.food = JSON.stringify(data);
            setType(null);
            setQuantity(null);
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby
            });
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
                    <h1>Food</h1>
                </div>
                <div className="food-popup-para mt-4">
                    <p>Select the food given from the dropdown below. Click add activity to send the update to the pet owner.</p>
                </div>
                <div className="flex flex-col mb-2 inputvision mt-8">
                    <label className="mb-1" htmlFor="first_name">Food</label>
                    <select className="border" onChange={event => setType(event.target.value)}>
                        <option value="" selected="">Select</option>
                        {
                            food.map(item => {
                                return  item.show && (
                                        <option>{item.name}</option>
                                    )
                            })
                        }
                    </select>
                </div>
                <div className="flex flex-col mb-2 inputvision mt-8">
                    <label className="mb-1" htmlFor="first_name">Add Custom Food</label>
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
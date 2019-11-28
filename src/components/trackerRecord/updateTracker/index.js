import React, { useState, useEffect } from "react";
import uuid from "uuid";
import {NotificationManager} from 'react-notifications';

function UpdateTracker(props) {
    let { data, dispatch, furBaby, setShow } = props;
    const [text, setText] = useState("");
    const [components, setComponents] = useState(data);
    const [tempArray, setTempArray] = useState([]);
    useEffect(() => {
        setComponents(data);
    }, [data]);

    const changeValue = (value, index) => {
        let array = [...tempArray];
        if(!value){
            array.push(index);
            setTempArray(array);
        }else{
            let temp = array.filter(single => single !== index);
            setTempArray(temp);
        }
    };

    const updateContent = () => {
        let temp = [];
        let mainData = [...data];
        if(tempArray.length !== 0 && !text){
            data.forEach((single, index) => {
                let val = tempArray.find(single => single === index);
                val = val === 0 ? true: val;
                if (!val){
                    temp.push(single);
                }

            });
        }
        if(tempArray.length === 0 && !!text){
            let arr = text.split('\n');
            arr.forEach(item => {
                if(item){
                    mainData.push({
                        id: uuid(),
                        title: item,
                        value: false
                    })
                }
            });
            temp = mainData;
        }
        if(tempArray.length !== 0 && !!text){
            data.forEach((single, index) => {
                let val = tempArray.find(single => single === index);
                val = val === 0 ? true: val;
                if(!val){
                    temp.push(single);
                }
            });
            let arr = text.split('\n');
            arr.forEach(item => {
                if(item){
                    temp.push({
                        id: uuid(),
                        title: item,
                        value: false
                    })
                }
            });
        }

        if(tempArray.length === 0 && !text){
            temp = mainData;
        }
        setTempArray([]);
        setText("");
        let final = {...furBaby};
        final.trackingComponent = JSON.stringify(temp);
        dispatch({
            type: "UPDATE_CURRENT_FURBABY",
            payload: final
        });
        NotificationManager.success('Tracker components are updated', 'Tracker Update');
        setShow(false);
    };

    const setQuantity = (value) => {
        if(text.indexOf(value) !== -1){
            window.alert("You have already added this tracker.");
            return;
        }
        if(text){
            setText(text+"\n"+value);
        }else{
            setText(value);
        }
    };

    return (
        <div id="simpleModal" className="modal">
            <form onSubmit={(event) => updateContent(event)} className="notes-content">
                <div className="flex justify-end">
                    <img onClick={()=>setShow(false)} src={require('../../../assets/images/close.png')} alt="pic"/>
                </div>
                <div className="food-popup-heading">
                    <h1>REMOVE TRACKER COMPONENT</h1>
                </div>
                <div className="flex flex-col mb-2 main-check-container mt-8">
                        {
                            data.map((item, index) => {
                                return   <div key={index} className="checkbox">
                                    <input type="checkbox" defaultChecked={true} onChange={(event) => changeValue(event.target.checked, index)}/>
                                    <span>{item.title}</span>
                                </div>
                            })
                        }
                </div>
                <div className="food-popup-heading">
                    <h1>ADD TRACKER COMPONENT </h1>
                </div>
                <div className="flex flex-col mb-2 inputvision mt-8">
                    <label className="mb-1" htmlFor="first_name">Select from Drop Down</label>
                    <select className="border py-2 px-3" value={text} onChange={event => setQuantity(event.target.value)}>
                        <option value="" selected="">Select</option>
                        {
                            components.map((item, index) => {
                                return <option key={index} value={item.title}>{item.title}</option>
                            })
                        }
                    </select>
                </div>
                <div className="flex flex-col mb-2 fotText-area mt-6">
                    <textarea rows="5" cols="80" placeholder="Text area" value={text} onChange={event => setText(event.target.value)}/>
                </div>
                <div className="flex justify-center mt-24">
                    <button type="submit" className="activityBtn-popup">UPDATE TRACKER</button>
                    <button type="button" className="CnclBtn-popup ml-4" onClick={()=>setShow(false)}>CANCEL</button>
                </div>
            </form>

        </div>
    )
}

export default UpdateTracker;
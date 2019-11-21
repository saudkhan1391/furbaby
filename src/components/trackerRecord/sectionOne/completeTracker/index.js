import React, { useEffect, useState } from "react";

function Tracker(props){
    const [value, setValue] = useState(false);
    let { title, data, setDisabled, furBaby, setCurrent , setTracker, setCurrentName } = props;
    useEffect(() => {
        let temp = true;
        data.forEach(item => {
            if(!item.value){
                temp = false;
            }
        });
        setValue(temp);
    }, [data]);

    const setCurrentVal = () => {
        if(!value){
            setDisabled(false);
            let newData = [...data];
            newData.forEach(item => {
                item.value = true;
                item.status = 3;
            });
            furBaby.trackingComponent = JSON.stringify(newData);
            setTracker(newData);
            setCurrent(furBaby);
            setCurrentName(title);
        }
    };

    const setImage = () => {
        switch(value){
            case false:
                return require("../../../../assets/images/fill-empty.png");
            case true:
                return require("../../../../assets/images/fill-green.png");
            default:
                break;
        }
    };

    return (
        <div>
            <img className="inline markers mr-6" src={setImage()} alt="pic" onClick={() => setCurrentVal()}/>
            <label className="inline track-txt">{title}</label>
        </div>
    )
}

export default Tracker;
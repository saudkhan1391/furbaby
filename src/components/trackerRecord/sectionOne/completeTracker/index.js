import React, { useEffect, useState } from "react";

function Tracker(props){
    const [value, setValue] = useState(false);
    let { title, data, setDisabled, furBaby, setCurrent , setTracker, setCurrentName } = props;
    useEffect(() => {
        setValue(furBaby.appointmentStatus === "Complete");
    }, [data]);


    const setCurrentVal = () => {
        setDisabled(false);
        let newData = [...data];
        newData.forEach(item => {
            item.value = true;
            item.status = 3;
        });
        furBaby.appointmentStatus = furBaby.appointmentStatus === "In Hospital" ? "Complete" : "In Hospital";
        furBaby.show = "true";
        furBaby.trackingComponent = JSON.stringify(newData);
        setTracker(newData);
        setCurrent(furBaby);
        setCurrentName(title);
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
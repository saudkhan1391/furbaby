import React, { useEffect, useState } from "react";

function Tracker(props){
    const [value, setValue] = useState(1);
    let { title, data, index, setDisabled, furBaby, setCurrent , setTracker, status, setCurrentStatus, setCurrentName } = props;

    useEffect(() => {
        setValue(status);
    }, [status]);

    const setCurrentVal = () => {
        setDisabled(false);
        let newData = [...data];
        if(value < 3){
            if((value+1) === 2){
                newData.forEach(item => {
                    if(item.status === 2){
                        item.status = 1;
                    }
                });
                setCurrentStatus("In Progress");
            }
            setValue(value+1);
            newData[index].status = (value+1);
        }
        else{
            setValue(1);
            newData[index].status = 1;
            setCurrentStatus(null);
            setCurrentName(null);
        }
        if(value === 2){
            setCurrentStatus("Completed");
            newData[index].value = true;
        }
        else {
            newData[index].value = false;
        }
        furBaby.trackingComponent = JSON.stringify(newData);
        setTracker(newData);
        setCurrent(furBaby);
        setCurrentName(title);
    };


    const setImage = () => {
        switch(value){
            case 1:
                return require("../../../../assets/images/fill-empty.png");
            case 2:
                return require("../../../../assets/images/fill-blue.png");
            case 3:
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
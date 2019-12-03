import React, {useEffect, useState} from 'react';
import uuid from "uuid";
import { NotificationManager} from 'react-notifications';
import firebase from "../../../utils/firebase";
const Schedule = (props) => {
    let {foodData, dispatch, clinic} = props;
    const [moreFoodType, setMoreFoodType] = useState(moreFoodType?moreFoodType:"");
    const [foodType, setFoodType] = useState("Canine");
    const [newFood, setNewFood] = useState(null);
    const [allFood, setAllFood] = useState(foodData);
    const [allFoodBackup, setAllFoodBackup] = useState(foodData);
    const [food, setFood] = useState([]);
    const [button, setButton] = useState("SAVE CHANGES");
    useEffect(() => {
        setAllFood(foodData);
        if (!moreFoodType) {
            setFood([...allFood])
        } else {
            setFood(allFood.filter(sin => sin.type === moreFoodType))
        }
    }, [foodData]);

    const addFood = () => {
        let newClinic = {...clinic};
        let tempFood = [];
        if (newFood) {
            let arr = newFood.split('\n');
            arr.forEach(item => {
                if (item) {
                    tempFood.push({
                        name: item,
                        show: true,
                        type: foodType,
                        id: uuid()
                    })
                }
                let finalFoods = [...tempFood, ...allFood];
                newClinic.medication = JSON.stringify(finalFoods);
                let main = {...newClinic};
                delete main.clinicId;
                setButton("SAVING...");
                firebase.database().ref("/clinics").child(newClinic.clinicId).set(main).then(res => {
                    // showMessage({
                    //     message: "Food successfully updated",
                    //     type: "danger",
                    //     backgroundColor: "#28a745",
                    //     color: "white",
                    //     icon: "info"
                    // });
                    dispatch({
                        type: "UPDATE_CLINIC",
                        payload: newClinic
                    });
                    NotificationManager.success('Medication successfully updated.', 'Medication Update.');
                    setButton("SAVED");
                    setNewFood(null);
                    setTimeout(() => {
                        setButton("SAVE CHANGES");
                    }, 4000);
                }).catch(err => {
                    // showMessage({
                    //     message: "Something went wrong. Please check you internet or try again later.",
                    //     type: "danger",
                    //     backgroundColor: "red",
                    //     color: "white",
                    //     icon: "info"
                    // });
                    NotificationManager.error('Something went wrong. Please check you internet or try again later.', 'Medication Update.');
                });
            })
        } else {
            tempFood = [...allFood];
            newClinic.medication = JSON.stringify(tempFood);
            let main = {...newClinic};
            delete main.clinicId;
            setButton("SAVING...");
            firebase.database().ref("/clinics").child(newClinic.clinicId).set(main).then(res => {
                // showMessage({
                //     message: "Food successfully updated",
                //     type: "danger",
                //     backgroundColor: "#28a745",
                //     color: "white",
                //     icon: "info"
                // });
                dispatch({
                    type: "UPDATE_CLINIC",
                    payload: newClinic
                })
                setButton("SAVED");
                setNewFood(null);
                NotificationManager.success('Medication successfully updated.', 'Medication Update.');
                setTimeout(() => {
                    setButton("SAVE CHANGES");
                }, 4000);
            }).catch(err => {
                setButton("SAVE CHANGES");
                // showMessage({
                //     message: "Something went wrong. Please check you internet or try again later.",
                //     type: "danger",
                //     backgroundColor: "red",
                //     color: "white",
                //     icon: "info"
                // });
                NotificationManager.success('Something went wrong. Please check your internet or try again later.', 'Medication Update.');
            });
        }
    };


    const setCurrFoodShowStatus = (id, value) => {
        let newClinic = {...clinic};
        let foo = [...allFood];
        foo.forEach(item => {
            if (item.id === id) {
                item.show = value;
            }
        });
        newClinic.medication = JSON.stringify(foo);
        dispatch({
            type: "UPDATE_CLINIC",
            payload: newClinic
        })
        setAllFood(foo);
    };

    const deSelectAll = () => {
        let newClinic = {...clinic};
        let foo = [...food];
        let allFoo = [...allFood];
        allFoo.forEach(item => {
            if (foo.find(sin => sin.id === item.id))
                item.show = false;
        });
        setAllFood(allFoo);
        newClinic.medication = JSON.stringify(allFoo);
        dispatch({
            type: "UPDATE_CLINIC",
            payload: newClinic
        })
    };

    const setCurrentTypeFood = (value) => {
        if (value === moreFoodType) {
            setFood([...allFood]);
            setMoreFoodType("");
        }
        else {
            setFood([...allFood.filter(sin => sin.type === value)])
            setMoreFoodType(value);
        }
    };

    const selectDefault = () => {
        let newClinic = {...clinic};
        let allFoo = [...allFoodBackup];
        setAllFood(allFoo);
        setFood(allFoo.filter(sin => sin.type === moreFoodType));
        newClinic.medication = JSON.stringify(allFoo);
        dispatch({
            type: "UPDATE_CLINIC",
            payload: newClinic
        })
    };

    return (<div className="customFood">
            <div className="container mx-auto top1">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                    <div className="mainDd flex justify-between mt-12">
                        <div className="medicationHeading2">
                            <h1>CUSTOMIZE PET MEDICATION DROPDOWNS</h1>
                        </div>
                        <div className="flex mr-4">
                            <div>
                                <button className="deselectbtn" onClick={() => deSelectAll()}>DESELECT ALL</button>
                            </div>
                            <div>
                                <button className="defaultbtn ml-4" onClick={() => selectDefault()}>RESET TO DEFAULTS
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 optionspara">
                        <p>All selected options will display in the pet medication dropdown</p>
                    </div>
                    <div className="subFd flex mt-8">
                        <div className="showing">
                            <p>Showing medication options for:</p>
                        </div>

                        <div className="flex ml-8 label">
                            <div className="flex mr-12 check-mar">
                                <label className="container1">
                                    <input type="checkbox"
                                           checked={moreFoodType === "Canine"}
                                           onChange={() => setCurrentTypeFood("Canine")}/>
                                    <span className="checkmark"/>
                                </label>
                                <label>Canine</label>
                            </div>
                            <div className="flex mr-12 check-mar">
                                <label className="container1">
                                    <input type="checkbox"
                                           checked={moreFoodType === "Feline"}
                                           onChange={() => setCurrentTypeFood("Feline")}/>
                                    <span className="checkmark"/>
                                </label>
                                <label>Feline</label>
                            </div>
                            <div className="flex mr-12 check-mar">
                                <label className="container1">
                                    <input type="checkbox"
                                           onChange={() => setCurrentTypeFood("Canine, Feline")}
                                           checked={moreFoodType === "Canine, Feline"}/>
                                    <span className="checkmark"/>
                                </label>
                                <label>Canine & Feline</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto top2">
                <div className="flex mb-4">
                    <div className="w-full mt-8 forBg-clr">
                        <div className="pl-12 flex-wrap flex">
                            {food && food.map((item) => {
                                return (
                                    <div key={item.id} className="flex mr-12 mt-4 check-mar">
                                        <label className="container1">
                                            <input type="checkbox" checked={item.show}
                                                   onChange={() => setCurrFoodShowStatus(item.id, !item.show)}/>
                                            <span className="checkmark"/>
                                        </label>
                                        <label>{item.name}</label>
                                    </div>)
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto top1">
                <div className="flex mb-4">
                    <div className="w-full">
                        <div className="customMedication">
                            <h1>
                                ADD CUSTOM MEDICATION
                            </h1>
                        </div>
                        <div className="multiplepara mt-4">
                            <p>
                                ADD CUSTOM MEDICATION
                            </p>
                            <select className="border py-2 px-3" value={foodType}
                                    onChange={event => setFoodType(event.target.value)} type="text">
                                <option value="Canine">Canine</option>
                                <option value="Feline">Feline</option>
                                <option value="Canine, Feline">Canine & Feline</option>
                            </select>
                        </div>

                        <div className="multiplepara mt-4">
                            <p>To add multiple seperate by a line break</p>
                        </div>
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="w-fullh-12">
                        <div className="fotText-area"><textarea value={newFood ? newFood : ""} onChange={(event) => {
                            setNewFood(event.target.value);
                        }}
                                                                rows="5" cols="180"/></div>
                    </div>
                </div>
                <div className="savebtnText h-16">
                    <button onClick={() => addFood()} disabled={button === "SAVING..."}>{button}</button>
                </div>
            </div>
        </div>
    );
};
export default Schedule;
import React, { useState, useEffect } from "react";
function UpdateNotes(props) {

    let { staffNotes, dispatch, furBaby, setModel } = props;
    const [content, setContent] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setContent(staffNotes);
    }, [staffNotes]);


    const update = (event) => {
        event.preventDefault();
        if(content){
            setContent(null);
            setShow(false);
            furBaby.staffNotes = content;
            dispatch({
                type: "UPDATE_CURRENT_FURBABY",
                payload: furBaby,
                message: "Note successfully updated."
            });
            setModel(null);
        }else{
            setShow(true);
        }
    };

    return (
        <div id="simpleModal" className="modal">
            <form onSubmit={(event) => update(event)} className="notes-content">
                <div className="flex justify-end">
                    <img onClick={()=>setModel(null)} src={require('../../../assets/images/close.png')} alt="pic"/>
                </div>
                <div className="food-popup-heading">
                    <h1>Staff only notes</h1>
                </div>
                <div className="food-popup-para mt-4">
                    <p>These notes are only for staff members.</p>
                </div>
                <div className="flex flex-col mb-2 fotText-area mt-6">
                    <textarea rows="5" cols="80" placeholder="Text area" value={content ? content : ""} onChange={event => setContent(event.target.value)}/>
                </div>
                <div className="flex justify-center mt-24">
                    <button type="submit" className="activityBtn-popup">ADD ACTIVITY</button>
                    <button type="button" className="CnclBtn-popup ml-4" onClick={()=>setModel(null)}>CANCEL</button>
                </div>
            </form>

        </div>
    )
}

export default UpdateNotes;
import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = () =>{
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch, loaded, appointments, clinic, loadedDates, loadedSchedule, clinicId}) => (
                    <Component clinicId={clinicId} loaded={loaded} dispatch={dispatch} id={id} clinic={clinic} appointmentsLoaded={loadedSchedule} loadedDates={loadedDates} appointments={appointments}/>
                )
            }
        </FurbabyConsumer>
    )
};

export default index
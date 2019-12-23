import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = () =>{
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch, loaded, appointments, clinic, loadedDates}) => (
                    <Component loaded={loaded} dispatch={dispatch} id={id} clinic={clinic} loadedDates={loadedDates} appointments={appointments}/>
                )
            }
        </FurbabyConsumer>
    )
};

export default index
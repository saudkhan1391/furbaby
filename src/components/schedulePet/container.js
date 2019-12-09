import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = () =>{
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch, loaded, appointments, clinic}) => (
                    <Component loaded={loaded} dispatch={dispatch} id={id} appointments={appointments}/>
                )
            }
        </FurbabyConsumer>
    )
};

export default index
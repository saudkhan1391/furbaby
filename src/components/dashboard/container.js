import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = (props) =>{
    return(
        <FurbabyConsumer>
            {
                ({dispatch, loaded, appointments, appointmentsLoaded}) => {
                    return <Component loaded={loaded} dispatch={dispatch} appointments={appointments} appointmentsLoaded={appointmentsLoaded}/>
                }
            }
        </FurbabyConsumer>
    )
};

export default index
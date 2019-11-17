import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = (props) =>{
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch, loaded, appointments}) => {
                    let final = appointments.filter(item => (item.appointmentStatus === "In Hospital" | !!item.show));
                    return <Component loaded={loaded} dispatch={dispatch} appointments={final}/>
                }
            }
        </FurbabyConsumer>
    )
};

export default index
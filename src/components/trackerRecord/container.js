import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
import { withRouter } from "react-router-dom";
const index = ({ match: {params: {id: mainId}} }) =>{
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch, appointments, clinic}) => {
                    const current = appointments.find(item => item.appointmentId === mainId);
                    return <Component id={id} dispatch={dispatch} current={current} clinic={clinic}/>
                }
            }
        </FurbabyConsumer>
    )
};

export default withRouter(index);
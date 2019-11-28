import React from "react";
import Component from "./index";
import {FurbabyConsumer} from '../../store';
import {withRouter} from "react-router-dom"
const index = () => {
    return (
        <FurbabyConsumer>
            {
                ({id, dispatch, clinic, clinicId, appointments}) => {
                    return <Component id={id} dispatch={dispatch} appointments={appointments} clinic={clinic} clinicId={clinicId}/>
                }
            }
        </FurbabyConsumer>
    )
};

export default withRouter(index);
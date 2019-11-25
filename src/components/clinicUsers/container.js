import React from "react";
import Component from "./index";
import {FurbabyConsumer} from '../../store';
import {withRouter} from "react-router-dom"
const index = () => {
    return (
        <FurbabyConsumer>
            {
                ({clinicId, dispatch, users}) => {
                    return <Component dispatch={dispatch} clinicId={clinicId} users={users}/>
                }
            }
        </FurbabyConsumer>
    )
};

export default withRouter(index);
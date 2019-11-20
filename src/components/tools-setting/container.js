import React from "react";
import Component from "./index";
import {FurbabyConsumer} from '../../store';
import {withRouter} from "react-router-dom"
const index = () => {
    return (
        <FurbabyConsumer>
            {
                ({dispatch, clinic}) => {
                    return <Component dispatch={dispatch} clinic={clinic}/>
                }
            }
        </FurbabyConsumer>
    )
};

export default withRouter(index);
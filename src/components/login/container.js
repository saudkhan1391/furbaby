import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = () =>{
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch}) => (
                    <Component id={id} dispatch={dispatch}/>
                )
            }
        </FurbabyConsumer>
    )
};

export default index
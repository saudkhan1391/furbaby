import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = (props) =>{
    return(
        <FurbabyConsumer>
            {
                ({dispatch, loaded, appointments}) => {
                    return <Component loaded={loaded} dispatch={dispatch} appointments={appointments}/>
                }
            }
        </FurbabyConsumer>
    )
};

export default index
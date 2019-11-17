import React from "react";
import Component from "./Routes";
import { FurbabyConsumer } from '../store';
const index = () =>{
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch, loaded}) => (
                    <Component loaded={loaded} dispatch={dispatch}/>
                )
            }
        </FurbabyConsumer>
    )
};

export default index
import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = (props) =>{
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
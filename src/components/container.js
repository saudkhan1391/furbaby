import React from "react";
import Component from "./Routes";
import { FurbabyConsumer } from '../store';
const index = () =>{
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch, loaded, clinicId}) => (
                    <Component loaded={loaded} dispatch={dispatch} id={id} clinicId={clinicId}/>
                )
            }
        </FurbabyConsumer>
    )
};

export default index
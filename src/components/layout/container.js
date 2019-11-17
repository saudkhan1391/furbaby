import React from "react";
import Component from "./index";
import { FurbabyConsumer } from '../../store';
const index = (props) =>{
    let { children } = props;
    return(
        <FurbabyConsumer>
            {
                ({id, dispatch, userDetails}) => (
                    <Component id={id} dispatch={dispatch} children={children}/>
                )
            }
        </FurbabyConsumer>
    )
};

export default index
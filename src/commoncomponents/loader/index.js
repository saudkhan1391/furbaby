import React from "react";

function Loader({ backgroundColor, text }) {
    return (
        <div className="loaderContainer flex flex-col" style={ backgroundColor && {backgroundColor}}>
            <img
                className="loader"
                src={require("../../assets/images/loader.gif")} alt=""/>
            {
                text &&
                <p>{text}</p>
            }
        </div>
    )
}

export default Loader;
import React from "react";

function Loader({ backgroundColor }) {
    return (
        <div className="loaderContainer" style={ backgroundColor && {backgroundColor}}>
            <img
                className="loader"
                src={require("../../assets/images/loader.gif")} alt=""/>
        </div>
    )
}

export default Loader;
import React from "react";

function showCount(props) {
    let { value, all, standardDate } = props;
    let {date} = value;

    return all && <div className="calendar-item">
        {
            !!all[standardDate(date).standardDate] &&
            <p>{all[standardDate(date).standardDate]}</p>
        }
    </div>
}

export default showCount;
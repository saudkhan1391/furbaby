import React, { useState, useEffect } from "react";
import WorkerSetup from "../../../../utils/workerSetup";
import worker from "../../../../utils/countAppointmentsByDates";

function showCount(props) {
    let workers = new WorkerSetup(worker);
    let { appointments, value } = props;
    let {date} = value;
    workers.postMessage({date, appointments});
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        workers.addEventListener('message', e => {
            setQuantity(e.data);
        });
    }, []);

    return <div className="calendar-item">
        {
            !!quantity &&
            <p>{quantity}</p>
        }
    </div>
}

export default showCount;
import fun from "../jsons/defaultTracker.json";

export const standardDate = dat => {
    try {
        let issueResolver = dat.split("-");
        if (issueResolver[1] === "01" && issueResolver[2] === "01") {
            dat = issueResolver[0] + "-01-02";
        }
    } catch (e) {

    }
    const date = new Date(dat);
    const newDate = new Date(date);
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const daysHalf = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const monthsHalf = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let time = formatAMPM(newDate);
    let hours12 = newDate.toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        hour12: true
    });
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let dayName = days[newDate.getDay()];
    let dayNameHalf = daysHalf[newDate.getDay()];
    let dateNumber = ("0" + newDate.getDate()).slice(-2);
    let monthName = months[newDate.getMonth()];
    let monthNameHalf = monthsHalf[newDate.getMonth()];
    let monthNumber = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let fullYear = newDate.getFullYear();
    let standardDate = monthNumber + "-" + dateNumber + "-" + fullYear;
    return {
        standardDate: standardDate,
        time: time,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        hours12: hours12,
        dayName: dayName,
        dateNumber: dateNumber,
        monthName: monthName,
        monthNameHalf: monthNameHalf,
        monthNumber: monthNumber,
        fullYear: fullYear + "",
        dayNameHalf: dayNameHalf
    };
};

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let beautifiedTime = hours + ":" + minutes + " " + ampm;
    return beautifiedTime;
}

export const restructorData = (data, len) => {
    let i = 0,
        size = 0;
    let newData = [];
    let main = [];
    while (i <= data.length) {
        if (size < len) {
            if (data[i] !== undefined) main.push(data[i]);
            size++;
            i++;
        } else {
            size = 0;
            newData.push(main);
            main = [];
        }
    }
    if (main.length !== 0) {
        newData.push(main);
    }
    return newData;
};

export const imageExists = (url, callback) => {
    let img = new Image();
    img.onload = () => {
        callback(true)
    };
    img.onerror = callback(false);
    img.src = url;
};

export const validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const defaultTracker = () => {
    let main = [];
    fun.forEach(item => {
        let temp = {
            name: "",
            trackers: []
        };
        item.forEach((main, index) => {
            if (main !== "") {
                if (index === 0) {
                    temp.name = main;
                } else {
                    temp.trackers.push({
                        "id": index,
                        "title": main,
                        "value": false,
                        "status": 1
                    });
                }
            }
        });
        main.push(temp);
    });
    return main;
};

export const reForm = (date) => {
    date = date.split("-");
    return date[2] + "-" + date[0] + "-" + date[1] + "T08:00:00.000Z";
};

export const convertObjectToArray = (main) => {
    let temp = [];
    if (main !== "[]") {
        for (let key in main) {
            if (main.hasOwnProperty(key)) {
                temp.push(main[key]);
            }
        }
    }

    return temp;
};
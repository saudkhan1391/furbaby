export default () => {
    self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
        if(!e)return;
        const dates = (date) => {
            const newDate = new Date(date);
            let monthNumber = ("0" + (newDate.getMonth() + 1)).slice(-2);
            let fullYear = newDate.getFullYear();
            let dateNumber = ("0" + newDate.getDate()).slice(-2);
            return  (monthNumber + "-" + dateNumber + "-" + fullYear);
        };
        let { appointments, date } = e.data;
        let data = appointments.filter(item => dates(item.startTime) === dates(date));
        self.postMessage(data.length);
    })
}


import React,{useState} from 'react';
import Style from './style';
import Calendar from 'react-calendar';
import { standardDate } from "../../functions";
import Card from "../card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};
const SectionTwo =(props)=>{
    const { appointments, dispatch } = props;
    const [showForm, setForm] = useState(null);
    const [addManually, setManually] = useState(false);
    const [date , setMainDate] = useState(new Date());
    const [show , setShow] = useState(true);
    const [showHistory , setShowHistory] = useState(false);
    const [schedule, setSchedule] = useState(false);
    const [showEdit , setShowEdit] = useState(false);

    const collectNumberOfAppointments = (date) => {
        let data = appointments.filter(item => standardDate(item.startTime).standardDate === standardDate(date).standardDate);
        return data.length;
    };

    const setMain = (event) => {
        setMainDate(event);
    };

    let furBabies = appointments.filter(item => standardDate(item.startTime).standardDate === standardDate(date).standardDate);



    return(
        <div>
            <div className="px-2 mt-10">
                <div className="flex -mx-2">
                    <div className="w-1/2 px-2">
                        <div className="h-12 ml-12">
                            <div className="calendar-div">
                                <Calendar
                                    value={date && date}
                                    tileClassName="single-tile"
                                    onChange={event => setMain(event)}
                                    tileContent={(value) => {
                                        let {date} = value;
                                        let main = collectNumberOfAppointments(date);
                                        return <div className="calendar-item">
                                            {
                                                !!main &&
                                                <p>{main}</p>
                                            }
                                        </div>
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 px-2">
                        <div className="px-2">
                            <div className="">
                                <div className=" mb-4 carousel-cont">
                                    <Carousel responsive={responsive}>
                                        {
                                            furBabies.length !== 0 && furBabies.map((item, index) => {
                                                return <Card key={index} item={item} />
                                            })

                                        }
                                    </Carousel>
                                </div>
                            </div>

                            <div className="px-2">
                                <div className="flex -mx-2 mt-8 ml-10">
                                    <div className="w-1/2 px-2">
                                        <div className="h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Visit Reason</label>
                                                <input className="border py-2 px-3 " type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <div className=" h-12">
                                            <div className="flex flex-col mb-4 inputvision">
                                                <label className="mb-2" htmlFor="first_name">Schedule Date</label>
                                                <input className="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex mb-4 mt-5 ml-12 allButtons">
                                    <div className="w-1/4 h-12">
                                        <div>
                                            <button className="rmvBtn">REMOVE FROM SCHEDULE</button>
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-12">
                                        <div>
                                            <button className="rmvBtn">VIEW PATIENT RECORD</button>
                                        </div>
                                    </div>
                                    <div className="flex w-1/4 h-12">
                                        <div className="saveButton">
                                            <button className="saveBtn">SAVE CHANGES</button>
                                        </div>
                                        <div className="w-1/4 h-12">
                                            <div className="cancelButton">
                                                <button className="cancelBtn">CANCEL</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Style/>
        </div>
    );
}
export default SectionTwo;
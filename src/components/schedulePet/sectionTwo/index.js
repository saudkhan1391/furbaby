import React,{useState, useEffect} from 'react';
import Style from './style';
import Calendar from 'react-calendar';
import { standardDate } from "../../functions";
import Card from "../card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EditForm from "../editCard";
import ShowCount from "./showCount";
import axios from "axios";
import { apiPath } from "../../../config";
import Loader from "../../../commoncomponents/loader";

const SectionTwo = (props) => {
    const { appointments, dispatch, loadedDates, clinic, appointmentsLoaded, clinicId } = props;
    const [showForm, setForm] = useState(null);
    const [date , setMainDate] = useState(new Date());
    const [schedule, setSchedule] = useState(false);
    const [show, showLoader] = useState(false);
    const [all, setAll] = useState(null);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };
    useEffect(() => {
        let temp = {};
        setAll(null);
        appointments.forEach(item => {
            temp[standardDate(item.startTime).standardDate] = temp[standardDate(item.startTime).standardDate] ? (temp[standardDate(item.startTime).standardDate] + 1): 1;
        });
        setAll(temp);
    }, [appointments]);

    const setMain = (event) => {
        setMainDate(event);
    };

    let furBabies = appointments.filter(item => standardDate(item.startTime).standardDate === standardDate(date).standardDate);


    const onDateChanged = (date) => {
        let final = standardDate(date).fullYear+"-"+standardDate(date).monthNumber;
        let temp = loadedDates.find(item => item === final);
        let appointmentsTemp = [...appointments];
        let loadedDatesTemp = [...loadedDates];
        if(!temp){
            showLoader(true);
            axios.get(apiPath+"/getClinicAppointmentsData?clinicId="+clinicId+"&date="+final).then(res => {
                let main = res.data.data.appointments;
                appointmentsTemp = [...appointmentsTemp, ...main];
                dispatch({
                    type: "SET_APPOINTMENTS",
                    payload: appointmentsTemp,
                    diff: "monthly"
                });
                loadedDatesTemp.push(final);
                dispatch({
                    type: "SET_LOADED_DATES",
                    payload: loadedDatesTemp
                });
                showLoader(false);
            })
        }

    };

    return appointmentsLoaded ? (
        <div>
            <div className="px-2 mt-10 sec1">
                <div className="flex res-d -mx-2">
                    <div className="w-1/2 px-2">
                        <div className="h-12 ml-12 mL0">
                            <div className="calendar-div">
                                {
                                    show &&
                                    <Loader backgroundColor="#ffffffc9"/>
                                }
                                <Calendar
                                    value={date && date}
                                    onClickMonth={event => onDateChanged(event)}
                                    onClickYear={event => onDateChanged(event)}
                                    onActiveDateChange={event => onDateChanged(event.activeStartDate)}
                                    tileClassName="single-tile"
                                    onChange={event => {setMain(event); setForm(null)}}
                                    tileContent={(value) => {
                                        return <ShowCount all={all} standardDate={standardDate} value={value} appointments={appointments} />
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 px-2 cardForm">
                        <div className="px-2">
                            <div className="">
                                <div className="carousel-container mb-4 carousel-cont">
                                    <Carousel responsive={responsive}>
                                        {
                                            furBabies.length !== 0 && furBabies.map((item, index) => {
                                                return <Card setSchedule={setSchedule} setForm={setForm} key={index} index={index} item={item} />
                                            })
                                        }
                                    </Carousel>
                                </div>
                            </div>
                            {
                                showForm &&
                                <EditForm setSchedule={setSchedule} clinic={clinic} schedule={schedule} setForm={setForm} showForm={showForm} dispatch={dispatch}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Style/>
        </div>
    ): <div className="relative ml-12 mx-auto h-64">
        <Loader text="Please wait while the records load"/>
    </div>
};
export default SectionTwo;
import React from 'react';
import Style from './style';
import { Link } from "react-router-dom";
import { standardDate } from "../../functions";

const SectionOne=()=>{
    let date = standardDate(new Date());
    return(
        <div>
            <div className="inProgFur flex mb-4 mt-10">
                <div className="flex w-1/2 ml-12 ">
                    <Link to="/schedule">
                        <button className="btn checkFur">CHECK-IN A SCHEDULED FUR BABY</button>
                    </Link>
                </div>
                <div className="w-1/2 h-12 ml-0 buttonBlue">
                    <h1 className="january">{date.dayNameHalf}, {date.monthName} {date.dateNumber}, {date.fullYear}</h1>
                </div>
            </div>
            <div className=" flex mb-4 mt-10">
                <div className="flex w-1/2 h-12 ml-12 headingSchedule">
                    <h1>IN PROGRESS</h1>
                </div>
                {/*<div className="w-1/2 h-12 ml-0 buttonBlue">*/}
                    {/*<button>SEND GLOBAL MESSAGE</button>*/}
                {/*</div>*/}
            </div>
            <div className="ml-12 forline inp-forline"/>
            <Style/>
        </div>

    );
}
export default SectionOne;
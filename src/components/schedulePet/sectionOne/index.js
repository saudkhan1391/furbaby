import React from 'react';
import Style from './style';
import { standardDate } from "../../functions";
const SectionOne=()=>{
    let date = standardDate(new Date());
    return(
        <div className="cal-div">
       <div className=" flex mb-4 mt-10 mb">
            <div className="flex w-1/2 h-12 ml-12 headingSchedule f-d-c">
                <h1>FUR BABIES SCHEDULED FOR</h1>
                <div className="ml-6 mt-2 date">
                    <p>{date.dayNameHalf}, {date.monthName} {date.dateNumber}, {date.fullYear}</p>
                </div>
            </div>
            </div>
            <hr className="style1"/>
            <Style/>
        </div>
        
    );
}
export default SectionOne;
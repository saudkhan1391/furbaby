import React from 'react';
import Style from './style';
const SectionOne=()=>{
    return(
        <div>
          
           <div className=" flex mb-4 mt-10">
            <div className="flex w-1/2 ml-12 ">
                
                <button className="btn">CHECK-IN A SCHEDULED FUR BABY</button>
                
          
            </div>
            
            
          

            <div className="w-1/2 h-12 ml-0 buttonBlue">
                <h1 className="january">Today, January 15, 2019</h1>
            </div>
            
            </div>

            <div className=" flex mb-4 mt-10">
            <div className="flex w-1/2 h-12 ml-12 headingSchedule">
                <h1>INPROGRESS</h1>
            </div>
            
            
          

            <div className="w-1/2 h-12 ml-0 buttonBlue">
                <button>SEND GLOBAL MESSAGE</button>
            </div>
            
            </div>
            <div className="ml-12 forline"></div>

            <Style/>
        </div>
        
    );
}
export default SectionOne;
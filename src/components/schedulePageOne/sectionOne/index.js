import React from 'react';
import Style from './style';
const SectionOne=()=>{
    return(
        <div>
              
            
            <div className=" flex mb-4 mt-10 ">
            <div className="flex w-1/2 h-12 ml-12 headingSchedule">
                <h1>FUR BABIES SCHEDULED FOR</h1>
                
                <div className="ml-6 mt-2 date">
                <p>TODAY, January 15, 2019</p>
                </div>
            </div>
            
            
          

            <div className="w-1/2 h-12 ml-0 buttonBlue">
                <button>ADD FUR BABY TO SCHEDULE : JANUARY 15, 2019</button>
            </div>
            
            </div>
            <div className="ml-12 forline"/>
            
            <Style/>
        </div>
        
    );
}
export default SectionOne;
import React from 'react';
import Style from './style';
const SectionOne=()=>{
    return(
        <div>
              
            
            <div class=" flex mb-4 mt-10">
            <div class="flex w-1/2 h-12 ml-12 headingSchedule">
                <h1>FUR BABIES SCHEDULED FOR</h1>
                
                <div class="ml-6 mt-2 date">
                <p>TODAY, January 15, 2019</p>
                </div>
            </div>
            
            
          

            <div class="w-1/2 h-12 ml-0 buttonBlue">
                <button>ADD FUR BABY TO SCHEDULE : JANUARY 15, 2019</button>
            </div>
            
            </div>
            <div class="ml-12 forline"></div>
            
            <Style/>
        </div>
        
    );
}
export default SectionOne;
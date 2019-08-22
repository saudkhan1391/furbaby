import React from 'react';
import Style from './style';
const SectionOne=()=>{
    return(
        <div>
          
           <div class=" flex mb-4 mt-10">
            <div class="flex w-1/2 ml-12 ">
                
                <button class="btn">CHECK-IN A SCHEDULED FUR BABY</button>
                
          
            </div>
            
            
          

            <div class="w-1/2 h-12 ml-0 buttonBlue">
                <h1 class="january">Today, January 15, 2019</h1>
            </div>
            
            </div>

            <div class=" flex mb-4 mt-10">
            <div class="flex w-1/2 h-12 ml-12 headingSchedule">
                <h1>INPROGRESS</h1>
            </div>
            
            
          

            <div class="w-1/2 h-12 ml-0 buttonBlue">
                <button>SEND GLOBAL MESSAGE</button>
            </div>
            
            </div>
            <div class="ml-12 forline"></div>

            <Style/>
        </div>
        
    );
}
export default SectionOne;
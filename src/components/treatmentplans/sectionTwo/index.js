import React from 'react';
import Style from './style';
const SectionTwo =()=>{
    return(
        <div>
           <div className="container mx-auto">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                <div className="flex justify-between mt-12">
                <div className="medicationHeading2">
                    <h1>SELECT TREATMENT PLAN TO VIEW OR CUSTOMIZE</h1>
                </div>
                <div className="flex mr-4">
                    <div>
                        <button className="deselectbtn">DESELECT ALL</button>
                    </div>
                    <div>
                        <button className="defaultbtn ml-4">RESET TO DEFAULTS</button>
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
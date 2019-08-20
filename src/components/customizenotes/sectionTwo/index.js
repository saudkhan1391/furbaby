import React from 'react';
import Style from './style';
const SectionTwo =()=>{
    return(
        <div>
           <div class="container mx-auto">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                <div class="flex justify-between mt-12">
                <div class="medicationHeading2">
                    <h1>SELECT NOTES TO VIEW OR EDIT</h1>
                </div>
                <div class="flex mr-4">
                    <div>
                        <button class="deselectbtn">DESELECT ALL</button>
                    </div>
                    <div>
                        <button class="defaultbtn ml-4">RESET TO DEFAULTS</button>
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
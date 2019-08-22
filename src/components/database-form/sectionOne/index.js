import React from 'react';
import Style from './style';
const SectionOne=()=>{
    return(
        <div>
           <div class="container mx-auto">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                <div class="flex justify-between mt-12">
                    <div class="massMessage-heading">
                    <h1>EXISTING FUR BABY RECORDS</h1>
                    </div>
                    <div>
                        <button class="mr-4 manuallyBtn">MANUALLY ADD A FUR BABY</button>
                        <button class="sync-Btn mr-4">SYNC TO PRACTICE MANAGEMENT SOFTWARE</button>
                    </div>
                </div>
                <div class="mt-2 forline-again1"></div>
            </div>
              </div>


            <Style/>
        </div>
        
    );
}
export default SectionOne;
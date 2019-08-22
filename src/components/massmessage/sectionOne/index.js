import React from 'react';
import Style from './style';
const SectionOne=()=>{
    return(
        <div>
            <div class="container mx-auto">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                <div class="flex justify-between mt-12">
                    <div class="massMessage-heading">
                    <h1>SEND BOARDER MASS MESSAGE TO ALL IN PROGRESS BOARDERS</h1>
                    </div>
                    <div>
                        <button class="progressDashboard-Btn mr-4">RETURN TO IN PROGRESS DASHBOARD</button>
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
import React from 'react';
import Style from './style';
const SectionOne=()=>{
    return(
        <div>
        <div class="container mx-auto">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                <div class="flex justify-between mt-12">
                    <div class="tools-heading">
                    <h1>TOOLS & SETTINGS</h1>
                    </div>
                    <div>
                        <button class="mr-4 manage-Customize-Btn">CUSTOMIZE MEDICATION & FOOD DROP-DOWNS</button>
                        <button class="mr-4 manage-Note-Btn">MANAGE NOTE DATABASE</button>
                        <button class="mr-4 manage-Treatment-Btn">MANAGE TREATMENT PLANS</button>
                        <button class="manage-Clinic-Btn mr-4">MANAGE CLINIC USERS</button>
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
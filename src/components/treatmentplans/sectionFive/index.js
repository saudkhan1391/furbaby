import React from 'react';
import Style from './style';
const SectionFive =()=>{
    return(
        <div>
           <div className="container mx-auto">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                <div className="flex justify-between mt-12">
                <div className="medicationHeading2">
                    <h1>CUSTOMIZE TREATMENT PLAN DROPDOWNS</h1>
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
            <div className="mt-4 optionspara">
                <p>Select Treatment Plan to Customize</p>
            </div>
            <div>
            <div className="inputvision">
      <select className="border py-2 px-3 " type="text"><option value="">select</option><option>First</option><option>Second</option><option>Third</option></select>
      </div> 
            </div>
           
            </div>
              </div>
        <Style/>
        </div>
    );
}
export default SectionFive;
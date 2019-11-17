import React from 'react';
import Style from './style';
const SectionFive =()=>{
    return(
        <div>
           <div className="container mx-auto">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                <div className="flex justify-between mt-12">
                <div className="medicationHeading2">
                    <h1>CUSTOMIZE PET FOOD DROPDOWNS</h1>
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
                <p>All selected options will display in the pet food dropdown</p>
            </div>
            <div className="flex mt-8">
                <div className="showing">
                    <p>Showing food options for:</p>
           </div>
    
    <div className="flex ml-8 label">
    
    <div className="flex mr-12 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Canine</label>
</div>
<div className="flex mr-12 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Feline</label>
</div>
<div className="flex mr-12 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Other Species</label>
</div>
    </div>
    
              
            </div>
            </div>
              </div>
        <Style/>
        </div>
    );
}
export default SectionFive;
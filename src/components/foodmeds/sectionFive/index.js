import React from 'react';
import Style from './style';
const SectionFive =()=>{
    return(
        <div>
           <div class="container mx-auto">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                <div class="flex justify-between mt-12">
                <div class="medicationHeading2">
                    <h1>CUSTOMIZE PET FOOD DROPDOWNS</h1>
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
            <div class="mt-4 optionspara">
                <p>All selected options will display in the pet food dropdown</p>
            </div>
            <div class="flex mt-8">
                <div class="showing">
                    <p>Showing food options for:</p>
           </div>
    
    <div class="flex ml-8 label">
    
    <div class="flex mr-12 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label>Canine</label>
</div>
<div class="flex mr-12 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label>Feline</label>
</div>
<div class="flex mr-12 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
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
import React from 'react';
import Style from './style';
const SectionSeven=()=>{
    return(
        <div>

<div class="container mx-auto">
<div class="flex mb-4">
  <div class="w-full">
      <div class="customMedication">
          <h1>
          ADD CUSTOM PLAN COMPONENT
          </h1>
      </div>
      <div class="multiplepara mt-4">
          <p>Enter the name exactly as you wish it to appear as a step on your treatment plan.  To add multiple plan components seperate by a line break.</p>
      </div>
  </div>
</div>

<div class="flex mb-4">
  <div class="w-fullh-12">
  <div class="fotText-area"><textarea rows="5" cols="206"></textarea></div>
  </div>
</div>
<div class="savebtnText h-40">
    <button>SAVE CHANGES</button>
</div>
    </div>


            <Style/>
        </div>
        
    );
}
export default SectionSeven;
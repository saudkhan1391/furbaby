import React from 'react';
import Style from './style';
const SectionFour=()=>{
    return(
        <div>

<div class="container mx-auto">
<div class="flex mb-4">
  <div class="w-full">
      <div class="customMedication">
          <h1>
          ADD CUSTOM MEDICATION
          </h1>
      </div>
      <div class="multiplepara mt-4">
          <p>To add multiple seperate by a line break</p>
      </div>
  </div>
</div>

<div class="flex mb-4">
  <div class="w-fullh-12">
  <div class="fotText-area"><textarea rows="5" cols="209"></textarea></div>
  </div>
</div>
<div class="savebtnText h-16">
    <button>SAVE CHANGES</button>
</div>
    </div>


            <Style/>
        </div>
        
    );
}
export default SectionFour;
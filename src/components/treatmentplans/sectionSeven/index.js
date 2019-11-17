import React from 'react';
import Style from './style';
const SectionSeven=()=>{
    return(
        <div>

<div className="container mx-auto">
<div className="flex mb-4">
  <div className="w-full">
      <div className="customMedication">
          <h1>
          ADD CUSTOM PLAN COMPONENT
          </h1>
      </div>
      <div className="multiplepara mt-4">
          <p>Enter the name exactly as you wish it to appear as a step on your treatment plan.  To add multiple plan components seperate by a line break.</p>
      </div>
  </div>
</div>

<div className="flex mb-4">
  <div className="w-fullh-12">
  <div className="fotText-area"><textarea rows="5" cols="206"></textarea></div>
  </div>
</div>
<div className="savebtnText h-40">
    <button>SAVE CHANGES</button>
</div>
    </div>


            <Style/>
        </div>
        
    );
}
export default SectionSeven;
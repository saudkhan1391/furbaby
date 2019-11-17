import React from 'react';
import Style from './style';
const SectionFour=()=>{
    return(
        <div>

<div className="container mx-auto">
<div className="flex mb-4">
  <div className="w-full">
      <div className="customMedication">
          <h1>
          ADD CUSTOM MEDICATION
          </h1>
      </div>
      <div className="multiplepara mt-4">
          <p>To add multiple seperate by a line break</p>
      </div>
  </div>
</div>

<div className="flex mb-4">
  <div className="w-fullh-12">
  <div className="fotText-area"><textarea rows="5" cols="209"></textarea></div>
  </div>
</div>
<div className="savebtnText h-16">
    <button>SAVE CHANGES</button>
</div>
    </div>


            <Style/>
        </div>
        
    );
}
export default SectionFour;
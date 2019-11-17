import React from 'react';
import Style from './style';
const SectionFour=()=>{
    return(
        <div>

<div className="container mx-auto">
<div className="flex mb-4">
  <div className="w-full mt-12">
      <div className="customMedication">
          <h1>
          ADD A NEW NOTE
          </h1>
      </div> 
  </div>
</div>

<div className="flex mb-4">
  <div className="w-fullh-12">
  <p className="noteTtle mt-4">Note Title</p>
  <div className="fotText-area mt-2"><textarea rows="1" cols="206"></textarea></div>
  </div>
</div>
    </div>


            <Style/>
        </div>
        
    );
}
export default SectionFour;
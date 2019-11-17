import React from 'react';
import Style from './style';
const SectionFour=()=>{
    return(
        <div>

<div className="container mx-auto">
<div className="flex mb-4">
  <div className="w-fullh-12">
  <p className="note mt-4">Note</p>
  <div className="fotText-area mt-2"><textarea rows="5" cols="206"></textarea></div>
  </div>
</div>
<div className="flex h-32">
<div className="savebtnText">
    <button>SAVE CHANGES</button>
</div>
<div className="attachmentbtn ml-4">
    <button>ADD / EDIT PHOTO ATTACHMENTS TO NOTE</button>
</div>
</div>
    </div>


            <Style/>
        </div>
        
    );
}
export default SectionFour;
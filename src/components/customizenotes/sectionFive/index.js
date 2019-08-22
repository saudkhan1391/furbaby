import React from 'react';
import Style from './style';
const SectionFive=()=>{
    return(
        <div>

<div class="container mx-auto">
<div class="flex mb-4">
  <div class="w-fullh-12">
  <p class="note mt-4">Note</p>
  <div class="fotText-area mt-2"><textarea rows="5" cols="209"></textarea></div>
  </div>
</div>
<div class="flex h-16">
<div class="savebtnText">
    <button>SAVE CHANGES</button>
</div>
<div class="attachmentbtn ml-4">
    <button>ADD / EDIT PHOTO ATTACHMENTS TO NOTE</button>
</div>
</div>
    </div>


            <Style/>
        </div>
        
    );
}
export default SectionFive;
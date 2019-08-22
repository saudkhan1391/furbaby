import React from 'react';
import Style from './style';
const SectionTwo =()=>{
    return(
        <div>
           <div class="container mx-auto">
<div class="">
  <div class="h-full mt-8 forBg-clr">
    <div class="p-6">
        <div class="usage-Report-Heading">
        <h1>
            USAGE REPORT
        </h1>
        </div>
        <div class="select-Report-Paragraph mt-4">
            <p>SELECT REPORT DATE RANGE</p>
        </div>
        <div class="flex mt-6">
        <div class="w-1/4 px-2 pl-0">
      <div class=" h-12">
      <div class="flex flex-col mb-4 inputvision5">
    <label class="mb-2" for="first_name">Start Date</label>
    <input class="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
    </div>   
    <div class="w-1/4 px-2 pl-0">
      <div class=" h-12">
      <div class="flex flex-col mb-4 inputvision5">
    <label class="mb-2" for="first_name">End Date</label>
    <input class="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
    </div>
    <div class="w-1/4 px-2">
      <div class=" h-12">
      <div class="flex flex-col mb-4 inputvision5 ml-16">
    <label class="mb-2" for="first_name">Pet Owner Technology Fee</label>
    <input class="border py-2 px-3 " type="text" placeholder="$20"/>
    <div class="mt-4 edit-Button-Again">
      <button>EDIT</button>
  </div>
  </div>
  
      </div>
    </div> 
        </div>
        <div class="flex mt-12">
            <div class="run-Report-Button">
                <button>RUN REPORT</button>
            </div>
            <div class="export-Report-Button ml-3">
                <button>EXPORT REPORT</button>
            </div>
        </div>
    </div>
  </div>
</div>
</div>
        <Style/>
        </div>
    );
}
export default SectionTwo;
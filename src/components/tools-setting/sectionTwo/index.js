import React from 'react';
import Style from './style';
const SectionTwo =()=>{
    return(
        <div>
           <div className="container mx-auto">
<div className="">
  <div className="h-full mt-8 forBg-clr">
    <div className="p-6">
        <div className="usage-Report-Heading">
        <h1>
            USAGE REPORT
        </h1>
        </div>
        <div className="select-Report-Paragraph mt-4">
            <p>SELECT REPORT DATE RANGE</p>
        </div>
        <div className="flex mt-6">
        <div className="w-1/4 px-2 pl-0">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision5">
    <label className="mb-2" htmlFor="first_name">Start Date</label>
    <input className="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
    </div>   
    <div className="w-1/4 px-2 pl-0">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision5">
    <label className="mb-2" htmlFor="first_name">End Date</label>
    <input className="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
    </div>
    <div className="w-1/4 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision5 ml-16">
    <label className="mb-2" htmlFor="first_name">Pet Owner Technology Fee</label>
    <input className="border py-2 px-3 " type="text" placeholder="$20"/>
    <div className="mt-4 edit-Button-Again">
      <button>EDIT</button>
  </div>
  </div>
  
      </div>
    </div> 
        </div>
        <div className="flex mt-12">
            <div className="run-Report-Button">
                <button>RUN REPORT</button>
            </div>
            <div className="export-Report-Button ml-3">
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
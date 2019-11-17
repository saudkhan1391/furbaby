import React,{useState} from 'react';
import Style from './style';
import Calendar from 'react-calendar';
const SectionTwo =()=>{
  const[date,setDate]=useState(new Date())

  console.log(date)
    return(
        <div>
           <div className="px-2 mt-10">
  <div className="flex -mx-2">
    <div className="w-1/2 px-2">
      <div className="h-12 ml-12">
   
      {/* ========================= */}
        
     
<div className="calendar-div">
<Calendar 
          value={date && date}/>
</div>
      
  {/* =========================     */}
      
      
      
      </div>
    </div>
    
    <div className="w-1/2 px-2">
      <div className="pl-10 pb-4 select-Furbaby-Schedule">
        <h1>STEP 1:  SELECT FUR BABY TO SCHEDULE</h1>
      </div>
      <div className="flex h-12 ml-10 form">
      <input type="text" name="fname" placeholder="  Search for a schedule pet"></input>
     <div className=" img">
         <img src={require('../../../assets/images/search.png')} alt="pic"/>
     </div>
      </div>
      <div className="pl-10 mt-4">
        <button className="refreshBtn">CLICK TO REFRESH DATA FROM CONNECTED PRACTICE MANAGEMENT SOFTWARE</button>
      </div>
      <div className="pl-10 mt-12 manually">
        <h1>OR MANUALLY CREATE NEW FUR BABY</h1>
      </div>

      <div className="flex -mx-2 mt-8 ml-10">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" for="first_name">Owner Name</label>
    <input className="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" for="first_name">Fur Baby Name</label>
    <input className="border py-2 px-3 " type="text"/>
  </div>
      </div>
      
    </div>

    
   
  </div>

  <div className="flex -mx-2 mt-8 ml-10">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" for="first_name">Email</label>
    <input className="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" for="first_name">Phone Number</label>
    <input className="border py-2 px-3 " type="text"/>
  </div>
      </div>
      
    </div>

    
   
  </div>

  <div className="flex -mx-2 mt-8 ml-10">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" for="first_name">Cell Number (For Texts)</label>
    <input className="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" for="first_name">Fur Baby Image</label>
    <input className="border py-2 px-3 " type="text"/>
  </div>
      </div>
     
      
    </div>
   

    
   
  </div>
  <div className="pl-10 mt-12 manually">
        <h1>STEP 2:  SELECT REASON FOR VISIT AND DATE</h1>
  </div>

  <div className="flex -mx-2 mt-8 ml-10">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" for="first_name">Visit Reason</label>
    <select className="border py-2 px-3 " type="text">
    <option value="" selected="">Select</option>
    <option>FIRST</option>
    <option>SECOND</option>
    <option>THIRD</option>
</select>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" for="first_name">Schedule Date</label>
    <input className="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
      
    </div>
     </div>
    
     <div className="pl-12 mt-10">
        <button className="reviewBtn">OPTIONAL: REVIEW & CUSTOMIZE TREATMENT PLAN</button>
      </div>
      <div className="flex mb-4 mt-5 ml-12 h-24 allButtons">
  <div className="w-1/1 h-12">
  <div>
     <button className="addBtn">ADD TO SCHEDULE</button>
  </div>
  </div>
  <div className="w-1/1 h-12 ml-4">
  <div>
     <button className="cnclBtn">CANCEL</button>
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
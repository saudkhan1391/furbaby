import React,{useState} from 'react';
import Style from './style';
import Calendar from 'react-calendar';
const SectionTwo =()=>{
  const[date,setDate] = useState(new Date())

  console.log(date)
    return(
        <div>
            
           <div class="px-2 mt-10">
  <div class="flex -mx-2">
    <div class="w-1/2 px-2">
      <div class="h-12 ml-12">
  
            {/* ========================= */}
        
     
<div class="calendar-div">
<Calendar 
          value={date && date}/>
</div>
      
  {/* =========================     */}
      
      
      </div>
    </div>
    
    <div class="w-1/2 px-2">
      <div class="pl-10 pb-4 select-Furbaby-Schedule">
        <h1>STEP 1:  SELECT FUR BABY TO SCHEDULE</h1>
      </div>
      <div class="flex h-12 ml-10 form">
      <input type="text" name="fname" placeholder="  Search for a schedule pet"></input>
     <div class=" img"> 
         <img src={require('../../../assets/images/search.png')} alt = "pic"/>
     </div>
      </div>
      <div class="pl-10 mt-4">
        <button class="refreshBtn">CLICK TO REFRESH DATA FROM CONNECTED PRACTICE MANAGEMENT SOFTWARE</button>
      </div>
      <div class="pl-10 mt-12 manually">
        <h1>OR MANUALLY CREATE NEW FUR BABY</h1>
      </div>

      <div class="flex -mx-2 mt-8 ml-10">
    <div class="w-1/2 px-2">
      <div class="h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Owner Name</label>
    <input class="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div class="w-1/2 px-2">
      <div class=" h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Fur Baby Name</label>
    <input class="border py-2 px-3 " type="text"/>
  </div>
      </div>
      
    </div>

    
   
  </div>

  <div class="flex -mx-2 mt-8 ml-10">
    <div class="w-1/2 px-2">
      <div class="h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Email</label>
    <input class="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div class="w-1/2 px-2">
      <div class=" h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Phone Number</label>
    <input class="border py-2 px-3 " type="text"/>
  </div>
      </div>
      
    </div>

    
   
  </div>

  <div class="flex -mx-2 mt-8 ml-10">
    <div class="w-1/2 px-2">
      <div class="h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Cell Number (For Texts)</label>
    <input class="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div class="w-1/2 px-2">
      <div class=" h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Fur Baby Image</label>
    <input class="border py-2 px-3 " type="text"/>
  </div>
      </div>
     
      
    </div>
   

    
   
  </div>
  <div class="pl-10 mt-12 manually">
        <h1>STEP 2:  SELECT REASON FOR VISIT AND DATE</h1>
  </div>

  <div class="flex -mx-2 mt-8 ml-10">
    <div class="w-1/2 px-2">
      <div class="h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Visit Reason</label>
    <select class="border py-2 px-3 " type="text">
    <option value="" selected="">Select</option>
    <option>FIRST</option>
    <option>SECOND</option>
    <option>THIRD</option>
</select>
  </div>
      </div>
    </div>
    <div class="w-1/2 px-2">
      <div class=" h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Schedule Date</label>
    <input class="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
      
    </div>
     </div>
    
     

      <div class="flex justify-between pl-12 mt-10 treatment">
          <div>
              <h1>DEFAULT TREATMENT PLAN INCLUDES</h1>
          </div>
          <div class="mr-16">
              <button>REMOVE</button>
          </div>
      </div>
      <div class="pl-12 mt-4 optional">
          <p>OPTIONAL - CUSTOMIZE TREATMENT PLAN</p>
      </div>
    
     <div class="flex pl-12 mt-8 label">
    <div class="checkbox1">
    <div class="flex mr-12 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div class="flex mr-12 mt-4 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div class="flex mr-12 mt-4 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
     </div>
     <div class="checkbox1">
     <div class="flex mr-12 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div class="flex mr-12 mt-4 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div class="flex mr-12 mt-4 check-mar">  
<label class="container1">
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>

     </div>
    </div>

    <div class="pl-12 mt-8">
        <div class="addCustom">
            <p>Add custom plan components</p>
        </div>
        <div class="fotText-area">
            <textarea  rows="5" cols="80"></textarea>
        </div>
    </div>

    <div class="flex mb-4 mt-5 ml-12 h-24 allButtons">
  <div class="w-1/4 h-12"> 
  <div>
     <button class="addBtn">ADD TO SCHEDULE</button>
  </div>
  </div>
  <div class="w-1/4 h-12">
  <div>
     <button class="cnclBtn">CANCEL</button>
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
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



    <div class=" px-2">
      <div class="px-2">
  <div class="flex -mx-2">
    
    <div class="w-1/3 px-8 middle1">
      <div class="h-12">
      <div class="max-w-sm rounded overflow-hidden single-pet-boxBorders">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-5">
  <div class="img1">
  <img src={require('../../../assets/images/img-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  <div class="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
   <p>Todd Capitanio<br></br>
        <span class="normal">Boarding</span>
    </p>
  </div>
</div>
      </div>
    </div>
    <div class="w-1/3 px-8">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
  
 
  
</div>
    </div>
   
 
 
  </div>
  



</div>

     
    </div>










        
  <div class="flex -mx-2 mt-64 ml-10">
    <div class="w-1/2 px-2">
      <div class="h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Visit Reason</label>
    <select class="border py-2 px-3 " type="text">
      <option value="">select</option>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
    </select>
  </div>
      </div>
    </div>
    <div class="w-1/2 px-2">
      <div class=" h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Schedule Arrival Date</label>
    <input class="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
      
    </div>

    
   
  </div>

  <div class="flex -mx-2 mt-12 ml-10">
    <div class="w-1/2 px-2">
      <div class="h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Schedule Departure Date</label>
    <input class="border py-2 px-3 " type="text" placeholder="06/22/2019"></input>
  </div>
      </div>
    </div>
    <div class="w-1/2 px-2">
      <div class=" h-12">
     
      </div>
      
    </div>

    
   
  </div>

 


      <div class="flex justify-between pl-12 mt-16 treatment">
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
    
     <div class="flex pl-12 mt-16 label">
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

    <div class="pl-12 mt-12">
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
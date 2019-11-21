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



    <div className=" px-2">
      <div className="px-2">
  <div className="flex -mx-2">
    
    <div className="w-1/3 px-8 middle1">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden single-pet-boxBorders">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
  <div className="img1">
  <img src={require('../../../assets/images/img-placeholder.png')} alt="pic"/>
  </div>
  </div>
  <div className="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
   <p>Todd Capitanio<br></br>
        <span className="normal">Boarding</span>
    </p>
  </div>
</div>
      </div>
    </div>
    <div className="w-1/3 px-8">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  
  
 
  
</div>
    </div>
   
 
 
  </div>
  



</div>

     
    </div>










        
  <div className="flex -mx-2 mt-64 ml-10">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Visit Reason</label>
    <select className="border py-2 px-3 " type="text">
      <option value="">select</option>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
    </select>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Schedule Arrival Date</label>
    <input className="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
      
    </div>

    
   
  </div>

  <div className="flex -mx-2 mt-12 ml-10">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Schedule Departure Date</label>
    <input className="border py-2 px-3 " type="text" placeholder="06/22/2019"></input>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
     
      </div>
      
    </div>

    
   
  </div>

 


      <div className="flex justify-between pl-12 mt-16 treatment">
          <div>
              <h1>DEFAULT TREATMENT PLAN INCLUDES</h1>
          </div>
          <div className="mr-16">
              <button>REMOVE</button>
          </div>
      </div>
      <div className="pl-12 mt-4 optional">
          <p>OPTIONAL - CUSTOMIZE TREATMENT PLAN</p>
      </div>
    
     <div className="flex pl-12 mt-16 label">
    <div className="checkbox1">
    <div className="flex mr-12 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>

   
     </div>
     <div className="checkbox1">
     <div className="flex mr-12 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>

   

     </div>
    </div>

    <div className="pl-12 mt-12">
        <div className="addCustom">
            <p>Add custom plan components</p>
        </div>
        <div className="fotText-area">
            <textarea  rows="5" cols="80"></textarea>
        </div>
    </div>

    <div className="flex mb-4 mt-5 ml-12 h-24 allButtons">
  <div className="w-1/4 h-12">
  <div>
     <button className="addBtn">ADD TO SCHEDULE</button>
  </div>
  </div>
  <div className="w-1/4 h-12">
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
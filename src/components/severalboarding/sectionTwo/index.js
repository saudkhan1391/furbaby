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



    
      <div className="px-2">
      <div className="carousel">
    <div className="carousel-inner">
        <input className="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
        <div className="carousel-item">
        <div className="flex -mx-2">
    
    <div className="w-1/3 px-8 middle">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden border-boxes">
  
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
    <div className="max-w-sm rounded overflow-hidden border-boxes">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
    <div className="img1">
  <img src={require('../../../assets/images/img-placeholder1.png')} alt="pic"/>
  </div>
  </div>
  <div className="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
    <p>
    Tobby Torres<br></br>
       <span className="normal"> Spay </span>
    </p>
  </div>
  
</div>
    </div>
    <div className="w-1/3 px-8 middle2">
    <div className="max-w-sm rounded overflow-hidden border-boxes">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
  <div className="img1">
  <img src={require('../../../assets/images/img-placeholder2.png')} alt="pic"/>
  </div>
  </div>
  <div className="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Daisy Stevens<br></br>
          <span className="normal"> Dental </span>
        </p>
  </div>
</div>
    </div>
 
 
  </div>

        </div>
        <input className="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
        <div className="carousel-item">
        <div className="flex -mx-2">
    
    <div className="w-1/3 px-8 middle">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden border-boxes">
  
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
    <div className="max-w-sm rounded overflow-hidden border-boxes">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
    <div className="img1">
  <img src={require('../../../assets/images/img-placeholder1.png')} alt="pic"/>
  </div>
  </div>
  <div className="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
    <p>
    Tobby Torres<br></br>
       <span className="normal"> Spay </span>
    </p>
  </div>
  
</div>
    </div>
    <div className="w-1/3 px-8 middle2">
    <div className="max-w-sm rounded overflow-hidden border-boxes">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
  <div className="img1">
  <img src={require('../../../assets/images/img-placeholder2.png')} alt="pic"/>
  </div>
  </div>
  <div className="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Daisy Stevens<br></br>
          <span className="normal"> Dental </span>
        </p>
  </div>
</div>
    </div>
 
 
  </div>
        </div>
        <input className="carousel-open hidden" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
        <div className="carousel-item">
        <div className="flex -mx-2">
    
    <div className="w-1/3 px-8 middle">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden border-boxes">
  
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
    <div className="max-w-sm rounded overflow-hidden border-boxes">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
    <div className="img1">
  <img src={require('../../../assets/images/img-placeholder1.png')} alt="pic"/>
  </div>
  </div>
  <div className="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
    <p>
    Tobby Torres<br></br>
       <span className="normal"> Spay </span>
    </p>
  </div>
  
</div>
    </div>
    <div className="w-1/3 px-8 middle2">
    <div className="max-w-sm rounded overflow-hidden border-boxes">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
  <div className="img1">
  <img src={require('../../../assets/images/img-placeholder2.png')} alt="pic"/>
  </div>
  </div>
  <div className="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Daisy Stevens<br></br>
          <span className="normal"> Dental </span>
        </p>
  </div>
</div>
    </div>
 
 
  </div>
        </div>
        <label htmlFor="carousel-3" className="carousel-control prev control-1"><img src={require('../../../assets/images/preview5.png')} alt="pic"/></label>
        <label htmlFor="carousel-2" className="carousel-control next control-1"><img src={require('../../../assets/images/next5.png')} alt="pic"/></label>
        <label htmlFor="carousel-1" className="carousel-control prev control-2"><img src={require('../../../assets/images/preview5.png')} alt="pic"/></label>
        <label htmlFor="carousel-3" className="carousel-control next control-2"><img src={require('../../../assets/images/next5.png')} alt="pic"/></label>
        <label htmlFor="carousel-2" className="carousel-control prev control-3"><img src={require('../../../assets/images/preview5.png')} alt="pic"/></label>
        <label htmlFor="carousel-1" className="carousel-control next control-3"><img src={require('../../../assets/images/next5.png')} alt="pic"/></label>
       
    </div>
</div>
  



</div>

     
   










        
  <div className="flex -mx-2 mt-8 ml-10">
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
  <div className="w-1/1 h-12">
  <div>
     <button className="addBtn">ADD TO SCHEDULE</button>
  </div>
  </div>
  <div className="w-1/1 ml-4 h-12">
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
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
      <div class="flex h-12 ml-10 form">
      <input type="text" name="fname" placeholder="  Search for a schedule pet"></input>
     <div class=" img"> 
         <img src={require('../../../assets/images/search.png')} alt = "pic"/>
     </div>
      </div>
      <div class="px-2">
      <div class="carousel">
        <div class="carousel-inner">
          <input class="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
          <div class="carousel-item">
          <div class="flex -mx-2 pt-6">
      
      <div class="w-1/3 px-8 middle">
        <div class="h-12">
        <div class="max-w-sm rounded overflow-hidden again-border">

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
      <div class="max-w-sm rounded overflow-hidden again-border">

    <div class="px-6 py-4 flex justify-center m-auto pt-5">
      <div class="img1">
    <img src={require('../../../assets/images/img-placeholder1.png')} alt = "pic"/>
    </div>
    </div>
    <div class="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
      <p>
      Tobby Torres<br></br>
          <span class="normal"> Spay </span>
      </p>
    </div>
    <div class="px-6 py-4 justify-center m-auto items-center content-center pl-0 pr-0">
        <div class="flex justify-center m-auto items-center content-center "> 
        <hr class="style2"/>
        </div>
        <p class="px-6 pt-4 pb-1 py-4 flex justify-center m-auto items-center content-center visit">Edit: Visit</p>
        
    </div>
    </div>
      </div>
      <div class="w-1/3 px-8 middle2">
      <div class="max-w-sm rounded overflow-hidden again-border">

    <div class="px-6 py-4 flex justify-center m-auto pt-5">
    <div class="img1">
    <img src={require('../../../assets/images/img-placeholder2.png')} alt = "pic"/>
    </div>
    </div>
    <div class="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
          <p>
          Daisy Stevens<br></br>
            <span class="normal"> Dental </span>
          </p>
    </div>
    </div>
      </div>


    </div>
          </div>
          <input class="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
          <div class="carousel-item">
          <div class="flex -mx-2 pt-6">
      
      <div class="w-1/3 px-8 middle">
        <div class="h-12">
        <div class="max-w-sm rounded overflow-hidden again-border">

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
      <div class="max-w-sm rounded overflow-hidden again-border">

    <div class="px-6 py-4 flex justify-center m-auto pt-5">
      <div class="img1">
    <img src={require('../../../assets/images/img-placeholder1.png')} alt = "pic"/>
    </div>
    </div>
    <div class="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
      <p>
      Tobby Torres<br></br>
          <span class="normal"> Spay </span>
      </p>
    </div>
    <div class="px-6 py-4 justify-center m-auto items-center content-center pl-0 pr-0">
        <div class="flex justify-center m-auto items-center content-center "> 
        <hr class="style2"/>
        </div>
        <p class="px-6 pt-4 pb-1 py-4 flex justify-center m-auto items-center content-center visit">Edit: Visit</p>
        
    </div>
    </div>
      </div>
      <div class="w-1/3 px-8 middle2">
      <div class="max-w-sm rounded overflow-hidden again-border">

    <div class="px-6 py-4 flex justify-center m-auto pt-5">
    <div class="img1">
    <img src={require('../../../assets/images/img-placeholder2.png')} alt = "pic"/>
    </div>
    </div>
    <div class="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
          <p>
          Daisy Stevens<br></br>
            <span class="normal"> Dental </span>
          </p>
    </div>
    </div>
      </div>


    </div>
          </div>
          <input class="carousel-open hidden" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
          <div class="carousel-item">
          <div class="flex -mx-2 pt-6">
      
      <div class="w-1/3 px-8 middle">
        <div class="h-12">
        <div class="max-w-sm rounded overflow-hidden again-border">

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
      <div class="max-w-sm rounded overflow-hidden again-border">

    <div class="px-6 py-4 flex justify-center m-auto pt-5">
      <div class="img1">
    <img src={require('../../../assets/images/img-placeholder1.png')} alt = "pic"/>
    </div>
    </div>
    <div class="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
      <p>
      Tobby Torres<br></br>
          <span class="normal"> Spay </span>
      </p>
    </div>
    <div class="px-6 py-4 justify-center m-auto items-center content-center pl-0 pr-0">
        <div class="flex justify-center m-auto items-center content-center "> 
        <hr class="style2"/>
        </div>
        <p class="px-6 pt-4 pb-1 py-4 flex justify-center m-auto items-center content-center visit">Edit: Visit</p>
        
    </div>
    </div>
      </div>
      <div class="w-1/3 px-8 middle2">
      <div class="max-w-sm rounded overflow-hidden again-border">

    <div class="px-6 py-4 flex justify-center m-auto pt-5">
    <div class="img1">
    <img src={require('../../../assets/images/img-placeholder2.png')} alt = "pic"/>
    </div>
    </div>
    <div class="px-6 pt-10 py-4 flex justify-center m-auto items-center content-center forText">
          <p>
          Daisy Stevens<br></br>
            <span class="normal"> Dental </span>
          </p>
    </div>
    </div>
      </div>


    </div>
          </div>
          <label for="carousel-3" class="carousel-control prev control-1"><img src={require('../../../assets/images/preview5.png')} alt = "pic"/></label>
          <label for="carousel-2" class="carousel-control next control-1"><img src={require('../../../assets/images/next5.png')} alt = "pic"/></label>
          <label for="carousel-1" class="carousel-control prev control-2"><img src={require('../../../assets/images/preview5.png')} alt = "pic"/></label>
          <label for="carousel-3" class="carousel-control next control-2"><img src={require('../../../assets/images/next5.png')} alt = "pic"/></label>
          <label for="carousel-2" class="carousel-control prev control-3"><img src={require('../../../assets/images/preview5.png')} alt = "pic"/></label>
          <label for="carousel-1" class="carousel-control next control-3"><img src={require('../../../assets/images/next5.png')} alt = "pic"/></label>
        </div>
</div>
 
 
 
 
  <div class="px-2">
  <div class="flex -mx-2 mt-8 ml-10">
    <div class="w-1/2 px-2">
      <div class="h-12">
      <div class="flex flex-col mb-4 inputvision">
    <label class="mb-2" for="first_name">Visit Reason</label>
    <input class="border py-2 px-3 " type="text"></input>
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

  <div class="flex mb-4 mt-5 ml-12 allButtons">
  <div class="w-1/4 h-12"> 
  <div>
     <button class="rmvBtn">REMOVE FROM SCHEDULE</button>
  </div>
  </div>
  <div class="w-1/4 h-12">
  <div>
     <button class="rmvBtn">VIEW PATIENT RECORD</button>
  </div>
  </div>
  <div class="flex w-1/4 h-12">
  <div class="saveButton">
     <button class="saveBtn">SAVE CHANGES</button>
  </div>
  <div class="w-1/4 h-12">
  <div class="cancelButton">
     <button class="cancelBtn">CANCEL</button>
  </div>
  </div>
  </div>
  
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
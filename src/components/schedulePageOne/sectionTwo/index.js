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
      <div class="carousel">
    <div class="carousel-inner">
        <input class="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
        <div class="carousel-item">
       
      <div class="px-2">
  <div class="flex -mx-2 pt-8">
    
    <div class="w-1/3 px-8 middle">
      <div class="h-12">
      <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
    <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
  <div class="px-6 py-4 justify-center m-auto items-center content-center">
     <div class="btnBlue1 flex justify-center m-auto items-center content-center"> 
     <button class="btnBlue1 flex justify-center m-auto items-center content-center">check-in</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">edit or reschedule</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">remove from schedule</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">resend owner invite</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">view patient record</button> 
     </div>
  </div>
</div>
    </div>
    <div class="w-1/3 px-8 middle2">
    <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
    
        </div>
        <input class="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
        <div class="carousel-item">
        
      <div class="px-2">
  <div class="flex -mx-2 pt-8">
    
    <div class="w-1/3 px-8 middle">
      <div class="h-12">
      <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
    <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
  <div class="px-6 py-4 justify-center m-auto items-center content-center">
     <div class="btnBlue1 flex justify-center m-auto items-center content-center"> 
     <button class="btnBlue1 flex justify-center m-auto items-center content-center">check-in</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">edit or reschedule</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">remove from schedule</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">resend owner invite</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">view patient record</button> 
     </div>
  </div>
</div>
    </div>
    <div class="w-1/3 px-8 middle2">
    <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
    
        </div>
        <input class="carousel-open hidden" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
        <div class="carousel-item">
       
      <div class="px-2">
  <div class="flex -mx-2 pt-8">
    
    <div class="w-1/3 px-8 middle">
      <div class="h-12">
      <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
    <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
  <div class="px-6 py-4 justify-center m-auto items-center content-center">
     <div class="btnBlue1 flex justify-center m-auto items-center content-center"> 
     <button class="btnBlue1 flex justify-center m-auto items-center content-center">check-in</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">edit or reschedule</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">remove from schedule</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">resend owner invite</button> 
     </div>
     <div class=" flex justify-center m-auto items-center content-center mt-2"> 
     <button class="btnWhite flex justify-center m-auto items-center content-center">view patient record</button> 
     </div>
  </div>
</div>
    </div>
    <div class="w-1/3 px-8 middle2">
    <div class="max-w-sm rounded overflow-hidden foursided-border">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-12">
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
    
        </div>
        <label for="carousel-3" class="carousel-control prev control-1"><img src={require('../../../assets/images/preview5.png')} alt = "pic"/></label>
        <label for="carousel-2" class="carousel-control next control-1"><img src={require('../../../assets/images/next5.png')} alt = "pic"/></label>
        <label for="carousel-1" class="carousel-control prev control-2"><img src={require('../../../assets/images/preview5.png')} alt = "pic"/></label>
        <label for="carousel-3" class="carousel-control next control-2"><img src={require('../../../assets/images/next5.png')} alt = "pic"/></label>
        <label for="carousel-2" class="carousel-control prev control-3"><img src={require('../../../assets/images/preview5.png')} alt = "pic"/></label>
        <label for="carousel-1" class="carousel-control next control-3"><img src={require('../../../assets/images/next5.png')} alt = "pic"/></label>
       
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
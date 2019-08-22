import React from 'react';
import Style from './style';
const SectionTwo =()=>{
    return(
        <div>
<div class="px-2 mt-10">
  <div class="flex -mx-2">
    <div class="w-1/2 px-2">
      <div class="h-12 ml-12">
      <div class="month">      
  <ul>
    <li class="prev">&#10094;</li>
    <li class="next">&#10095;</li>
    <li class="">
      JANUARY
      <span>2019</span>
    </li>
  </ul>
</div>
<div>
<ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul class="days">  
  <li class="clr relative">1<span class="absolute ovalGreen">8</span></li>
  <li class="clr relative">2<span class="absolute ovalGreen">8</span></li>
  <li class="clr relative">3<span class="absolute ovalGreen">8</span></li>
  <li class="clr relative">4<span class="absolute ovalGreen">8</span></li>
  <li class="clr relative">5<span class="absolute ovalGreen">8</span></li>
  <li class="relative">6<span class="absolute ovalGreen">8</span></li>
  <li class="relative">7<span class="absolute ovalGreen">8</span></li>
  <li class="relative">8<span class="absolute ovalGreen">8</span></li>
  <li class="relative">9<span class="absolute ovalGreen">8</span></li>
  <li class="relative">10<span class="absolute ovalGreen">8</span></li>
  <li class="relative">11<span class="absolute ovalGreen">8</span></li>
  <li class="relative">12<span class="absolute ovalGreen">8</span></li>
  <li class="relative">13<span class="absolute ovalGreen">8</span></li>
  <li class="relative">14<span class="absolute ovalGreen">8</span></li>
  <li class="relative">15<span class="absolute ovalGreen">8</span></li>
  <li class="relative">16<span class="absolute ovalGreen">8</span></li>
  <li class="relative">17<span class="absolute ovalGreen">8</span></li>
  <li class="relative">18<span class="absolute ovalGreen">8</span></li>
  <li class="relative">19<span class="absolute ovalGreen">8</span></li>
  <li class="relative">20<span class="absolute ovalGreen">8</span></li>
  <li class="relative">21<span class="absolute ovalGreen">8</span></li>
  <li class="relative">22<span class="absolute ovalGreen">8</span></li>
  <li class="relative">23<span class="absolute ovalGreen">8</span></li>
  <li class="relative">24<span class="absolute ovalGreen">8</span></li>
  <li class="relative">25<span class="absolute ovalGreen">8</span></li>
  <li class="relative">26<span class="absolute ovalGreen">8</span></li>
  <li class="relative">27<span class="absolute ovalGreen">8</span></li>
  <li class="relative">28<span class="absolute ovalGreen">8</span></li>
  <li class="relative">29<span class="absolute ovalGreen">8</span></li>
  <li class="relative">30<span class="absolute ovalGreen">8</span></li>
  <li class="relative">31<span class="absolute ovalGreen">8</span></li>
</ul>
</div>
      
      
      
      </div>
    </div>
    
    <div class="w-1/2 px-2">
      <div class="flex h-12 ml-10 form">
      <input type="text" name="fname" placeholder="  Search for a schedule pet"></input>
     <div class=" img"> 
         <img src={require('../../../assets/images/download.png')} alt = "pic"/>
     </div>
      </div>
      <div class="px-2">
  <div class="flex -mx-2 pt-8">
    
    <div class="w-1/3 px-8 middle">
      <div class="h-12">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
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
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
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
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
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

   
    
  </div>
</div>


           <Style/>
        </div>
        
    );
}
export default SectionTwo;
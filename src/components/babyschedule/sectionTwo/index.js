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
    
     <div class="pl-12 mt-10">
        <button class="reviewBtn">OPTIONAL: REVIEW & CUSTOMIZE TREATMENT PLAN</button>
      </div>
      <div class="flex mb-4 mt-5 ml-12 h-24 allButtons">
  <div class="w-1/1 h-12"> 
  <div>
     <button class="addBtn">ADD TO SCHEDULE</button>
  </div>
  </div>
  <div class="w-1/1 h-12 ml-4">
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
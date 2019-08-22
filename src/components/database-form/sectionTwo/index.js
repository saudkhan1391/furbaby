import React from 'react';
import Style from './style';
const SectionTwo =()=>{
    return(
        <div>
            <div class="container mx-auto">
               



               <div class="px-2 mt-10">
      <div class="flex -mx-2">
        <div class="w-1/2">
          <div class="h-12">
          <div class="flex h-12 form">
          <input type="text" name="fname" placeholder=" SEARCH..."></input>
         <div class=" img"> 
             <img src={require('../../../assets/images/download.png')}/>
         </div>
          </div>
    <div>
    <div class="databaseParagraph">
        <p>Search by the pet’s name, pet owner’s name, email, or phone, or scroll through the database below.<br></br>Records are listed by pet owner last name and first name.</p>
    </div>
    <div class="mt-8 forCard-border">
       <div class="p-4">
       <img class="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span class="ml-1 amanda">HOFFMEYER,AMANDA | 610-563-3294</span>
       </div>
       <div class="pl-4">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Felix</span>
       </div>
       <div class="pl-4 mt-1">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Schrody</span>
       </div>
    </div>
    
    <div class="mt-4 forCard-border1">
       <div class="p-4">
           <img class="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span class="ml-1 amanda">HOLT, THOMAS  |  610-444-0098</span>
       </div>
       <div class="pl-4">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Max</span>
       </div>
       <div class="pl-4 mt-1">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Kevin</span>
       </div>
       <div class="pl-4 mt-1">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Tin-Tin</span>
       </div>
    </div>
    
    <div class="mt-4 forCard-border">
       <div class="p-4">
       <img class="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span class="ml-1 amanda">KIRKPATRICK, TINA  |  610-444-1234</span>
       </div>
       <div class="pl-4">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Todd</span>
       </div>
       <div class="pl-4 mt-1">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Toby</span>
       </div>
    </div>
    
    <div class="mt-4 forCard-border2">
       <div class="p-4">
       <img class="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span class="ml-1 amanda">LITTLE, UMA  |  610-444-1234</span>
       </div>
       <div class="pl-4">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">George</span>
       </div>
    </div>
    
    <div class="cardHeight">
    <div class="mt-4 forCard-border">
       <div class="p-4">
       <img class="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span class="ml-1 amanda">KIRKPATRICK, TINA  |  610-444-1234</span>
       </div>
       <div class="pl-4">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Todd</span>
       </div>
       <div class="pl-4 mt-1">
       <img class="inline" src ={require('../../../assets/images/pawprint.png')} /> <span class="ml-1 amanda1">Toby</span>
       </div>
       </div>
    </div>
    </div>
    
    
          
          
          
          </div>
        </div>
    
        
      
     
    
        
        <div class="w-1/2 px-2">
      <div class="manually">
        <h1>MANUALLY CREATE NEW FUR BABY</h1>
      </div>

      <div class="flex -mx-2 mt-8">
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

  <div class="flex -mx-2 mt-8">
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

  <div class="flex -mx-2 mt-8">
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
  <div class="mt-12 manually">
        <h1>STEP 2:  SELECT REASON FOR VISIT AND DATE</h1>
  </div>

  <div class="flex -mx-2 mt-8">
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
    
     <div class="mt-10">
        <button class="reviewBtn">OPTIONAL: REVIEW & CUSTOMIZE TREATMENT PLAN</button>
      </div>

     
     
    
    



    <div class="flex mb-4 mt-5 h-24 allButtons">
  <div class="w-1/1 h-12"> 
  <div>
     <button class="addBtn">ADD TO SCHEDULE</button>
  </div>
  </div>
  <div class="w-1/1 ml-4 h-12">
  <div>
     <button class="cnclBtn">CANCEL</button>
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
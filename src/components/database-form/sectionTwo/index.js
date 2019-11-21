import React from 'react';
import Style from './style';
const SectionTwo =()=>{
    return(
        <div>
            <div className="container mx-auto">
               



               <div className="px-2 mt-10">
      <div className="flex -mx-2">
        <div className="w-1/2">
          <div className="h-12">
          <div className="flex h-12 form">
          <input type="text" name="fname" placeholder=" SEARCH..."></input>
         <div className=" img">
             <img src={require('../../../assets/images/download.png')}/>
         </div>
          </div>
    <div>
    <div className="databaseParagraph">
        <p>Search by the pet’s name, pet owner’s name, email, or phone, or scroll through the database below.<br></br>Records are listed by pet owner last name and first name.</p>
    </div>
    <div className="mt-8 forCard-border">
       <div className="p-4">
       <img className="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span className="ml-1 amanda">HOFFMEYER,AMANDA | 610-563-3294</span>
       </div>
       <div className="pl-4">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Felix</span>
       </div>
       <div className="pl-4 mt-1">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Schrody</span>
       </div>
    </div>
    
    <div className="mt-4 forCard-border1">
       <div className="p-4">
           <img className="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span className="ml-1 amanda">HOLT, THOMAS  |  610-444-0098</span>
       </div>
       <div className="pl-4">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Max</span>
       </div>
       <div className="pl-4 mt-1">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Kevin</span>
       </div>
       <div className="pl-4 mt-1">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Tin-Tin</span>
       </div>
    </div>
    
    <div className="mt-4 forCard-border">
       <div className="p-4">
       <img className="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span className="ml-1 amanda">KIRKPATRICK, TINA  |  610-444-1234</span>
       </div>
       <div className="pl-4">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Todd</span>
       </div>
       <div className="pl-4 mt-1">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Toby</span>
       </div>
    </div>
    
    <div className="mt-4 forCard-border2">
       <div className="p-4">
       <img className="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span className="ml-1 amanda">LITTLE, UMA  |  610-444-1234</span>
       </div>
       <div className="pl-4">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">George</span>
       </div>
    </div>
    
    <div className="cardHeight">
    <div className="mt-4 forCard-border">
       <div className="p-4">
       <img className="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span className="ml-1 amanda">KIRKPATRICK, TINA  |  610-444-1234</span>
       </div>
       <div className="pl-4">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Todd</span>
       </div>
       <div className="pl-4 mt-1">
       <img className="inline" src ={require('../../../assets/images/pawprint.png')} /> <span className="ml-1 amanda1">Toby</span>
       </div>
       </div>
    </div>
    </div>
    
    
          
          
          
          </div>
        </div>
    
        
      
     
    
        
        <div className="w-1/2 px-2">
      <div className="manually">
        <h1>MANUALLY CREATE NEW FUR BABY</h1>
      </div>

      <div className="flex -mx-2 mt-8">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Owner Name</label>
    <input className="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Fur Baby Name</label>
    <input className="border py-2 px-3 " type="text"/>
  </div>
      </div>
      
    </div>

    
   
  </div>

  <div className="flex -mx-2 mt-8">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Email</label>
    <input className="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Phone Number</label>
    <input className="border py-2 px-3 " type="text"/>
  </div>
      </div>
      
    </div>

    
   
  </div>

  <div className="flex -mx-2 mt-8">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Cell Number (For Texts)</label>
    <input className="border py-2 px-3 " type="text"></input>
  </div>
      </div>
    </div>
    <div className="w-1/2 px-2">
      <div className=" h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Fur Baby Image</label>
    <input className="border py-2 px-3 " type="text"/>
  </div>
      </div>
     
      
    </div>
   

    
   
  </div>
  <div className="mt-12 manually">
        <h1>STEP 2:  SELECT REASON FOR VISIT AND DATE</h1>
  </div>

  <div className="flex -mx-2 mt-8">
    <div className="w-1/2 px-2">
      <div className="h-12">
      <div className="flex flex-col mb-4 inputvision">
    <label className="mb-2" htmlFor="first_name">Visit Reason</label>
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
    <label className="mb-2" htmlFor="first_name">Schedule Date</label>
    <input className="border py-2 px-3 " type="text" placeholder="06/22/2019"/>
  </div>
      </div>
      
    </div>
     </div>
    
     <div className="mt-10">
        <button className="reviewBtn">OPTIONAL: REVIEW & CUSTOMIZE TREATMENT PLAN</button>
      </div>

     
     
    
    



    <div className="flex mb-4 mt-5 h-24 allButtons">
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
               </div>
        <Style/>
        </div>
    );
}
export default SectionTwo;
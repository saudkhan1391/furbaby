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
      <div className="flex h-12 form1">
      <input type="text" name="fname" placeholder=" SEARCH..."></input>
     <div className=" img">
         <img src={require('../../../assets/images/search.png')}/>
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
    <div className="flex justify-between">
   <div>
       <img className="mb-1 ml-1 inline" src ={require('../../../assets/images/avatar.png')} /> <span className="ml-1 amanda">HOLT, THOMAS  |  610-444-0098</span>
    </div>
    <div>
        <button className="viewRecordsBtn">VIEW RECORDS</button>
    </div>
   </div>
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

    
  
 

    
    <div className="w-1/2 px-2 pl-16">
     <div className="holtHeading">
       <h1>HOLT, THOMAS  |  610-444-0098</h1>
     </div>
     <div className="flex mt-4">
       <button className="btn1">RE-SEND FUR BABY TRACKER INVITE</button>
       <button className="btn1 ml-2">ADD ADDITIONAL POINT OF CONTACT</button>
       <button className="btn1 ml-2">ADD ADDITIONAL FUR BABY</button>
     </div>
      <div className="px-2">
  <div className="flex -mx-2 pt-6">
    
    <div className="px-8 pl-0">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden shadow-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
  <div className="img1">
  <img src={require('../../../assets/images/img-placeholder.png')} />
  </div>
  </div>
  <div className="px-6 pt-10 py-5 flex justify-center m-auto items-center content-center forText">
   <p>Max Holt<br></br>
        <span className="newVisitButton"><button className="mt-6">SCHEDULE NEW VISIT</button></span>
    </p>
  </div>
</div>
      </div>
    </div>
    <div className="px-8 pl-0">
    <div className="max-w-sm rounded overflow-hidden shadow-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
    <div className="img1">
  <img src={require('../../../assets/images/img-placeholder1.png')} />
  </div>
  </div>
  <div className="px-6 pt-10 py-5 flex justify-center m-auto items-center content-center forText">
    <p>
    Kevin Holt<br></br>
       <span className="newVisitButton"><button className="mt-6">SCHEDULE NEW VISIT</button></span>
    </p>
  </div>
</div>
    </div>
    <div className="px-8 pl-0">
    <div className="max-w-sm rounded overflow-hidden shadow-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-5">
  <div className="img1">
  <img src={require('../../../assets/images/img-placeholder2.png')} />
  </div>
  </div>
  <div className="px-6 pt-10 py-5 flex justify-center m-auto items-center content-center forText">
        <p>
        Tin-Tin Holt<br></br>
          <span className="newVisitButton"><button className="mt-6">SCHEDULE NEW VISIT</button></span>
        </p>
  </div>
</div>
    </div>
 
 
  </div>
  <div className="px-0 mt-12">
    <div className="schedule-Repeat-Visit-Heading">
      <h1>SCHEDULE REPEAT VISIT</h1>
    </div>
    <div  className="schedule-Repeat-Visit-Paragraph mt-2">
    <p>Check the box next to the name of the previous visit to repeat a visit for one or more fur babies.</p>
    </div>

</div>













<div className="h-screen1">

<div className="flex -mx-2 pt-6">
    
    <div className="px-8 pl-0">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden shadow-border">
  
  <div className="px-8 py-4 flex justify-center m-auto pt-5">
  <div className="img1">
  <img src={require('../../../assets/images/img-placeholder.png')} />
  </div>
  </div>
  <div className="px-6 pt-10 py-5 flex justify-center m-auto items-center content-center forText">
   <p>Max Holt<br></br>
        
    </p>
  </div>
  <div className="px-6 py-4 justify-center m-auto items-center content-center pl-0 pr-0 pb-0">
     <div className="flex justify-center m-auto items-center content-center ">
     <hr className="style2"/>
     </div>
     <div className="label pl-4 pt-2 pb-4">
    
     
     <div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
         </div>
     
  </div>
</div>
      </div>
    </div>
    <div className="px-8 pl-0">
    <div className="max-w-sm rounded overflow-hidden shadow-border">
  
  <div className="px-8 py-4 flex justify-center m-auto pt-5">
    <div className="img1">
  <img src={require('../../../assets/images/img-placeholder1.png')} />
  </div>
  </div>
  <div className="px-6 pt-10 py-5 flex justify-center m-auto items-center content-center forText">
    <p>
    Kevin Holt<br></br>
       
    </p>
  </div>
  <div className="px-6 py-4 justify-center m-auto items-center content-center pl-0 pr-0 pb-0">
     <div className="flex justify-center m-auto items-center content-center ">
     <hr className="style2"/>
     </div>
     <div className="label pl-4 pt-2 pb-4">
    
     <div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
         </div>
     
     
  </div>
</div>
    </div>
    <div className="px-8 pl-0">
    <div className="max-w-sm rounded overflow-hidden shadow-border">
  
  <div className="px-8 py-4 flex justify-center m-auto pt-5">
  <div className="img1">
  <img src={require('../../../assets/images/img-placeholder2.png')} />
  </div>
  </div>
  <div className="px-6 pt-10 py-5 flex justify-center m-auto items-center content-center forText">
        <p>
        Tin-Tin Holt<br></br>
         
        </p>
  </div>
  <div className="px-6 py-4 justify-center m-auto items-center content-center pl-0 pr-0 pb-0">
     <div className="flex justify-center m-auto items-center content-center ">
     <hr className="style2"/>
     </div>
     <div className="label pl-4 pt-2 pb-4">
    
     <div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
<div className="flex mr-12 mt-4 check-mar2">
<label className="container1">
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
<label>Checkbox Label</label>
</div>
         </div>

         
     
     
  </div>
  

</div>

    </div>
  
 
 
  </div>
 
  <div className="schedule-Selected-Button mt-12">
  <button>SCHEDULE SELECTED REPEAT TREATMENT(S)</button>
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
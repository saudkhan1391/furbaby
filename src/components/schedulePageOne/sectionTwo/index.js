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
      <div className="flex h-12 ml-10 form">
      <input type="text" name="fname" placeholder="  Search for a schedule pet"></input>
     <div className=" img">
         <img src={require('../../../assets/images/search.png')} alt="pic"/>
     </div>
      </div>
      <div className="carousel">
    <div className="carousel-inner">
        <input className="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
        <div className="carousel-item">
       
      <div className="px-2">
  <div className="flex -mx-2 pt-8">
    
    <div className="w-1/3 px-8 middle">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
    <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
  <div className="px-6 py-4 justify-center m-auto items-center content-center">
     <div className="btnBlue1 flex justify-center m-auto items-center content-center">
     <button className="btnBlue1 flex justify-center m-auto items-center content-center">check-in</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">edit or reschedule</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">remove from schedule</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">resend owner invite</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">view patient record</button>
     </div>
  </div>
</div>
    </div>
    <div className="w-1/3 px-8 middle2">
    <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
    
        </div>
        <input className="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
        <div className="carousel-item">
        
      <div className="px-2">
  <div className="flex -mx-2 pt-8">
    
    <div className="w-1/3 px-8 middle">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
    <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
  <div className="px-6 py-4 justify-center m-auto items-center content-center">
     <div className="btnBlue1 flex justify-center m-auto items-center content-center">
     <button className="btnBlue1 flex justify-center m-auto items-center content-center">check-in</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">edit or reschedule</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">remove from schedule</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">resend owner invite</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">view patient record</button>
     </div>
  </div>
</div>
    </div>
    <div className="w-1/3 px-8 middle2">
    <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
    
        </div>
        <input className="carousel-open hidden" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
        <div className="carousel-item">
       
      <div className="px-2">
  <div className="flex -mx-2 pt-8">
    
    <div className="w-1/3 px-8 middle">
      <div className="h-12">
      <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
    <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
  <div className="px-6 py-4 justify-center m-auto items-center content-center">
     <div className="btnBlue1 flex justify-center m-auto items-center content-center">
     <button className="btnBlue1 flex justify-center m-auto items-center content-center">check-in</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">edit or reschedule</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">remove from schedule</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">resend owner invite</button>
     </div>
     <div className=" flex justify-center m-auto items-center content-center mt-2">
     <button className="btnWhite flex justify-center m-auto items-center content-center">view patient record</button>
     </div>
  </div>
</div>
    </div>
    <div className="w-1/3 px-8 middle2">
    <div className="max-w-sm rounded overflow-hidden foursided-border">
  
  <div className="px-6 py-4 flex justify-center m-auto pt-12">
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
    
        </div>
        <label for="carousel-3" className="carousel-control prev control-1"><img src={require('../../../assets/images/preview5.png')} alt="pic"/></label>
        <label for="carousel-2" className="carousel-control next control-1"><img src={require('../../../assets/images/next5.png')} alt="pic"/></label>
        <label for="carousel-1" className="carousel-control prev control-2"><img src={require('../../../assets/images/preview5.png')} alt="pic"/></label>
        <label for="carousel-3" className="carousel-control next control-2"><img src={require('../../../assets/images/next5.png')} alt="pic"/></label>
        <label for="carousel-2" className="carousel-control prev control-3"><img src={require('../../../assets/images/preview5.png')} alt="pic"/></label>
        <label for="carousel-1" className="carousel-control next control-3"><img src={require('../../../assets/images/next5.png')} alt="pic"/></label>
       
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
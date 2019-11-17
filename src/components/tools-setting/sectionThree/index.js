import React from 'react';
import Style from './style';
const SectionThree=()=>{
    return(
        <div>

<div className="container mx-auto">
<div className="flex ">
  <div className="w-full py-12 forBg-clr6">
  <div className="flex mt-6 justify-around for-All-Numbers">
      <div>
          <h1>50</h1><br></br>
          <span className="for-All-span">COMPLETED</span>
      </div>
      <div>
          <h1>36</h1><br></br>
          <span className="for-All-span">SCHEDULLED</span>
      </div>
      <div>
          <h1>$450</h1><br></br>
          <span className="for-All-span">REVENUE GENERATED</span>
      </div>
      <div>
          <h1>$530</h1><br></br>
          <span className="for-All-span">REVENUE PENDING</span>
      </div>
      <div className="for-ceneter">
          <h1>$530</h1><br></br>
          <span className="for-All-span">TOTAL REVENUE  GENERATED</span>
                 
      </div>

     </div>
  </div>
</div>
</div>


            <Style/>
        </div>
        
    );
}
export default SectionThree;
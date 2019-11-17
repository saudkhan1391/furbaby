import React from 'react';
import Style from './style';
const SectionTwo=()=>{
    return(
        <div>
          <div className="container mx-auto mt-8">
<div className="flex mb-4">
  <div className="w-fullh-12">
  <p className="composeNote mt-4">Compose Treatment Mass Message<span className="deliveredEmail ml-6">Delivered via email, push notification & text message</span></p>
  <div className="fotText-area mt-2"><textarea rows="5" cols="207"></textarea></div>
  </div>
</div>
<div className="flex h-16">
<div className="sendbtn1">
    <button>SEND</button>
</div>

</div>
    </div>
            <Style/>
        </div>
        
    );
}
export default SectionTwo;
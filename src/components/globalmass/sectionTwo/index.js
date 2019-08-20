import React from 'react';
import Style from './style';
const SectionTwo=()=>{
    return(
        <div>
          <div class="container mx-auto mt-8">
<div class="flex mb-4">
  <div class="w-fullh-12">
  <p class="composeNote mt-4">Compose Global Mass Message<span class="deliveredEmail ml-6">Delivered via email, push notification & text message</span></p>
  <div class="fotText-area mt-2"><textarea rows="5" cols="207"></textarea></div>
  </div>
</div>
<div class="flex h-16">
<div class="sendbtn1">
    <button>SEND</button>
</div>

</div>
    </div>
            <Style/>
        </div>
        
    );
}
export default SectionTwo;
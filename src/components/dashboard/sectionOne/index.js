import React from 'react'
import Style from './style';

const SectionOne=()=>{
    return (
        
        <div>
            <div class="container mx-auto">
        <section class="left-col">    
        <div>
            <button class="btn-background mt-10 font-bold">SYNC TO PRACTICE MANAGEMENT SOFTWARE</button>
        </div>

        <div>
            <div class="schedule-table mt-10">
                <div class="rectangle pt-2">
                    <img class="sch-img pl-6 pb-1" src={require('../../../assets/images/calendar-1.png')} alt = "pic"/>
                    <span class="pl-1 pt-4 text-xl font-bold">Schedule</span>
                </div>
                <div class="pl-6 pt-6">
                    <b>View & Edit</b> Scheduled Fur Babies
                    <img class="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next.png')} alt = "pic"/>
                </div>
                <div class="pl-6 pt-6 pb-6">
                    <b>Add</b> a Fur Baby to the Schedule
                    <img class="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next.png')} alt = "pic"/>
                </div>
            </div>
        </div>
        <div>
            <div class="database-table mt-10">
                <div class="rectangle-db pt-2">
                    <img class="sch-img pl-6 pb-1" src={require('../../../assets/images/inbox.png')} alt = "pic"/>
                    <span class="pl-1 pt-4 text-xl font-bold">FUR BABY DATABASE</span>
                </div>
                <div class="pl-6 pt-6">
                    <b>View & Edit</b> Existing Fur Babies
                    <img class="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next1.png')} alt = "pic"/>
                </div>
                <div class="pl-6 pt-6 pb-6">
                    <b>Add</b> a Fur Baby to the Database
                    <img class="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next1.png')} alt = "pic"/>
                </div>
            </div>
        </div>
        <div>
            <div class="tools-table mt-10">
                <div class="rectangle-tools pt-2">
                    <img class="sch-img pl-6 pb-1" src={require('../../../assets/images/settings-2.png')} alt = "pic"/>
                    <span class="pl-1 pt-4 text-xl font-bold">FUR BABY DATABASE</span>
                </div>
                <div class="pl-6 pt-6">
                    <b>View &amp; Edit</b> Preferences &amp; Settings

                    <img class="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt = "pic"/>
                </div>
                <div class="pl-6 pt-6 ">
                    <b>Manage and Send</b> Notifications
                    <img class="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt = "pic"/>
                </div>
                <div class="pl-6 pt-6">
                        <b>Manage &amp; View</b> Billing Settings
                    <img class="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt = "pic"/>
                </div>
                <div class="pl-6 pt-6 pb-6">
                    <b>Manage and Send</b> PMS Integration
                    <img class="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt = "pic"/>
                </div>
            </div>
        </div>
        </section>
        <section class="right-body">
            <div style={{display:"flex;justify-content:space-around"}} class="mt-10">
                <button class="chk-btn-background font-bold ml-12">CHECK-IN A SCHEDULED FUR BABY</button>
                <label class=" float-right font-bold">Today, January 15, 2019</label>
            </div>

            <div style={{display:"flex;justify-content:space-around"}} class="mt-12">
                <label class="font-bold ml-12 lbl-2">IN PROGRESS</label>
                <button class="snd-btn-background  font-bold float-right">SEND GLOBAL MESSAGE</button>
            </div>
            <div class="hr ml-12 mt-4"></div>

            <div style={{display:"flex;justify-content:space-around"}} class="mt-8">
                <label class="font-bold ml-12 lbl-3">BOARDERS</label>
                <button class="view-btn-background  font-bold float-right">VIEW All</button>
                <button class="mass-bord-btn-background  font-bold float-right mr-4">SEND MASS BOARDER MESSAGE</button>
                <button class="mass-btn-background  font-bold float-right mr-4">MASS UPDATE</button>
            </div>


<div class="flex mt-12 justify-center">

            <div class="flex-1 h-12 ml-4 max-w-sm">
  <div class="max-w-sm rounded overflow-hidden shadow-bord">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-8">
  <div class="bordercheckcomp">
  <div class="img1">
  <img src={require('../../../assets/images/img1-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  </div>
  <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Todd Capitanio

         <br></br>
          <span class="normal"> Day 2/2</span>
        </p>
  </div>
</div>
  </div>

  <div class="flex-1 h-12 ml-4 max-w-sm">
  <div class="max-w-sm rounded overflow-hidden shadow-bord">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-8">
  <div class="bordercheck">
  <div class="img7">
  <img src={require('../../../assets/images/img2-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  </div>
  <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Daisy Stevens

         <br></br>
          <span class="normal"> Day 1/5</span>
        </p>
  </div>
</div>
  </div>


  <div class="flex-1 h-12 ml-4 max-w-sm">
  <div class="max-w-sm rounded overflow-hidden shadow-bord">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-8">
  <div class="bordercheck">
  <div class="img3">
  <img src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  </div>
  <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Toby Torres

         <br></br>
          <span class="normal"> Day 1/2</span>
        </p>
  </div>
</div>
  </div>



  <div class="flex-1 h-12 ml-4 max-w-sm">
  <div class="max-w-sm rounded overflow-hidden shadow-bord">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-8">
  <div class="bordercheck">
  <div class="img4">
  <img src={require('../../../assets/images/img4-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  </div>
  <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Todd Capitanio

         <br></br>
          <span class="normal"> Day 2/2</span>
        </p>
  </div>
</div>
</div>

  </div>
  <div class="hr ml-12 mt-12"></div>


  <div style={{display:"flex;justify-content:space-around"}} class="mt-8">
                <label class="font-bold ml-12 lbl-3">TREATMENTS</label>
                <button class="view-btn-background  font-bold float-right">VIEW All</button>
                <button class="mass-bord-btn-background  font-bold float-right mr-4">SEND MASS BOARDER MESSAGE</button>
                
            </div>


<div class="flex mt-12 justify-center mb-12">

            <div class="flex-1 h-12 ml-4 max-w-sm">
  <div class="max-w-sm rounded overflow-hidden shadow-bord">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-8">
  <div class="bordercheckcomp">
  <div class="img1">
  <img src={require('../../../assets/images/img1-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  </div>
  <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Todd Capitanio

         <br></br>
          <span class="normal"> Day 2/2</span>
        </p>
  </div>
</div>
  </div>

  <div class="flex-1 h-12 ml-4 max-w-sm">
  <div class="max-w-sm rounded overflow-hidden shadow-bord">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-8">
  <div class="bordercheck">
  <div class="img7">
  <img src={require('../../../assets/images/img2-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  </div>
  <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Daisy Stevens

         <br></br>
          <span class="normal"> Day 1/5</span>
        </p>
  </div>
</div>
  </div>


  <div class="flex-1 h-12 ml-4 max-w-sm">
  <div class="max-w-sm rounded overflow-hidden shadow-bord">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-8">
  <div class="bordercheck">
  <div class="img3">
  <img src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  </div>
  <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Toby Torres

         <br></br>
          <span class="normal"> Day 1/2</span>
        </p>
  </div>
</div>
  </div>



  <div class="flex-1 h-12 ml-4 max-w-sm">
  <div class="max-w-sm rounded overflow-hidden shadow-bord">
  
  <div class="px-6 py-4 flex justify-center m-auto pt-8">
  <div class="bordercheck">
  <div class="img4">
  <img src={require('../../../assets/images/img4-placeholder.png')} alt = "pic"/>
  </div>
  </div>
  </div>
  <div class="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
        <p>
        Todd Capitanio

         <br></br>
          <span class="normal"> Day 2/2</span>
        </p>
  </div>
</div>
</div>

  </div>
        </section>
        </div>
        
        <Style />
        
        </div>
    )
}
export default SectionOne;
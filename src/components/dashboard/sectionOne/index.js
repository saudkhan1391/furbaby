import React from 'react'
import Style from './style';
import CarouselTwo from '../../../commoncomponents/carouselTwo';

const SectionOne=(props)=>{
    let { appointments, dispatch } = props;

    return (

        <div>
            <div className="container mx-auto">
                <section className="left-col w-1/5">
                    {/*<div>*/}
                        {/*<button className="btn-background mt-10 font-bold">SYNC TO PRACTICE MANAGEMENT SOFTWARE</button>*/}
                    {/*</div>*/}

                    <div>
                        <div className="schedule-table mt-10">
                            <div className="rectangle pt-2">
                                <img className="sch-img pl-6 pb-1" src={require('../../../assets/images/calendar-1.png')} alt="pic"/>
                                <span className="pl-1 pt-4 text-xl font-bold">Schedule</span>
                            </div>
                            <div className="pl-6 pt-6">
                                <b>View & Edit</b> Scheduled Fur Babies
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next.png')} alt="pic"/>
                            </div>
                            <div className="pl-6 pt-6 pb-6">
                                <b>Add</b> a Fur Baby to the Schedule
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next.png')} alt="pic"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="database-table mt-10">
                            <div className="rectangle-db pt-2">
                                <img className="sch-img pl-6 pb-1" src={require('../../../assets/images/inbox.png')} alt="pic"/>
                                <span className="pl-1 pt-4 text-xl font-bold">FUR BABY DATABASE</span>
                            </div>
                            <div className="pl-6 pt-6">
                                <b>View & Edit</b> Existing Fur Babies
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next1.png')} alt="pic"/>
                            </div>
                            <div className="pl-6 pt-6 pb-6">
                                <b>Add</b> a Fur Baby to the Database
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next1.png')} alt="pic"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="tools-table mt-10">
                            <div className="rectangle-tools pt-2">
                                <img className="sch-img pl-6 pb-1" src={require('../../../assets/images/settings-2.png')} alt="pic"/>
                                <span className="pl-1 pt-4 text-xl font-bold">FUR BABY DATABASE</span>
                            </div>
                            <div className="pl-6 pt-6">
                                <b>View &amp; Edit</b> Preferences &amp; Settings

                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt="pic"/>
                            </div>
                            <div className="pl-6 pt-6 ">
                                <b>Manage and Send</b> Notifications
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt="pic"/>
                            </div>
                            <div className="pl-6 pt-6">
                                <b>Manage &amp; View</b> Billing Settings
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt="pic"/>
                            </div>
                            <div className="pl-6 pt-6 pb-6">
                                <b>Manage and Send</b> PMS Integration
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt="pic"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="right-body w-4/5">
                    <div className="mt-10">
                        <button className="chk-btn-background font-bold ml-12">CHECK-IN A SCHEDULED FUR BABY</button>
                        <label className=" float-right font-bold">Today, January 15, 2019</label>
                    </div>

                    <div className="mt-12">
                        <label className="font-bold ml-12 lbl-2">IN PROGRESS</label>
                        <button className="snd-btn-background  font-bold float-right">SEND GLOBAL MESSAGE</button>
                    </div>
                    <div className="hr ml-12 mt-4"/>

                    {/*<div className="mt-8">*/}
                        {/*<label className="font-bold ml-12 lbl-3">BOARDERS</label>*/}
                        {/*<button className="view-btn-background  font-bold float-right">VIEW All</button>*/}
                        {/*<button className="mass-bord-btn-background  font-bold float-right mr-4">SEND MASS BOARDER MESSAGE</button>*/}
                        {/*<button className="mass-btn-background  font-bold float-right mr-4">MASS UPDATE</button>*/}
                    {/*</div>*/}


                    {/*<Carousel />*/}
                    {/*<div className="hr ml-12 mt-12"/>*/}


                    <div className="mt-8">
                        <label className="font-bold ml-12 lbl-3">TREATMENTS</label>
                        <button className="view-btn-background  font-bold float-right">VIEW All</button>
                        <button className="mass-bord-btn-background  font-bold float-right mr-4">SEND MASS BOARDER MESSAGE</button>

                    </div>

                    <CarouselTwo appointments={appointments} dispatch={dispatch} />




                </section>
            </div> {/*container*/}


            <Style />

        </div>
    )
}
export default SectionOne;
import React from 'react'
import Style from './style';
import CarouselTwo from '../../../commoncomponents/carouselTwo';
import { standardDate } from "../../functions";
import { Link } from "react-router-dom";

const SectionOne=(props)=>{
    let { appointments, dispatch } = props;
    let inHospital = appointments.filter(item => (item.appointmentStatus === "In Hospital"));
    let complete = appointments.filter(item => (item.appointmentStatus === "Complete"));
    let date = standardDate(new Date());
    return (
        <div>

            <div className="container mx-auto resp-main-dash" style={{"padding":"0 15px"}}>
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
                            <Link to="/schedule">
                                <div className="pl-6 pt-6">
                                    View & Edit Scheduled Fur Babies
                                    <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next.png')} alt="pic"/>
                                </div>
                            </Link>
                            <Link to="/create-new">
                            <div className="pl-6 pt-6 pb-6">
                                Add a Fur Baby to the Schedule
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next.png')} alt="pic"/>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="database-table mt-10">
                            <div className="rectangle-db pt-2">
                                <img className="sch-img pl-6 pb-1" src={require('../../../assets/images/inbox.png')} alt="pic"/>
                                <span className="pl-1 pt-4 text-xl font-bold">FUR BABY DATABASE</span>
                            </div>
                            <Link to="/create-new">
                            <div className="pl-6 pt-6">
                                Create New Fur Baby
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next1.png')} alt="pic"/>
                            </div>
                            </Link>
                            <Link to="">
                            <div className="pl-6 pt-6 pb-6">
                                Add a Fur Baby to the Schedule
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next1.png')} alt="pic"/>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="tools-table mt-10">
                            <div className="rectangle-tools pt-2">
                                <img className="sch-img pl-6 pb-1" src={require('../../../assets/images/settings-2.png')} alt="pic"/>
                                <span className="pl-1 pt-4 text-xl font-bold">TOOLS & SETTINGS</span>
                            </div>
                            <Link to="/clinic-users">
                            <div className="pl-6 pt-6 ">
                                Manage Clinic Users
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt="pic"/>
                            </div>
                            </Link>
                            <Link to="/treatment-plans">
                            <div className="pl-6 pt-6">
                                Manage Treatment Plans
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt="pic"/>
                            </div>
                            </Link>
                            <Link to="/customize-notes">
                            <div className="pl-6 pt-6">
                                Manage Note Database
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt="pic"/>
                            </div>
                            </Link>
                            <Link to="/foods-and-medications">
                            <div className="pl-6 pt-6 pb-6">
                                Customize Medication &<br/> Food Dropdowns
                                <img className="sch-img pl-4 pb-1 float-right mr-2 mt-2" src={require('../../../assets/images/next2.png')} alt="pic"/>
                            </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="right-body w-4/5">
                    <div className="mt-10">
                        <Link to="/schedule">
                            <button className="chk-btn-background font-bold ml-12">CHECK-IN A SCHEDULED FUR BABY</button>
                        </Link>
                        <label className="date-lbl float-right font-bold">{date.dayNameHalf}, {date.monthName} {date.dateNumber}, {date.fullYear}</label>
                    </div>

                    <div className="mt-12">
                        <label className="font-bold ml-12 lbl-2">IN PROGRESS</label>
                        {/*<button className="snd-btn-background  font-bold float-right">SEND GLOBAL MESSAGE</button>*/}
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
                        <Link to="/in-progress" >
                            <button className="view-btn-background  font-bold float-right">VIEW All</button>
                        </Link>
                        {/*<button className="mass-bord-btn-background  font-bold float-right mr-4">SEND MASS BOARDER MESSAGE</button>*/}

                    </div>
                    <CarouselTwo appointments={inHospital} dispatch={dispatch} />
                    {
                        complete.length !== 0 &&
                            <div>
                                <div className="mt-8">
                                    <label className="font-bold ml-12 lbl-3">TREATMENTS</label>
                                    <Link to="/completed" >
                                        <button className="view-btn-background  font-bold float-right">VIEW All</button>
                                    </Link>

                                </div>
                                <div className="mt-12">
                                    <label className="font-bold ml-12 lbl-2">COMPLETE</label>
                                </div>
                                <div className="hr ml-12 mt-4"/>
                                <CarouselTwo appointments={complete} dispatch={dispatch} />
                            </div>
                    }
                </section>
            </div>


            <Style />

        </div>
    )
}
export default SectionOne;
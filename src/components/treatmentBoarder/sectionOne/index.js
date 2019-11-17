import React from 'react';
import Style from './style';
import Profile from '../../../commoncomponents/profile'; 

const SectionOne=() => {
    return(
        <div className="container mx-auto">
            <div>
                <div style={{display:"flex;justify-content:space-around"}} className="mt-12">
                    <label className="font-bold lbl-2">FUR BABY TRACKER RECORD - BOARDER</label><p className="inline pl-10 time tracking-wide">3  Days   |   November 1, 2 &amp; 3</p>
                    <button className="btn-background  font-bold float-right">RETURN TO IN PROGRESS DASHBOARD</button>
                </div>
            </div>
            <div className="hr mt-4"></div>

            <div className="main flex mt-12">
                <div className="profile mt-8 ml-8 flex mb-12">
                    <div className="flex-1 h-12 ml-4 max-w-sm">
                        <div className="max-w-sm rounded overflow-hidden shadow-bord">
                             <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                <div className="bordercheck">
                                    <div className="img3">
                                    <img src={require('../../../assets/images/img3-placeholder.png')} alt="pic"/>
                                    </div>
                                </div>
                            </div>
                                <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                    <p>
                                        Toby Torres
                                        <br></br>
                                        <span className="normal">Todays Visit <br /> Neuter</span>
                                    </p>
                                </div>
                        </div>
                    </div>

                    <Profile />

                    <div className="flex-1 ml-12 pl-12">
                        <div className="heading"><h3>FUR BABY TRACKER</h3></div>
                        <div>
                            <div className="flex tracks justify-between mt-5">
                                <div>
                                    <img className="inline mr-6" src={require('../../../assets/images/fill-3.png')} alt="pic"/>
                                    <label className="inline track-txt">Diagnostics</label>
                                </div>
                                <div className="mr-10 pr-2">
                                    <img className="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt="pic"/>
                                    <label className="inline track-txt">Medicated</label>
                                </div>
                            </div>

                            <div className="flex tracks justify-between mt-6">
                                <div>
                                    <img className="inline mr-6" src={require('../../../assets/images/stroke-3.png')} alt="pic"/>
                                    <label className="inline track-txt">Surgical Preparation</label>
                                </div>
                                <div className="mr-10 pr-5">
                                    <img className="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt="pic"/>
                                    <label className="inline track-txt">Nail Trim</label>
                                </div>
                            </div>

                            <div className="flex tracks justify-between mt-6">
                                <div>
                                    <img className="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt="pic"/>
                                    <label className="inline track-txt">Surgery</label>
                                </div>
                                <div className="mr-12 pr-2">
                                    <img className="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt="pic"/>
                                    <label className="inline track-txt">Recovery</label>
                                </div>
                            </div>

                            <div className="flex tracks justify-between mt-6">
                                <div>
                                    <img className="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt="pic"/>
                                    <label className="inline track-txt">Laser Therapy</label>
                                </div>
                                <div>
                                    <img className="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt="pic"/>
                                    <label className="inline track-txt">Ready for Pick-Up</label>
                                </div>
                            </div>
                        </div>


                        <div>
                        <div className="flex tracks-comp justify-between mt-10">
                                <div className="track-txt-comp">
                                    <img className="inline mr-3" src={require('../../../assets/images/stroke-2.png')} alt="pic"/>
                                    <label className="inline">In Progress - Click once.</label>
                                </div>
                                <div className="track-txt-comp">
                                    <img className="inline mr-3" src={require('../../../assets/images/fill-2.png')} alt="pic"/>
                                    <label className="inline">Complete - Click twice.</label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <button className="update-btn">UPDATE</button>
                        </div>
                    </div>{/*Pointed*/}
                </div>{/*profile*/}
            </div>{/*main*/}
            <Style />
        </div>  /*container*/
    );
}

export default SectionOne;
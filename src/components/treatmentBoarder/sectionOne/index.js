import React from 'react';
import Style from './style';
import Profile from '../../../commoncomponents/profile'; 

const SectionOne = () => {
    return(
        <div class="container mx-auto">
            <div>
                <div style={{display:"flex;justify-content:space-around"}} class="mt-12">
                    <label class="font-bold lbl-2">FUR BABY TRACKER RECORD - BOARDER</label><p class="inline pl-10 time tracking-wide">3  Days   |   November 1, 2 &amp; 3</p>
                    <button class="btn-background  font-bold float-right">RETURN TO IN PROGRESS DASHBOARD</button>
                </div>
            </div>
            <div class="hr mt-4"></div>

            <div class="main flex mt-12">
                <div class="profile mt-8 ml-8 flex mb-12">
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
                                        <span class="normal">Todays Visit <br /> Neuter</span>
                                    </p>
                                </div>
                        </div>
                    </div>

                    <Profile />

                    <div class="flex-1 ml-12 pl-12">
                        <div class="heading"><h3>FUR BABY TRACKER</h3></div>
                        <div>
                            <div class="flex tracks justify-between mt-5">
                                <div>
                                    <img class="inline mr-6" src={require('../../../assets/images/fill-3.png')} alt = "pic"/>
                                    <label class="inline track-txt">Diagnostics</label>
                                </div>
                                <div class="mr-10 pr-2">
                                    <img class="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt = "pic"/>
                                    <label class="inline track-txt">Medicated</label>
                                </div>
                            </div>

                            <div class="flex tracks justify-between mt-6">
                                <div>
                                    <img class="inline mr-6" src={require('../../../assets/images/stroke-3.png')} alt = "pic"/>
                                    <label class="inline track-txt">Surgical Preparation</label>
                                </div>
                                <div class="mr-10 pr-5">
                                    <img class="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt = "pic"/>
                                    <label class="inline track-txt">Nail Trim</label>
                                </div>
                            </div>

                            <div class="flex tracks justify-between mt-6">
                                <div>
                                    <img class="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt = "pic"/>
                                    <label class="inline track-txt">Surgery</label>
                                </div>
                                <div class="mr-12 pr-2">
                                    <img class="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt = "pic"/>
                                    <label class="inline track-txt">Recovery</label>
                                </div>
                            </div>

                            <div class="flex tracks justify-between mt-6">
                                <div>
                                    <img class="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt = "pic"/>
                                    <label class="inline track-txt">Laser Therapy</label>
                                </div>
                                <div>
                                    <img class="inline mr-6" src={require('../../../assets/images/fill-1.png')} alt = "pic"/>
                                    <label class="inline track-txt">Ready for Pick-Up</label>
                                </div>
                            </div>
                        </div>


                        <div>
                        <div class="flex tracks-comp justify-between mt-10">
                                <div class="track-txt-comp">
                                    <img class="inline mr-3" src={require('../../../assets/images/stroke-2.png')} alt = "pic"/>
                                    <label class="inline">In Progress - Click once.</label>
                                </div>
                                <div class="track-txt-comp">
                                    <img class="inline mr-3" src={require('../../../assets/images/fill-2.png')} alt = "pic"/>
                                    <label class="inline">Complete - Click twice.</label>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12">
                            <button class="update-btn">UPDATE</button>
                        </div>
                    </div>{/*Pointed*/}
                </div>{/*profile*/}
            </div>{/*main*/}
            <Style />
        </div>  /*container*/
    );
}

export default SectionOne;
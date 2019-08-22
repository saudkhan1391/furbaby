import React from 'react';
import Style from './style';
import Layout from '../../layout';

const SectionTwo = () => {
    return (
        <div>
                <div class="container mx-auto">
                    <div class="mt-12 mb-6 heading">
                        <h3>ACTIVITY REPORT</h3>
                    </div>

                    <div>
                        <div class="activity mb-6">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Medication</h3></div>
                                <div class="act-2"><button>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <p class="mt-2">Tramadol 7:25 AM</p>
                                <p class="mt-2">Amoxicillin 3:41 PM</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="activity mb-6">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Food</h3></div>
                                <div class="act-2"><button>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <p class="mt-2">Royal Canin Breed Health, 1/2 Cup</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="activity mb-6">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Pee &amp; Poop</h3></div>
                                <div class="act-2"><button>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <p class="mt-2">Pee 8:11 AM</p>
                                <p class="mt-2">Pee &amp; Poop 12:37 PM</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="activity mb-6">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Notes</h3></div>
                                <div class="act-2"><button>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <p class="mt-2">Tobby is doing great and is getting settled in. We will update her tracker when she goes into diagnostics.</p>
                            </div>
                        </div>
                    </div>

                    <div class="pb-12 mb-12">
                        <div class="activity mb-12">
                            <div class=" flex act-top justify-between px-5 py-5">
                                <div class="act-1"><h3>Snapshots</h3></div>
                                <div class="act-2"><button>ADD ACTIVITY</button></div>
                            </div>
                            
                            <div class="act-data justify-between px-5 py-5">
                                <h3>Posted Activities</h3>
                                <div class="flex mt-5 mb-4">
                                <img class="mr-5" src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
                                <img class="mr-5" src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
                                <img src={require('../../../assets/images/img3-placeholder.png')} alt = "pic"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Style />
        </div>
    );
} 

export default SectionTwo;
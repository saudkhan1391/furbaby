import React from 'react';
import Style from './style';
const SectionOne = () => {
    return(
        <div>
                <div class="container mx-auto">
                    <div class="mt-12">
                        <h2 class="heading">MANAGE USERS</h2>
                        <div class="hr mt-4"></div>
                    </div>
                    <div class="mt-12 mb-8">
                        <h2 class="heading-2">ADD A NEW FUR BABY TRACKER USER</h2>
                    </div>
                    <div class="flex">
                        <div class="mr-12">
                            <label class="block label-text mb-2">User First Name</label>
                            <input class="input-field py-1  px-2" type="text"></input>
                        </div>
                        <div class="mr-12">
                            <label class="block label-text mb-2">User Last Name</label>
                            <input class="input-field py-1  px-2" type="text"></input>
                        </div>
                        <div class="mr-12">
                            <label class="block label-text mb-2">Email</label>
                            <input class="input-field py-1  px-2" type="text"></input>
                        </div>
                        <div>
                            <label class="block label-text mb-2">Job Title</label>
                            <input class="input-field py-1  px-2" type="text"></input>
                        </div>
                    </div>

                    <div class="mt-12 main-check px-12 py-8">
                        <div>
                            <h2 class="heading-3 mb-8">PERMISSIONS</h2>
                        </div>
                        <div class="mb-6">
                        <div class="flex">
                            <div class="flex mr-12 check-mar">
                            <label class="container1 inline">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label><p class="inline pl-10">Label</p>
                            </div>  
                        
                            <div class="flex mr-12 check-mar">
                            <label class="container1 inline">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label><p class="inline pl-10">Label</p>
                            </div>  
                        
                        
                            <div class="flex mr-12 check-mar">
                            <label class="container1 inline">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label><p class="inline pl-10">Label</p>
                            </div>  
                       
                        
                            <div class="flex mr-12 check-mar">
                            <label class="container1 inline">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label><p class="inline pl-10">Label</p>
                            </div>  
                            </div>
                        </div>
                        <div>
                        <div class="flex">
                            <div class="flex mr-12 check-mar">
                            <label class="container1 inline">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label><p class="inline pl-10">Label</p>
                            </div>  
                        
                            <div class="flex mr-12 check-mar">
                            <label class="container1 inline">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label><p class="inline pl-10">Label</p>
                            </div>  
                        
                        
                            <div class="flex mr-12 check-mar">
                            <label class="container1 inline">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label><p class="inline pl-10">Label</p>
                            </div>  
                       
                        
                            <div class="flex mr-12 check-mar">
                            <label class="container1 inline">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            </label><p class="inline pl-10">Label</p>
                            </div>  
                            </div>
                        </div>
                    </div>{/*Checkboxes*/}
                    <div class="mt-8">
                        <button class="inline btn-chk1 mr-4">ADD &amp; SEND INVITE</button>
                        {/*<button class="inline btn-chk2">DEACTIVATE USER</button>*/}
                    </div>
                    <div class="mt-12 mb-8">
                        <h2 class="heading-2">USER MANAGEMENT</h2>
                    </div>
                    <div>
                        <table class="mb-12 table-data">
                            <th></th>
                            <th class="text-left head-text pb-2">User Name</th>
                            <th class="text-left head-text">Email</th>
                            <th class="text-left head-text">Job Title</th>
                            <th class="text-left head-text">Status</th>
                            <th class="text-left head-text">Actions</th>
                            <tbody>
                                <tr class="data-back-g">
                                    <td class="py-5 pl-5 img"><img class="inline" src={require('../../../assets/images/oval-1.png')} alt = "pic"/></td>
                                    <td class="py-5 pr-5 pl-0 text">Joysce Lynch</td>
                                    <td class="py-5 email text">joyce.lynch@company.com</td>
                                    <td class="py-5 pr-5 text">Techinian</td>
                                    <td class="py-5 pr-5 flex text"><div class="oval-g mr-3"></div>Active</td>
                                    <td class="py-5 pr-5 last text"><button class="action-btn1 mr-4">EDIT USER</button><button class="action-btn3 mr-4">DEACTIVATE USER</button><button class="action-btn2">RESET PASSWORD</button></td>
                                </tr>
                                <tr class="data-back">
                                    <td class="py-5 pl-5 img"><img class="inline" src={require('../../../assets/images/oval-2.png')} alt = "pic"/></td>
                                    <td class="py-5 pr-5 pl-0 text">Philip Little</td>
                                    <td class="py-5 email text">hellophilip@gmail.com</td>
                                    <td class="py-5 pr-5 text">Techinian</td>
                                    <td class="py-5 pr-5 flex text"><div class="oval-r mr-3"></div>Inactive</td>
                                    <td class="py-5 pr-5 last text"><button class="action-btn1 mr-4">EDIT USER</button><button class="action-btn3 mr-4">DEACTIVATE USER</button><button class="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                <tr class="data-back-g">
                                    <td class="py-5 pl-5 img"><img class="inline" src={require('../../../assets/images/oval-3.png')} alt = "pic"/></td>
                                    <td class="py-5 pr-5 pl-0 text">Marilyn Castro</td>
                                    <td class="py-5 email text">castro.marilyn@microsoft.com</td>
                                    <td class="py-5 pr-5 text">Techinian</td>
                                    <td class="py-5 pr-5 flex text"><div class="oval-r mr-3"></div>Inactive</td>
                                    <td class="py-5 pr-5 last text"><button class="action-btn1 mr-4">EDIT USER</button><button class="action-btn3 mr-4">DEACTIVATE USER</button><button class="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                <tr class="data-back">
                                    <td class="py-5 pl-5 img"><img class="inline" src={require('../../../assets/images/oval-4.png')} alt = "pic"/></td>
                                    <td class="py-5 pr-5 pl-0 text">Jacqueline Thomas</td>
                                    <td class="py-5 email text">jacqueline.thomas@gmail.com</td>
                                    <td class="py-5 pr-5 text">Techinian</td>
                                    <td class="py-5 pr-5 flex text"><div class="oval-g mr-3"></div>Active</td>
                                    <td class="py-5 pr-5 last text"><button class="action-btn1 mr-4">EDIT USER</button><button class="action-btn3 mr-4">DEACTIVATE USER</button><button class="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                <tr class="data-back-g">
                                    <td class="py-5 pl-5 img"><img class="inline" src={require('../../../assets/images/oval-5.png')} alt = "pic"/></td>
                                    <td class="py-5 pr-5 pl-0 text">Angela Davidson</td>
                                    <td class="py-5 email text">angela-davidson@me.com</td>
                                    <td class="py-5 pr-5 text">Techinian</td>
                                    <td class="py-5 pr-5 flex text"><div class="oval-r mr-3"></div>Inactive</td>
                                    <td class="py-5 pr-5 last text"><button class="action-btn1 mr-4">EDIT USER</button><button class="action-btn3 mr-4">DEACTIVATE USER</button><button class="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                    <tr class="data-back">
                                    <td class="py-5 pl-5 img"><img class="inline" src={require('../../../assets/images/oval-6.png')} alt = "pic"/></td>
                                    <td class="py-5 pr-5 pl-0 text">Christine Keller</td>
                                    <td class="py-5 email text">christine.k@op25.com</td>
                                    <td class="py-5 pr-5 text">Techinian</td>
                                    <td class="py-5 pr-5 flex text"><div class="oval-g mr-3"></div>Active</td>
                                    <td class="py-5 pr-5 last text"><button class="action-btn1 mr-4">EDIT USER</button><button class="action-btn3 mr-4">DEACTIVATE USER</button><button class="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                <tr class="data-back-g">
                                    <td class="py-5 pl-5 img"><img class="inline" src={require('../../../assets/images/oval-7.png')} alt = "pic"/></td>
                                    <td class="py-5 pr-5 pl-0 text">Ron Swanson</td>
                                    <td class="py-5 email text">heyiamron@swanson.com</td>
                                    <td class="py-5 pr-5 text">Techinian</td>
                                    <td class="py-5 pr-5 flex text"><div class="oval-g mr-3"></div>Active</td>
                                    <td class="py-5 pr-5 last text"><button class="action-btn1 mr-4">EDIT USER</button><button class="action-btn3 mr-4">DEACTIVATE USER</button><button class="action-btn2">RESET PASSWORD</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>{/*container*/}
                <Style />
        </div>
    );
}

export default SectionOne;
import React from 'react';
import Style from './style';
const SectionOne=() => {
    return(
        <div>
                <div className="container mx-auto">
                    <div className="mt-12">
                        <h2 className="heading">MANAGE USERS</h2>
                        <div className="hr mt-4"></div>
                    </div>
                    <div className="mt-12 mb-8">
                        <h2 className="heading-2">ADD A NEW FUR BABY TRACKER USER</h2>
                    </div>
                    <div className="flex">
                        <div className="mr-12">
                            <label className="block label-text mb-2">User First Name</label>
                            <input className="input-field py-1  px-2" type="text"></input>
                        </div>
                        <div className="mr-12">
                            <label className="block label-text mb-2">User Last Name</label>
                            <input className="input-field py-1  px-2" type="text"></input>
                        </div>
                        <div className="mr-12">
                            <label className="block label-text mb-2">Email</label>
                            <input className="input-field py-1  px-2" type="text"></input>
                        </div>
                        <div>
                            <label className="block label-text mb-2">Job Title</label>
                            <input className="input-field py-1  px-2" type="text"></input>
                        </div>
                    </div>

                    <div className="mt-12 main-check px-12 py-8">
                        <div>
                            <h2 className="heading-3 mb-8">PERMISSIONS</h2>
                        </div>
                        <div className="mb-6">
                        <div className="flex">
                            <div className="flex mr-12 check-mar">
                            <label className="container1 inline">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label><p className="inline pl-10">Label</p>
                            </div>  
                        
                            <div className="flex mr-12 check-mar">
                            <label className="container1 inline">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label><p className="inline pl-10">Label</p>
                            </div>  
                        
                        
                            <div className="flex mr-12 check-mar">
                            <label className="container1 inline">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label><p className="inline pl-10">Label</p>
                            </div>  
                       
                        
                            <div className="flex mr-12 check-mar">
                            <label className="container1 inline">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label><p className="inline pl-10">Label</p>
                            </div>  
                            </div>
                        </div>
                        <div>
                        <div className="flex">
                            <div className="flex mr-12 check-mar">
                            <label className="container1 inline">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label><p className="inline pl-10">Label</p>
                            </div>  
                        
                            <div className="flex mr-12 check-mar">
                            <label className="container1 inline">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label><p className="inline pl-10">Label</p>
                            </div>  
                        
                        
                            <div className="flex mr-12 check-mar">
                            <label className="container1 inline">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label><p className="inline pl-10">Label</p>
                            </div>  
                       
                        
                            <div className="flex mr-12 check-mar">
                            <label className="container1 inline">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label><p className="inline pl-10">Label</p>
                            </div>  
                            </div>
                        </div>
                    </div>{/*Checkboxes*/}
                    <div className="mt-8">
                        <button className="inline btn-chk1 mr-4">ADD &amp; SEND INVITE</button>
                        {/*<button className="inline btn-chk2">DEACTIVATE USER</button>*/}
                    </div>
                    <div className="mt-12 mb-8">
                        <h2 className="heading-2">USER MANAGEMENT</h2>
                    </div>
                    <div>
                        <table className="mb-12 table-data">
                            <th></th>
                            <th className="text-left head-text pb-2">User Name</th>
                            <th className="text-left head-text">Email</th>
                            <th className="text-left head-text">Job Title</th>
                            <th className="text-left head-text">Status</th>
                            <th className="text-left head-text">Actions</th>
                            <tbody>
                                <tr className="data-back-g">
                                    <td className="py-5 pl-5 img"><img className="inline" src={require('../../../assets/images/oval-1.png')} alt="pic"/></td>
                                    <td className="py-5 pr-5 pl-0 text">Joysce Lynch</td>
                                    <td className="py-5 email text">joyce.lynch@company.com</td>
                                    <td className="py-5 pr-5 text">Techinian</td>
                                    <td className="py-5 pr-5 flex text"><div className="oval-g mr-3"></div>Active</td>
                                    <td className="py-5 pr-5 last text"><button className="action-btn1 mr-4">EDIT USER</button><button className="action-btn3 mr-4">DEACTIVATE USER</button><button className="action-btn2">RESET PASSWORD</button></td>
                                </tr>
                                <tr className="data-back">
                                    <td className="py-5 pl-5 img"><img className="inline" src={require('../../../assets/images/oval-2.png')} alt="pic"/></td>
                                    <td className="py-5 pr-5 pl-0 text">Philip Little</td>
                                    <td className="py-5 email text">hellophilip@gmail.com</td>
                                    <td className="py-5 pr-5 text">Techinian</td>
                                    <td className="py-5 pr-5 flex text"><div className="oval-r mr-3"></div>Inactive</td>
                                    <td className="py-5 pr-5 last text"><button className="action-btn1 mr-4">EDIT USER</button><button className="action-btn3 mr-4">DEACTIVATE USER</button><button className="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                <tr className="data-back-g">
                                    <td className="py-5 pl-5 img"><img className="inline" src={require('../../../assets/images/oval-3.png')} alt="pic"/></td>
                                    <td className="py-5 pr-5 pl-0 text">Marilyn Castro</td>
                                    <td className="py-5 email text">castro.marilyn@microsoft.com</td>
                                    <td className="py-5 pr-5 text">Techinian</td>
                                    <td className="py-5 pr-5 flex text"><div className="oval-r mr-3"></div>Inactive</td>
                                    <td className="py-5 pr-5 last text"><button className="action-btn1 mr-4">EDIT USER</button><button className="action-btn3 mr-4">DEACTIVATE USER</button><button className="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                <tr className="data-back">
                                    <td className="py-5 pl-5 img"><img className="inline" src={require('../../../assets/images/oval-4.png')} alt="pic"/></td>
                                    <td className="py-5 pr-5 pl-0 text">Jacqueline Thomas</td>
                                    <td className="py-5 email text">jacqueline.thomas@gmail.com</td>
                                    <td className="py-5 pr-5 text">Techinian</td>
                                    <td className="py-5 pr-5 flex text"><div className="oval-g mr-3"></div>Active</td>
                                    <td className="py-5 pr-5 last text"><button className="action-btn1 mr-4">EDIT USER</button><button className="action-btn3 mr-4">DEACTIVATE USER</button><button className="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                <tr className="data-back-g">
                                    <td className="py-5 pl-5 img"><img className="inline" src={require('../../../assets/images/oval-5.png')} alt="pic"/></td>
                                    <td className="py-5 pr-5 pl-0 text">Angela Davidson</td>
                                    <td className="py-5 email text">angela-davidson@me.com</td>
                                    <td className="py-5 pr-5 text">Techinian</td>
                                    <td className="py-5 pr-5 flex text"><div className="oval-r mr-3"></div>Inactive</td>
                                    <td className="py-5 pr-5 last text"><button className="action-btn1 mr-4">EDIT USER</button><button className="action-btn3 mr-4">DEACTIVATE USER</button><button className="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                    <tr className="data-back">
                                    <td className="py-5 pl-5 img"><img className="inline" src={require('../../../assets/images/oval-6.png')} alt="pic"/></td>
                                    <td className="py-5 pr-5 pl-0 text">Christine Keller</td>
                                    <td className="py-5 email text">christine.k@op25.com</td>
                                    <td className="py-5 pr-5 text">Techinian</td>
                                    <td className="py-5 pr-5 flex text"><div className="oval-g mr-3"></div>Active</td>
                                    <td className="py-5 pr-5 last text"><button className="action-btn1 mr-4">EDIT USER</button><button className="action-btn3 mr-4">DEACTIVATE USER</button><button className="action-btn2">RESET PASSWORD</button></td>
                                </tr>

                                <tr className="data-back-g">
                                    <td className="py-5 pl-5 img"><img className="inline" src={require('../../../assets/images/oval-7.png')} alt="pic"/></td>
                                    <td className="py-5 pr-5 pl-0 text">Ron Swanson</td>
                                    <td className="py-5 email text">heyiamron@swanson.com</td>
                                    <td className="py-5 pr-5 text">Techinian</td>
                                    <td className="py-5 pr-5 flex text"><div className="oval-g mr-3"></div>Active</td>
                                    <td className="py-5 pr-5 last text"><button className="action-btn1 mr-4">EDIT USER</button><button className="action-btn3 mr-4">DEACTIVATE USER</button><button className="action-btn2">RESET PASSWORD</button></td>
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
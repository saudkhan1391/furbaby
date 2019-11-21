import React from 'react';
import Style from './style';

const Carousel=() => {
    return(
        <div>

            <div className="carousel">
                <div className="carousel-inner">
                    <input className="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
                    <div className="carousel-item">
                        <div className="flex mt-12 justify-center mb-12">

                            <div className="flex-1 h-12 ml-4 max-w-sm">
                                <div className="max-w-sm rounded overflow-hidden shadow-bord">

                                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                        <div className="bordercheckcomp">
                                            <div className="img1">
                                                <img src={require('../../assets/images/img1-placeholder.png')} alt="pic"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                        <p>
                                            Todd Capitanio

                                            <br/>
                                            <span className="normal"> Day 2/2</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 h-12 ml-4 max-w-sm">
                                <div className="max-w-sm rounded overflow-hidden shadow-bord">

                                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                        <div className="bordercheck">
                                            <div className="img7">
                                                <img src={require('../../assets/images/img2-placeholder.png')} alt="pic"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                        <p>
                                            Daisy Stevens

                                            <br/>
                                            <span className="normal"> Day 1/5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex-1 h-12 ml-4 max-w-sm">
                                <div className="max-w-sm rounded overflow-hidden shadow-bord">

                                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                        <div className="bordercheck">
                                            <div className="img3">
                                                <img src={require('../../assets/images/img3-placeholder.png')} alt="pic"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                        <p>
                                            Toby Torres

                                            <br/>
                                            <span className="normal"> Day 1/2</span>
                                        </p>
                                    </div>
                                </div>
                            </div>



                            <div className="flex-1 h-12 ml-4 max-w-sm">
                                <div className="max-w-sm rounded overflow-hidden shadow-bord">

                                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                        <div className="bordercheck">
                                            <div className="img4">
                                                <img src={require('../../assets/images/img4-placeholder.png')} alt="pic"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                        <p>
                                            Todd Capitanio

                                            <br></br>
                                            <span className="normal"> Day 2/2</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <input className="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
                    <div className="carousel-item">
                        <div className="flex mt-12 justify-center mb-12">

                            <div className="flex-1 h-12 ml-4 max-w-sm">
                                <div className="max-w-sm rounded overflow-hidden shadow-bord">

                                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                        <div className="bordercheckcomp">
                                            <div className="img1">
                                                <img src={require('../../assets/images/img4-placeholder.png')} alt="pic"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                        <p>
                                            Todd Capitanio

                                            <br/>
                                            <span className="normal"> Day 2/2</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 h-12 ml-4 max-w-sm">
                                <div className="max-w-sm rounded overflow-hidden shadow-bord">

                                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                        <div className="bordercheck">
                                            <div className="img7">
                                                <img src={require('../../assets/images/img3-placeholder.png')} alt="pic"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                        <p>
                                            Daisy Stevens

                                            <br/>
                                            <span className="normal"> Day 1/5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="flex-1 h-12 ml-4 max-w-sm">
                                <div className="max-w-sm rounded overflow-hidden shadow-bord">

                                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                        <div className="bordercheck">
                                            <div className="img3">
                                                <img src={require('../../assets/images/img2-placeholder.png')} alt="pic"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                        <p>
                                            Toby Torres

                                            <br></br>
                                            <span className="normal"> Day 1/2</span>
                                        </p>
                                    </div>
                                </div>
                            </div>



                            <div className="flex-1 h-12 ml-4 max-w-sm">
                                <div className="max-w-sm rounded overflow-hidden shadow-bord">

                                    <div className="px-6 py-4 flex justify-center m-auto pt-8">
                                        <div className="bordercheck">
                                            <div className="img4">
                                                <img src={require('../../assets/images/img1-placeholder.png')} alt="pic"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-2 py-4 flex justify-center m-auto items-center content-center forText">
                                        <p>
                                            Todd Capitanio

                                            <br></br>
                                            <span className="normal"> Day 2/2</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/*<label htmlFor="carousel-3" className="carousel-control prev control-1"><img src={require('../../assets/images/sl-prev.png')} alt="pic" /></label>*/}
                    <label htmlFor="carousel-2" className="carousel-control next control-1"><img src={require('../../assets/images/sl-next.png')} alt="pic" /></label>
                    <label htmlFor="carousel-2" className="carousel-control prev control-1"><img src={require('../../assets/images/sl-prev.png')} alt="pic" /></label>
                    {/*<label htmlFor="carousel-3" className="carousel-control next control-2"><img src={require('../../assets/images/sl-next.png')} alt="pic" /></label>*/}
                    <label htmlFor="carousel-1" className="carousel-control prev control-2"><img src={require('../../assets/images/sl-prev.png')} alt="pic" /></label>
                    <label htmlFor="carousel-1" className="carousel-control next control-2"><img src={require('../../assets/images/sl-next.png')} alt="pic" /></label>

                </div>
            </div>
            <Style />
        </div>

    );
}

export default Carousel;
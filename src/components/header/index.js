import React from 'react';
import Style from './style';
import 'react-credit-cards/lib/styles-compiled.css';
import { Link, withRouter } from 'react-router-dom';
import firebase from "../../utils/firebase";

const Header=(props)=>{
    let { location, dispatch } = props;
    const checkActive = (value) => {
        return location.pathname.indexOf(value) !== -1 ? "active" : "";
    };
    let sidebar = document.getElementById('sBar');
    const openSidebar = ()=>{
        sidebar.style.display="block";
    }
    const closeSidebar = ()=>{
        sidebar.style.display="none";
    }
    const logOut = () => {
        firebase.auth().signOut();
        dispatch({
            type: "RESET_ALL"
        });
        window.location.reload();
    };

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap p-4 borderline">
                <div className="flex items-center flex-shrink-0 mr-6 pr-12">
                    <div className="ml-10 pad">
                        <img src={require('../../assets/images/fbt1-logo.png')} alt="pic"/>
                    </div>
                </div>
                <div className="w-full block tabL flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="tabL lg:flex-grow">
                        <Link to="/dashboard" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "+checkActive("dashboard")}>
                            CLINIC DASHBOARD
                        </Link>
                        <Link to="/in-progress" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "+checkActive("progress")}>
                            IN PROGRESS
                        </Link>
                        <Link to="/schedule" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "+checkActive("schedule")}>
                            SCHEDULE
                        </Link>
                        {/*<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-12 headerPart">*/}
                        {/*NOTIFICATIONS*/}
                        {/*</a>*/}
                        <Link to="/baby-database" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "+checkActive("database")}>
                            DATABASE
                        </Link>
                        <Link to="/tools-setting" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "+checkActive("setting")}>
                            TOOLS & SETTINGS
                        </Link>
                    </div>
                    <div className="mr-12 cursor-pointer relative logout">
                        <p onClick={() => logOut()} className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart"}>
                            LOGOUT
                        </p>
                    </div>
                    {/*<div className="mr-12 oval">*/}
                    {/*<a  className="inline-block px-2 mt-4 lg:mt-0"><span className="span1">?</span></a>*/}
                    {/*</div>*/}
                </div>
            </nav>
            <navigation-mob>
                <div className="mob-nav flex items-center justify-between ">
                    <div className="">
                        <a href="../">
                            <img style={{"cursor":"pointer"}}  src={require('../../assets/images/lArrow.png')} alt="pic"/></a>
                    </div>
                    <div className="">
                        <h3>CLINIC DASHBOARD</h3>
                    </div>
                    <div className="">
                        <img src={require('../../assets/images/menu.png')} onClick={()=>openSidebar()} alt="pic"/>
                    </div>
                    <div id="sBar" onClick={()=>closeSidebar()} className="overlay-back">
                        <div  className="mob-hid">
                            <div className="mb-16 mob-logo"><img src="/static/media/fbt-grey.26cdd9f2.png" alt="pic"/></div>
                            <div className="lg:flex-grow">
                                <Link to="/dashboard" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart"}>
                                    CLINIC DASHBOARD
                                </Link>
                                <hr/>
                                <Link to="/in-progress" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "}>
                                    IN PROGRESS
                                </Link>
                                <hr/>
                                <Link to="/schedule" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "}>
                                    SCHEDULE
                                </Link>
                                <hr/>
                                {/*<a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-12 headerPart">*/}
                                {/*NOTIFICATIONS*/}
                                {/*</a>*/}
                                <Link to="/baby-database" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "}>
                                    DATABASE
                                </Link>
                                <hr/>

                                <Link to="/tools-setting" className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "}>
                                    TOOLS & SETTINGS
                                </Link>
                                <hr/>
                                <Link to="/login"  onClick={() => logOut()} className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart "}>
                                LOGOUT
                                </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </navigation-mob>
            <Style />
        </div>
    )
};

export default withRouter(Header);
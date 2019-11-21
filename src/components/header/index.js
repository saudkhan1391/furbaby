import React from 'react';
import Style from './style';
import 'react-credit-cards/lib/styles-compiled.css';
import { Link, withRouter } from 'react-router-dom';
import firebase from "../../utils/firebase";

const Header=(props)=>{
    let { location } = props;
    const checkActive = (value) => {
        return location.pathname.indexOf(value) !== -1 ? "active" : "";
    };

    const logOut = () => {
        firebase.auth().signOut();
    };

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap p-4 borderline">
                <div className="flex items-center flex-shrink-0 mr-6 pr-12">
                    <div className="ml-10 pad">
                        <img src={require('../../assets/images/fbt1-logo.png')} alt="pic"/>
                    </div>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="lg:flex-grow">
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
                    <div className="mr-12 cursor-pointer">
                        <p onClick={() => logOut()} className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart"}>
                            LOGOUT
                        </p>
                    </div>
                    {/*<div className="mr-12 oval">*/}
                        {/*<a  className="inline-block px-2 mt-4 lg:mt-0"><span className="span1">?</span></a>*/}
                    {/*</div>*/}
                </div>
            </nav>
            <Style />
        </div>
    )
};

export default withRouter(Header);
import React, { useEffect } from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import Home from './home';
import About from './main';
import Login from './login/container';
import Schedule from './schedule';
import SchedulePageOne from "./schedulePageOne";
import Schedulepet from "./Schedulepet";
import Babyschedule from "./babyschedule";
import Treatmentplan from "./treatmentplan";
import Progress from "./progress";
import Severalboarding from "./severalboarding";
import Singlepet from "./singlepet";
import Foodmeds from "./foodmeds";
import Treatmentplans from "./treatmentplans";
import Customizenotes from "./customizenotes";
import Globalmass from "./globalmass";
import Massmessage from "./massmessage";
import Treatmentmassmesseage from "./treatment-mass-message";
import Babydatabase from "./baby-Database";
import Databaseform from "./database-form";
import Toolssetting from "./tools-setting";
import Dashboard from "./dashboard/container";
import trackerRecord from "./trackerRecord/container";
import treatmentInprogress from "./treatmentInprogress";
import treatmentComplete from "./treatmentComplete";
import treatmentBoarder from "./treatmentBoarder";
import updateBoarder from "./updateBoarder";
import clinicUsers from "./clinicUsers";
import Loader from "../commoncomponents/loader";
import firebase from "../utils/firebase";
import axios from "axios";
import { apiPath } from "../config";

const Routes = (props) => {
    let { dispatch, loaded, history, location } = props;

    const checkRole = (claims) => {
        if(claims.practiceAdmin){
            dispatch({
                type: "SET_ROLE",
                payload: "practiceAdmin"
            });
        }else if(claims.clinician){
            dispatch({
                type: "SET_ROLE",
                payload: "clinician"
            });
        }
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.auth().currentUser.getIdTokenResult().then((token) => {
                    if (token.claims.practiceAdmin || token.claims.clinician) {
                        checkRole(token.claims);
                        axios.get(apiPath+"/getClinicianData?clinicianUId="+user.uid).then(res => {
                            let main = {...res.data.data};
                            main.uid = user.uid;
                            dispatch({
                                type: "SET_CLINIC_DATA",
                                payload: main
                            });
                            dispatch({
                                type: "SET_LOADER",
                                payload: false
                            });
                            dispatch({
                                type: "SET_LOADED",
                                payload: true
                            });
                            dispatch({
                                type: "SET_LOGGEDIN",
                                payload: true
                            });
                            if(location.pathname === "/" || location.pathname === "/login"){
                                history.push("/dashboard");
                            }
                        });
                    }else {
                        history.push("/");
                        firebase.auth().signOut();
                    }
                });
                dispatch({
                    type: "SET_ID",
                    payload: user.uid
                });
            } else {
                history.push("/");
                dispatch({
                    type: "SET_LOADED",
                    payload: true
                });
                dispatch({
                    type: "SET_LOGGEDIN",
                    payload: false
                });
            }
        });
    }, []);

    return loaded ? (
        <Switch>
            <Route path={"/"} exact component={About}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/dashboard"} component={Dashboard}/>
            <Route path={"/tracker-record/:id"} component={trackerRecord}/>
            <Route path={"/signup"} component={Home}/>
            <Route path={"/mainschedule"} component={Schedule}/>
            <Route path={"/schedulePageOne"} component={SchedulePageOne}/>
            <Route path={"/schedulepet"} component={Schedulepet}/>
            <Route path={"/schedule"} component={Babyschedule}/>
            <Route path={"/treatmentplan"} component={Treatmentplan}/>
            <Route path={"/progress"} component={Progress}/>
            <Route path={"/severalboarding"} component={Severalboarding}/>
            <Route path={"/singlepet"} component={Singlepet}/>
            <Route path={"/foodmeds"} component={Foodmeds}/>
            <Route path={"/treatmentplans"} component={Treatmentplans}/>
            <Route path={"/customizenotes"} component={Customizenotes}/>
            <Route path={"/globalmass"} component={Globalmass}/>
            <Route path={"/massmessage"} component={Massmessage}/>
            <Route path={"/treatment-mass-message"} component={Treatmentmassmesseage}/>
            <Route path={"/baby-Database"} component={Babydatabase}/>
            <Route path={"/database-form"} component={Databaseform}/>
            <Route path={"/tools-setting"} component={Toolssetting}/>
            <Route path={"/treatment-inprogress"} component={treatmentInprogress} />
            <Route path={"/treatment-complete"} component={treatmentComplete} />
            <Route path={"/treatment-boarder"} component={treatmentBoarder} />
            <Route path={"/update-boarder"} component={updateBoarder} />
            <Route path={"/clinic-users"} component={clinicUsers} />
        </Switch>
    ) : <Loader/>
}

export default withRouter(Routes);

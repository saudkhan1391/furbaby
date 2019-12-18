import React, { useEffect } from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import Home from './home';
import About from './main';
import Login from './login/container';
import Schedule from './schedule';
import SchedulePageOne from "./schedulePageOne";
import Schedulepet from "./schedulePet/container";
import Treatmentplan from "./treatmentplan/container";
import Progress from "./progress/progress";
import Completed from "./progress/completed";
import Severalboarding from "./severalboarding";
import Singlepet from "./singlepet";
import Foodmeds from "./foodmeds/container";
import TreatmentPlans from "./treatmentplans/container";
import CustomizeNotes from "./customizenotes/container";
import Globalmass from "./globalmass";
import Massmessage from "./massmessage";
import Treatmentmassmesseage from "./treatment-mass-message";
import Babydatabase from "./baby-Database/container";
import Databaseform from "./database-form";
import Toolssetting from "./tools-setting/container";
import Dashboard from "./dashboard/container";
import trackerRecord from "./trackerRecord/container";
import treatmentInprogress from "./treatmentInprogress";
import treatmentComplete from "./treatmentComplete";
import treatmentBoarder from "./treatmentBoarder";
import updateBoarder from "./updateBoarder";
import CreatePetOwner from "./createPetOwnerAuth";
import clinicUsers from "./clinicUsers/container";
import Loader from "../commoncomponents/loader";
import firebase from "../utils/firebase";
import axios from "axios";
import { apiPath } from "../config";
import { standardDate } from "./functions";
const Routes = (props) => {
    let { dispatch, loaded, history, location, clinicId, id } = props;
    let date = new Date();
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
        let loadedDate = [standardDate(date).fullYear+"-"+standardDate(date).monthNumber];
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.auth().currentUser.getIdTokenResult().then((token) => {
                    if (token.claims.practiceAdmin || token.claims.clinician) {
                        checkRole(token.claims);
                        axios.get(apiPath+"/getClinicianData?clinicianUId="+user.uid+"&date="+standardDate(date).fullYear+"-"+standardDate(date).monthNumber).then(res => {
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
                            dispatch({
                                type: "SET_LOADED_DATES",
                                payload: loadedDate
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
                if(location.pathname.indexOf("/pet-owner-auth-create") === -1){
                    history.push("/");
                }
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
        if(clinicId){
            firebase.database().ref("/clinics/"+clinicId).off('value');
            firebase.database().ref("/clinics/"+clinicId).on('value', (snapshot) => {
                let data = {...snapshot.val()};
                data.clinicId = clinicId;
                dispatch({
                    type: "UPDATE_CLINIC",
                    payload: data
                })
            });
        }
    }, [clinicId]);

    return loaded ? (
        <Switch>
            <Route path={"/"} exact component={About}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/dashboard"} component={Dashboard}/>
            <Route path={"/tracker-record/:id"} component={trackerRecord}/>
            <Route path={"/in-progress"} component={Progress}/>
            <Route path={"/completed"} component={Completed}/>
            <Route path={"/create-new"} component={Treatmentplan}/>
            <Route path={"/tools-setting"} component={Toolssetting}/>
            <Route path={"/foods-and-medications"} component={Foodmeds}/>
            <Route path={"/treatment-plans"} component={TreatmentPlans}/>
            <Route path={"/customize-notes"} component={CustomizeNotes}/>
            <Route path={"/schedule"} component={Schedulepet}/>
            <Route path={"/baby-Database"} component={Babydatabase}/>
            <Route path={"/pet-owner-auth-create/:id"} component={CreatePetOwner}/>

            <Route path={"/signup"} component={Home}/>
            <Route path={"/mainschedule"} component={Schedule}/>
            <Route path={"/schedulePageOne"} component={SchedulePageOne}/>
            <Route path={"/severalboarding"} component={Severalboarding}/>
            <Route path={"/singlepet"} component={Singlepet}/>
            <Route path={"/globalmass"} component={Globalmass}/>
            <Route path={"/massmessage"} component={Massmessage}/>
            <Route path={"/treatment-mass-message"} component={Treatmentmassmesseage}/>
            <Route path={"/database-form"} component={Databaseform}/>
            <Route path={"/treatment-inprogress"} component={treatmentInprogress} />
            <Route path={"/treatment-complete"} component={treatmentComplete} />
            <Route path={"/treatment-boarder"} component={treatmentBoarder} />
            <Route path={"/update-boarder"} component={updateBoarder} />
            <Route path={"/clinic-users"} component={clinicUsers} />
        </Switch>
    ) : <Loader/>
}

export default withRouter(Routes);

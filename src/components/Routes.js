import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './home';
import About from './about';
import ContactUs from './contactUs';
// import UserSignup from './userSignup';
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

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={About}/>?
                <Route path={"/about"} component={Home}/>
                <Route path={"/login"} component={ContactUs}/>
                <Route path={"/signup"} component={Home}/>
                <Route path={"/schedule"} component={Schedule}/>
                <Route path={"/schedulePageOne"} component={SchedulePageOne}/>
                <Route path={"/schedulepet"} component={Schedulepet}/>
                <Route path={"/babyschedule"} component={Babyschedule}/>
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
                
                

                {/* <Route path={"/"} exact component={About}/>?
                <Route path={"/signup"} component={}/>
                <Route path={"/login"} component={ContactUs}/> */}
                {/* <Route path={"/user-signup"} component={UserSignup}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

import React  from 'react';
import Routes from './container';
import { FurbabyProvider } from '../store';
import {BrowserRouter} from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

const App=() => {

    return (
        <BrowserRouter>
            <FurbabyProvider>
                <Routes/>
            </FurbabyProvider>
            <NotificationContainer/>
        </BrowserRouter>
    );
};

export default App;
import React  from 'react';
import Routes from './container';
import { FurbabyProvider } from '../store';
import {BrowserRouter} from "react-router-dom";
const App=() => {

    return (
        <BrowserRouter>
            <FurbabyProvider>
                <Routes/>
            </FurbabyProvider>
        </BrowserRouter>
    );
};

export default App;
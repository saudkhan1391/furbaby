import React, { useEffect } from 'react';
import Header from '../header';

const Layout=(props) => {
    let { children, dispatch } = props;
    return (
        <div>
            <Header dispatch={dispatch}/>
            {children}
        </div>
    )
};

export default Layout;
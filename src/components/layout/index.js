import React, { useEffect } from 'react';
import Header from '../header';

const Layout=(props) => {
    let { children } = props;
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
};

export default Layout;
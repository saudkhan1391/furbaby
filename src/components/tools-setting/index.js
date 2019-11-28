import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionFour from './sectionFour';
import Layout from '../layout/container';
const Schedule = (props) => {
    let {clinic, dispatch} = props;
    return (
        <Layout>
            <SectionOne/>
            {/*<SectionTwo/>*/}
            <SectionFour clinic={clinic} dispatch={dispatch}/>
        </Layout>
    );
}
export default Schedule;
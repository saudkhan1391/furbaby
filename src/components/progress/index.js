import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import Layout from '../layout/container';
const Progress=(props)=>{
    let { appointments, dispatch, loaded, appointmentsLoaded } = props;
    return loaded && (
        <Layout>
            <SectionOne/>
            <SectionTwo appointments={appointments} dispatch={dispatch} appointmentsLoaded={appointmentsLoaded}/>
        </Layout>
    );
}
export default Progress;
import React from 'react';
import Layout from '../layout/container';
import SectionOne from '../dashboard/sectionOne';

const Dashboard=(props)=>{
    let { appointments, dispatch, loaded, appointmentsLoaded } = props;
    return loaded && (
        <Layout>
            <SectionOne appointments={appointments} dispatch={dispatch} appointmentsLoaded={appointmentsLoaded} />
        </Layout>
    );
}
export default Dashboard;
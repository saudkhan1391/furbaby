import React from 'react';
import Layout from '../layout/container';
import SectionOne from '../dashboard/sectionOne';

const Dashboard=(props)=>{
    let { appointments, dispatch, loaded } = props;
    return loaded && (
        <Layout>
            <SectionOne appointments={appointments} dispatch={dispatch} />
        </Layout>
    );
}
export default Dashboard;
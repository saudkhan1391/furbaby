import React from 'react';
import Layout from '../layout/container';
import SectionOne from './sectionOne';
const clinicUsers=(props) => {
    let { clinicId, dispatch, users } = props;
    return(
        <div>
            <Layout>
                <SectionOne dispatch={dispatch} clinicId={clinicId} users={users}/>
            </Layout>
        </div>
    );
}

export default clinicUsers;
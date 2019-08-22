import React from 'react';
import Layout from '../layout';
import SectionOne from '../dashboard/sectionOne';

const Dashboard=()=>{
    return(
        <div>
           <Layout>
            <div>
                <div>
                <SectionOne />
                </div>
            </div>
            </Layout>
        </div>
    );
}
export default Dashboard;
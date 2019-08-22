import React from 'react';
import SectionOne from '../trackerRecord/sectionOne';
import SectionTwo from '../trackerRecord/sectionTwo';
import Layout from '../layout';
const trackerRecord = () => {
    return(
        <div>
            <Layout> 
                <div>
                    <SectionOne />
                    <SectionTwo />
                </div>
            </Layout>
        </div>
    );
}

export default trackerRecord;
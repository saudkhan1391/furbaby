import React from 'react';
import Layout from '../layout';
import SectionOne from '../treatmentComplete/sectionOne';
import SectionTwo from '../trackerRecord/sectionTwo';

const treatmentComplete = () => {
    return (
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

export default treatmentComplete;
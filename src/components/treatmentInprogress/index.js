import React from 'react';
import Layout from '../layout';
import SectionOne from '../treatmentInprogress/sectionOne';
import SectionTwo from '../trackerRecord/sectionTwo';

const treatmentInprogress = () => {
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

export default treatmentInprogress;
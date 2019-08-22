import React from 'react';
import Layout from '../layout';
import SectionOne from './sectionOne';
import SectionTwo from '../trackerRecord/sectionTwo';

const treatmentBoarder = () => {
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

export default treatmentBoarder;
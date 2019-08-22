import React from 'react';
import Layout from '../layout';
import SectionOne from './sectionOne';
import SectionTwo from '../trackerRecord/sectionTwo';

const updateBoarder = () => {
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

export default updateBoarder;
import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import Layout from '../layout';
const Treatmentplan=()=>{
    return(
        <div>
           <Layout>
            <div>
            <SectionOne/>
            <SectionTwo/>
            </div>
           </Layout>
        </div>
    );
}
export default Treatmentplan;
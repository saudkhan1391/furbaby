import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import Layout from '../layout/container';
const Schedule=()=>{
    return(
        <div>
           <Layout>
            <div>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            </div>
           </Layout>
        </div>
    );
}
export default Schedule;
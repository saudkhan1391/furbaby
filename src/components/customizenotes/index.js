import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionSix from './sectionSix';
import SectionSeven from './sectionSeven';
import Layout from '../layout';
const Schedule=()=>{
    return(
        <div>
           <Layout>
            <div>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionSix/>
            <SectionSeven/>
            </div>
           </Layout>
        </div>
    );
}
export default Schedule;
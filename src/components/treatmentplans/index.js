import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';
import SectionFive from './sectionFive';
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
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            </div>
           </Layout>
        </div>
    );
}
export default Schedule;
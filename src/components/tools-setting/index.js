import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
import SectionFour from './sectionFour';
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
            </div>
           </Layout>
        </div>
    );
}
export default Schedule;
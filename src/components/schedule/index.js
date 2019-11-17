import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import Layout from '../layout/container';
const Schedule=()=>{
    return(
        <div>
           <Layout>
               <SectionOne/>
               <SectionTwo/>
           </Layout>
        </div>
    );
}
export default Schedule;
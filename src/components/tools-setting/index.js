import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionFour from './sectionFour';
import Layout from '../layout/container';
const Schedule = (props) => {
    let {clinic, dispatch} = props;
    return (
        <Layout>
          <div className="toolSet" style={{"padding":"0 15px"}}>
            <SectionOne/>
            {/*<SectionTwo/>*/}
            <SectionFour clinic={clinic} dispatch={dispatch}/>
            </div>
        </Layout>
    );
}
export default Schedule;
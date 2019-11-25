import React from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionFour from './sectionFour';
import Layout from '../layout/container';
const Schedule = (props) => {
    let {clinic, dispatch} = props;
    return (
        <div>
            <Layout>
                <div>
                    <SectionOne/>
                    <SectionTwo/>
                    <SectionFour clinic={clinic} dispatch={dispatch}/>
                </div>
            </Layout>
        </div>
    );
}
export default Schedule;
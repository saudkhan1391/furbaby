import React  from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import Layout from '../layout/container';

const Schedulepet = (props) => {
    let {appointments, dispatch} = props;
    return (
        <Layout>
            <div>
                <SectionOne/>
                <SectionTwo appointments={appointments} dispatch={dispatch}/>
            </div>
        </Layout>
    );
}
export default Schedulepet;
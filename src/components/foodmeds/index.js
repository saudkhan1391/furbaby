import React from 'react';
import Food from './foodBlock'
import SectionOne from './sectionOne';
import Medication from './medicationBlock';
import Layout from '../layout/container';
import Style from './style'
const Schedule = (props) => {
    let { clinic, dispatch } = props;
    let food = clinic.food ? JSON.parse(clinic.food) : [];
    let medication = clinic.medication ? JSON.parse(clinic.medication) : [];
    return (
        <Layout>
            <div style={{"padding":"0 15px"}}><SectionOne /></div>
            <Food clinic={clinic} dispatch={dispatch} foodData={food} />
            <Medication clinic={clinic} dispatch={dispatch} foodData={medication} />
            <Style/>
        </Layout>
    );
}
export default Schedule;
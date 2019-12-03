import React from 'react';
import Food from './foodBlock'
import SectionOne from './sectionOne';
import Medication from './medicationBlock';
import Layout from '../layout/container';
import Style from './style';
import DFood from "../../jsons/food.json";
import DMedications from "../../jsons/medications.json";

const Schedule = (props) => {
    let { clinic, dispatch } = props;
    let food = clinic.food ? JSON.parse(clinic.food) : DFood;
    let medication = clinic.medication ? JSON.parse(clinic.medication) : DMedications;
    return (
        <Layout>
            <SectionOne/>
            <Food clinic={clinic} dispatch={dispatch} foodData={food} />
            <Medication clinic={clinic} dispatch={dispatch} foodData={medication} />
            <Style/>
        </Layout>
    );
}
export default Schedule;
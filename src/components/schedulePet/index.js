import React  from 'react';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import Layout from '../layout/container';

const Schedulepet = (props) => {
    let {appointments, dispatch, clinic, loadedDates, id, appointmentsLoaded, clinicId} = props;
    return (
        <Layout>
            <div className="cardSett">
                <SectionOne/>
                <SectionTwo appointmentsLoaded={appointmentsLoaded} clinicId={clinicId} appointments={appointments} id={id} dispatch={dispatch} clinic={clinic} loadedDates={loadedDates}/>
            </div>
        </Layout>
    );
}
export default Schedulepet;
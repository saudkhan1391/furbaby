import React from 'react';
import Style from './style';
import Card from "../card";
import Loader from "../../../commoncomponents/loader";
const SectionTwo =(props)=>{
    let { appointments, appointmentsLoaded } = props;
    return appointmentsLoaded ? (
        <div>
            <div className="ml-12 mx-auto">
                <div className="progressDiv">
                    <div className="flex mb-4">
                        <div className="w-1/2 h-12">
                            <div className="mt-6 boarders">
                                <h1>TREATMENT</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-4 carousel-cont flex-wrap">
                        {
                            appointments.length !== 0 && appointments.map((item, index) => {
                               return <Card key={index} item={item} />
                            })

                        }
                    </div>
                </div>
            </div>
            <Style/>
        </div>
    ): <div className="relative ml-12 mx-auto  h-64">
        <Loader text="Please wait while the records load"/>
    </div>
}
export default SectionTwo;
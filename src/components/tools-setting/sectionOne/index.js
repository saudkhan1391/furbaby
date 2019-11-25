import React from 'react';
import {Link} from 'react-router-dom';
import Style from './style';
const SectionOne = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 forwidth">
                    <div className="flex justify-between mt-12">
                        <div className="tools-heading">
                            <h1>TOOLS & SETTINGS</h1>
                        </div>
                        <div>
                            <button className="mr-4 manage-Customize-Btn">CUSTOMIZE MEDICATION & FOOD DROP-DOWNS
                            </button>
                            <button className="mr-4 manage-Note-Btn">MANAGE NOTE DATABASE</button>
                            <button className="mr-4 manage-Treatment-Btn">MANAGE TREATMENT PLANS</button>
                            <Link to="/clinic-users">
                                <button className="manage-Clinic-Btn mr-4">MANAGE CLINIC USERS</button>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-2 forline-again1"></div>
                </div>
            </div>


            <Style/>
        </div>

    );
}
export default SectionOne;
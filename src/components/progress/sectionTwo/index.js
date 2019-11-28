import React from 'react';
import Style from './style';
import Card from "../card";
const SectionTwo =(props)=>{
    let { appointments } = props;
    return(
        <div>
            <div className="ml-12 mx-auto">
                <div className="progressDiv">
                    <div className="flex mb-4">
                        <div className="w-1/2 h-12">
                            <div className="mt-6 boarders">
                                <h1>TREATMENT</h1>
                            </div>
                        </div>
                        {/*<div className="w-1/2 h-12 mt-6 flex justify-end">*/}
                            {/*<div className="flex">*/}
                                {/*<div>*/}
                                    {/*<button className="mr-4 massUpdate">MASS UPDATE</button>*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                    {/*<button className="sendMass">SEND MASS BOARDER MESSAGE</button>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
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
    );
}
export default SectionTwo;
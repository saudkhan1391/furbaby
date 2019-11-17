import React from 'react';
import Style from './style';
const Profile=() => {
    return(
        <div>
            <div className="data-div flex-2">
                <div className="flex justify-between ">
                    <label className=" ml-12 flex-1">
                        Dropped Off @
                    </label>
                    <p className="inline flex-1">7:08 AM <span className="pl-8"/>11/22/2019</p>
                    <img className="head-img inline flex-1/3" src={require('../../assets/images/settings-3.png')} alt="pic"/>
                </div>
                <div className="flex justify-between">
                    <label className=" ml-12">
                        Owner:
                    </label>
                    <p>Amanda Hoffmeyer</p>
                </div>
                <div className="flex justify-between text-left">
                    <label className=" ml-12">
                        Phone:
                    </label>
                    <p>610-563-3294</p>
                </div>

                <div className="ml-12 mt-8">
                    <label>Notes from owner</label>
                </div>
                <div className="ml-12 mt-2">
                    <textarea className="text-area pl-2 pt-2 pr-2" placeholder="Text Area"  />
                </div>
            </div>
            <Style />
        </div>
    );
}

export default Profile;
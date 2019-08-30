import React from 'react';
import Style from './style';
const Profile = () => {
    return(
        <div>
                    <div class="data-div flex-2">
                        <div class="flex justify-between ">
                            <label class=" ml-12 flex-1">
                                Dropped Off @
                            </label>
                            <p class="inline flex-1">7:08 AM <span class="pl-8"></span>11/22/2019</p>
                            <img class="head-img inline flex-1/3" src = {require('../../assets/images/settings-3.png')} alt="pic"/>
                        </div>
                        <div class="flex justify-between">
                            <label class=" ml-12">
                                Owner:
                            </label>
                            <p>Amanda Hoffmeyer</p>
                        </div>
                        <div class="flex justify-between text-left">
                            <label class=" ml-12"> 
                                Phone:
                            </label>
                            <p>610-563-3294</p>
                        </div>

                        <div class="ml-12 mt-8">
                            <label>Notes from owner</label>
                        </div>
                        <div class="ml-12 mt-2">
                            <textarea class="text-area pl-2 pt-2 pr-2" placeholder="Text Area"  />
                        </div>
                    </div>
                    <Style />
    </div>
    );
}

export default Profile;
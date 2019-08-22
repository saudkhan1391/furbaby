import React from 'react';
import Style from './style';
import { Link } from 'react-router-dom';
const Header=()=>{
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap p-4 borderline">
        <div class="flex items-center flex-shrink-0 mr-6 pr-12">
          <div class="ml-10 pad">
            <img src={require('../../assets/images/furbaby-logo2.png')} alt = "pic"/>
          </div>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="lg:flex-grow">
            <a  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart">
              CLINIC DASHBOARD
      </a>
            <Link to="/progress"><a  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-12 headerPart">
              IN PROGRESS
      </a></Link>
            <Link to="/babyschedule"><a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-12 headerPart active">
              SCHEDULE
      </a></Link>
            <a  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-12 headerPart">
              NOTIFICATIONS
      </a>
            <a  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-12 headerPart">
              DATABASE
      </a>
            <a  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-12 headerPart">
              TOOLS & SETTINGS
      </a>
          </div>
          <div class="mr-12 oval">
            <a  class="inline-block px-2 mt-4 lg:mt-0"><span class="span1">?</span></a>
          </div>
        </div>
      </nav>
      <Style />
    </div>
  )
};

export default Header;
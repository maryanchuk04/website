import React from 'react';

import { Link } from 'react-router-dom';
import './SpecialityPage.css';
function SpecialityPage() {
  return (
  <div > 
     
      <div className="container_all">
        <div className="container_speciality">
               <div className="type_specilialities">
               <p> <Link to = '/speciality/marketing'>Маркетинг</Link></p>
                 <p> <Link to ='/speciality/cooking'>Харчові технології </Link></p>
                 <p><Link to = '/speciality/oblik'>Облік і оподаткування </Link></p>
                 <p><Link to = '/speciality/pidpruyemstvo'>Підприємство,торгівля та біржова діяльність </Link></p>
              </div>
        </div>
      </div>
  </div>
  )
}

export default SpecialityPage;

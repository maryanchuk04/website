import React from 'react';

import { Link } from 'react-router-dom';
import './SpecialityPage.css';
function SpecialityPage() {
  return (
  <div  className="speciality"> 
  <div className="title">
               <p >Перелік спеціальностей та освітньо-професійних програм <br/>
                   За якими здійснюється підготовка у Фаховому коледжі бізнесу та харчових технології
               </p>
          </div>
     <div className="container_all">
           
                <div className="about_opp">
                  <p className="name_speciality">Назва спеціальності</p>
                  <ul>
                    <li className="opp_speciality">ОПП спеціальностей</li>
                    <li className="opp_speciality">ОПП спеціальностей</li>
                  </ul>
                </div>
      
     </div>
     
  </div>
  )
}

export default SpecialityPage;

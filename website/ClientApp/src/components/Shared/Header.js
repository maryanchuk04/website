import React from 'react'
import './Header.css';
function Header() {
    return (
        <header class="header" >
            <div className="body_header">
                <div class="container_header">
                     <div className="mainInfo"> 
                         <div className="About_us">
                             <div className="text">
                               <span>Чернівецький фаховий коледж бізнесу та харчових технологій</span>
                             </div>
                             <div className="image">
                                 <img src="https://i.ibb.co/3Fgrkkd/image.png"/>
                             </div>
                         </div>
                        
                     </div>
                 </div>
            </div>
            <div className="menu_header">
            <div class="container_header">
                  <div class="menu">
                             <p>Новини</p>
                             <p>Кращі студенти </p>
                             <p>Спеціальності</p>
                             <p>Студенту</p>
                         </div>
                 </div>
            </div>
        </header> 
    )
}

export default Header
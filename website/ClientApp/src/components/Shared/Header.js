import React from 'react'
import './Header.css';
function Header() {
    return (
        <header class="header" >
            <div className="body_header">
                <div class="container_all">
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
                <div class="container_all">
                  
                                
                               <nav className="one">
                                   <ul className="topmenu">
                                       <li>Новини</li>
                                       <li>Досягнення</li>
                                       <li>Студенту</li>
                                       <li>Абітурієнту</li>
                                       <li >Спеціальності
                                               <ul className="submenu">
                                                   <li>Маркетинг</li>
                                                   <li>Харчові технології</li>
                                                   <li>Облік і оподаткування</li>
                                                   <li>Підприємство,торгівля та біржова діяльність</li>
                                               </ul>  
                                       </li>
                                       <li>Історія</li>
                                       <li>Адміністрація</li>
                                   </ul>
                               </nav>
                            
                    
                </div>
            </div>
        </header> 
    )
}

export default Header
import React from 'react'
import './Menu.css';
function Menu() {
    return (
        
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
        
    )
}

export default Menu
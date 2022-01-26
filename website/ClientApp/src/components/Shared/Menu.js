import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';
function Menu() {
    return (
        
            <div className="menu_header">
                <div class="container_all">                           
                               <nav className="one">
                                   <ul className="topmenu">
                                    <li><Link to ='/'>Головна</Link></li>
                                    <li> <Link to = '/news'>Новини</Link></li>
                                    <li><Link to ='/achivement'>Досягнення</Link></li>
                                    <li>
                                        Студенту
                                        <ul className="submenu">
                                                   
                                                   <li> <Link to ='/student/practice'>Практика та працевлаштування</Link></li>
                                                   <li> <Link to ='/student/callshedule'>Розклад дзвінків</Link></li>
                                                   <li> <Link to ='/student/detailspayment'>Реквізити для оплати</Link></li>
                                                   <li> <Link to ='/student/syllabus'>Силабуси</Link></li>
                                                   
                                        </ul>  

                                    </li>
                                    <li><Link to = '/entrant'> Абітурієнту</Link></li>
                                    <li> Спеціальності
                                        
                                                <ul className="submenu">
                                                   
                                                   <li> <Link to ='/speciality/cooking'>Харчові технології</Link></li>
                                                   <li><Link to = '/speciality/oblik'>Облік і оподаткування</Link></li>
                                                   <li><Link to = '/speciality/pidpruyemstvo'>Підприємство,торгівля та біржова діяльність</Link></li>
                                               </ul>  
                                       
                                       </li>
                                       <li><Link to = '/history'>Історія</Link></li>
                                       <li><Link to = '/employers'>Адміністрація</Link></li>
                                   </ul>
                               </nav>
                            
                    
                </div>
            </div>
        
    )
}

export default Menu
import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';
function Menu() {
    return (
        
            <div className="menu_header">
                <div class="container_all">                           
                               <nav className="one">
                                   <ul className="topmenu">
                                    <li> <Link to = '/news'>Новини</Link></li>
                                    <li><Link to ='/achivement'>Досягнення</Link></li>
                                    <li><Link to = '/student'>Студенту</Link></li>
                                    <li><Link to = '/entrant'> Абітурієнту</Link></li>
                                    <li> <Link to = '/speciality'>Спеціальності</Link>
                                        <li>
                                                <ul className="submenu">
                                                   <li><Link to = '/speciality/marketing'>Маркетинг</Link></li>
                                                   <li> <Link to ='/speciality/cooking'>Харчові технології</Link></li>
                                                   <li><Link to = '/speciality/oblik'>Облік і оподаткування</Link></li>
                                                   <li><Link to = '/speciality/pidpruyemstvo'>Підприємство,торгівля та біржова діяльність</Link></li>
                                               </ul>  
                                       </li>
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
import React from 'react'
import "./MenuAdmin.css"
import { Link } from "react-router-dom";

function MenuAdmin() {
       
    return (
        <div >
            <div className="title">
                        <h1> Ласкаво просимо Адміністраторе!</h1>
                    </div>
            <div className="admin_menu">
                <div class="container_all">
                    
                          
                               <nav className="one">
                                   <ul className="topmenu">
                                       <div className="hmenu">
                                            <h1>МЕНЮ</h1>
                                       </div>
                                       
                                   <li><Link to = {`/admin/news`}><h1>Новини</h1> </Link></li>      
                                    <li> <Link to = {`/admin/achievement`}> <h1>Досягнення</h1> </Link></li>
                                    <li><Link to = {`/admin/employers`}> <h1>Адміністрація</h1> </Link></li> 
                                   </ul>
                               </nav>   
                    </div>       
                </div>
            </div>
    )
}

export default MenuAdmin

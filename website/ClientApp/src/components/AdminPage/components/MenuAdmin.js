import React from 'react'
import "./MenuAdmin.css"
import { Link } from "react-router-dom";

function MenuAdmin() {
    
    return (
        <div className = "container_all">
        <div className = "menu">
            <ul>
                <li><Link to = {`/news`}><h1>Новини</h1> </Link></li>
                <li><Link to = {`/best`}> <h1>Кращі студенти</h1> </Link></li>
                <li> <Link to = {`/achievement`}> <h1>Наші досягнення</h1> </Link></li>
                <li><Link to = {`/employers`}> <h1>Адміністрація</h1> </Link></li>

            </ul>
        </div>
        </div>
    )
}

export default MenuAdmin

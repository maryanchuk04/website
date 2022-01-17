import React from 'react'
import "./MenuAdmin.css"
import { Link } from "react-router-dom";
import { useState } from 'react';
function MenuAdmin() {
    
    return (
        
        <div className = "menu">
            <ul>
             <li><Link to = {`/news`}><h1>Новини</h1> </Link></li>
            <li><Link to = {`/best`}> <h1>Кращі студенти</h1> </Link></li>
           <li> <Link to = {`/achievement`}> <h1>Наші досягнення</h1> </Link></li>
            <li><Link to = {`/employers`}> <h1>Адміністрація</h1> </Link></li>
            </ul>
        </div>
    )
}

export default MenuAdmin

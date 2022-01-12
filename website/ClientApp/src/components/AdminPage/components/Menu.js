import React from 'react'

import { Link } from "react-router-dom";
function Menu() {
    return (
        <div className = "menu">
            <Link to = {`/news`}><h1>Новини</h1> </Link>
            <Link to = {`/best`}> <h1>Кращі студенти</h1> </Link>
            <Link to = {`/achievement`}> <h1>Наші досягнення</h1> </Link>
            <Link to = {`/employers`}> <h2>Адміністрація</h2> </Link>
        </div>
    )
}

export default Menu

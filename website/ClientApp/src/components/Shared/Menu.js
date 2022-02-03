import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Menu.css';

function Menu() {

    const [students,setStrudents] = useState([]);
    const [activity,setActivity] = useState([]);
    const [history,setHistory] = useState([]);
    const [abiturient,setAbiturient] = useState([]);
    const [speciality,setSpeciality] = useState([]);
    const [employers,setEmployers] = useState([]);




    useEffect(async ()=>{
        const res1 = await axios.get("https://bsite.net/IvanovIvan/student");
        /*
        const res2 = await axios.get("https://bsite.net/IvanovIvan/speciality");
        const res3 = await axios.get("https://bsite.net/IvanovIvan/history");
        const res4 = await axios.get("https://bsite.net/IvanovIvan/entrant");
        const res5 = await axios.get("https://bsite.net/IvanovIvan/collegeactivity");
        const res6 = await axios.get("https://bsite.net/IvanovIvan/employers");
        
        console.log(res1.data)
        console.log(res2.data)
        console.log(res3.data)
        console.log(res4.data)
        console.log(res5.data)
        console.log(res6.data)
        */
        setStrudents(res1.data);
        /*
        setSpeciality(res2.data);
        setHistory(res3.data);
        setAbiturient(res4.data);
        setActivity(res5.data);
        setEmployers(res6.data);*/

    },[])
    
   
    return (
        
            <div className="menu_header">
                <div class="container_all">                           
                               <nav className="one">
                                   <ul className="topmenu">
                                    <li><Link to ='/'>Головна</Link></li>
                                    <li> <Link to = '/news'>Новини</Link></li>       
                                    <li>
                                        Студенту
                                        
                                        <ul className="submenu">
                                           
                                        
                                                <li> <Link to ='/student/practice'>Практика та працевлаштування</Link></li>
                                                   <li> <Link to ='/student/callshedule'>Розклад дзвінків</Link></li>
                                                   <li> <Link to ='/student/detailspayment'>Реквізити для оплати</Link></li>
                                                   <li> <Link to ='/student/syllabus'>Силабуси</Link></li>
                                                   {students.map((s,index)=>(
                                                   <li><Link to ={`/student/${s.id}`}>{s.name}</Link></li>
                                                   ))}  
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
                                    <li><Link to = '/employers'>Колектив</Link></li>
                                   </ul>
                               </nav>
                            
                    
                </div>
            </div>
        
    )
}

export default Menu
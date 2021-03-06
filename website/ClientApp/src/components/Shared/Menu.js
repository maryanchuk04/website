import React, { useEffect,useState } from 'react'
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
    const [toggleBurger, setToggleBurger] = useState(false);
    const st = 'student';
    const act = 'collegeactivity';
    const his = 'history';
    const abit = 'entrant';
    const spec = 'speciality';
    const emp = 'employerspage';
    

    useEffect(()=>{
        ( async()=>{
            const res1 = await axios.get("https://bsite.net/IvanovIvan/student");
            const res5 = await axios.get("https://bsite.net/IvanovIvan/collegeactivity");
            const res2 = await axios.get("https://bsite.net/IvanovIvan/speciality");
            const res3 = await axios.get("https://bsite.net/IvanovIvan/history");
            const res4 = await axios.get("https://bsite.net/IvanovIvan/entrant");
            const res6 = await axios.get("https://bsite.net/IvanovIvan/employerspage");
            console.log(res1.data)
            console.log(res2.data)
            console.log(res3.data)
            console.log(res4.data)
            console.log(res5.data)
            console.log(res6.data)
            setStrudents(res1.data);
            setActivity(res5.data);
            setSpeciality(res2.data);
            setHistory(res3.data);
            setAbiturient(res4.data);
            setEmployers(res6.data);
        })()
    },[])
 
    return (
        
            <div className="menu_header">
                <div class="container_all">                           
                               <nav className="one">

                               <button
						class={`burger ${toggleBurger && 'opened'}`}
						onClick={() => setToggleBurger(!toggleBurger)}
						aria-label="Main Menu"
						aria-expanded={toggleBurger}>
						<svg width="100" height="100" viewBox="0 0 100 100">
							<path
								class="line line1"
								d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
							/>
							<path class="line line2" d="M 20,50 H 80" />
							<path
								class="line line3"
								d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
							/>
						</svg>
					</button>
                                   <ul className={!toggleBurger && 'showHeader' && 'topmenu'}>
                                    <li><Link to ='/'>??????????????</Link></li>
                                    <li> <Link to = '/news'>????????????</Link></li> 
                                    <li>???????????????????? ??????????????
                                    <ul className="submenu">
                                            {activity.map((a,index)=>(
                                               <li><a key = {act,a.id} href ={`/${act}/${a.id}`}>{a.name}</a></li> 
                                            ))

                                            }
                                        </ul>
                                    </li>
    
                                    <li>
                                     ????????????????
                                        
                                        <ul className="submenu">
                                                   <li> <Link to ='/student/callshedule'>?????????????? ????????????????</Link></li>
                                                                    
                                                   {students.map((s,index)=>(
                                                   <li><a key={st,s.id} href ={`/${st}/${s.id}`}>{s.name}</a></li>
                                                   ))}  
                                        </ul>
                                    </li>
                                   
                                    <li><Link to = '/entrant'> ??????????????????????</Link></li>
                                    <li>  <Link to = '/speciality'>  ?????????????????????????? </Link> 
                                                <ul className="submenu">
                                                   <li> <Link to ='/speciality/cooking'>?????????????? ????????????????????</Link></li>
                                                   <li><Link to = '/speciality/oblik'>?????????? ?? ??????????????????????????</Link></li>
                                                   <li><Link to = '/speciality/pidpruyemstvo'>????????????????????????,???????????????? ???? ?????????????? ????????????????????</Link></li>
                                                   {speciality.map((s,index)=>(
                                                   <li><a key={spec,s.id} href ={`/${spec}/${s.id}`}>{s.name}</a></li>
                                                   ))}  
                                               </ul>  
                                       
                                    </li>
                                    
                                   
                                    
                                    <li>????????????????
                                            <ul className="submenu">
                                                   <li><Link to ='/employers/admin'>??????????????????????????</Link></li>
                                                   <li><Link to = '/employers/ped'>???????????????????????? ??????????</Link></li>
                                                   <li><Link to = '/employers/gosp'>???????????????????????? ??????????????</Link></li>
                                                   <li><Link to = '/employers/not'>???????????????????????????? ??????????</Link></li>        
                                            </ul> 
                                    
                                    </li>

                                    <li><Link to = '/history'>??????????????</Link>
                                    <ul className="submenu">
                                            <li><Link to = "/history/galery">??????????????</Link></li>
                                            {history.map((a,index)=>(
                                               <li><a key = {his,a.id} href ={`/${his}/${a.id}`}>{a.name}</a></li> 
                                            ))
                                            }
                                        </ul>
                                    </li>
                                   </ul>
                               </nav>
                            
                    
                </div>
            </div>
        
    )
}

export default Menu
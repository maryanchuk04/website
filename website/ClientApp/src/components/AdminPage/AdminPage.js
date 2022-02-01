import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../AdminPage/AdminPage.css'
function AdminPage() {
    const [student,setStudent] = useState([])
    const [news,setNews] = useState([])
    const [abiturient,setAbiturient] = useState([])
    const [speciality,setSpeciality] = useState([])
    const [employers,setEmployers] = useState([])
    const [activies,setActivies] = useState([])
    const [warning,setWarnings] = useState([])
    const [state,setState] = useState()

    useEffect(async ()=>{
        const res1 = await axios.get("http://localhost:5000/student")
        //barabukli
        console.log(res1.data)
        setStudent(res1.data);
    },[])

    const StudentClick=((i)=>{
        setState(1);
    })

    const AbiturientClick=((e)=>{
        setState(2);
    })
    const SpecialityClick=((e)=>{
        setState(3);
    })
    
    const EmployersClick=((e)=>{
        setState(4);
    })
    const AcriviesClick=((e)=>{
        setState(5);
    })

    const AdministrationClick = ((e)=>{
        setState(6);
    })

    const NewsClick = ((e)=>{
        setState(7);
    })   
    



    return (
        <div className = "">
            <div className="admin_title">
                    <h1>Ласкаво просимо адміністраторе!</h1>
            </div>
            <div className="all_admin">
              

                <div className="menu_admin">

                    <div className="main_menu">
                        <div className="admin_menu_title">
                            Меню
                        </div>
                      <ul>
                          <li>Головна</li>
                          <li>Досягнення</li>
                          <li onClick={(i)=>StudentClick(i)}>Студенту</li>
                          <li onClick={(i)=>AbiturientClick(i)}>Абітурієнту</li>
                          <li onClick={(i)=>SpecialityClick(i)}>Спеціальності</li>
                          <li onClick={(i)=>AdministrationClick(i)}>Адміністація</li>
                          <li onClick={(i)=>NewsClick(i)}>Новини</li>
                      </ul>
                    </div>
                    <div className="sub_menu">
                    <ul>
                        {state === 1 ? 
                            student.map((s, index)=><li>{s.name}</li>
                            ):<li></li>
                        }
                            
                        
                          
                       
                      </ul>
                    </div>
                  
                </div>
                <div className="other_admin">

                </div>
                <div className="button_admin">
                      <div className="loc_btn">
                          <div className="select_img">
                             <button>1</button>
                             <button>2</button>
                             <button>3</button>
                          </div>
                          <button className="butn">Додати</button>
                          <button className="butn">Видалити</button>
                          <button className="butn">Редагувати</button>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage

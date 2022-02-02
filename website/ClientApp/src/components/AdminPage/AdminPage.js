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

    const [showForm, setShowForm] = useState(false);

    const [showPage1, setShowPage1] = useState(false);


    useEffect(async ()=>{
        const res1 = await axios.get("http://localhost:5000/student")
        //barabukli
        console.log(res1.data)
        setStudent(res1.data);
    },[])
    const firstclick=((i)=>{
       alert("HELLO")
    })
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
                            <p>   Меню</p> 
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
                  <div className="admin_page1">
                        <div
					          class="background_page1"
					           style={{
					        	transform: `scale(${
					        		showPage1 ? 1 : 0
					        	})`,
					        }}>
                                <div id="cancel-btn" ><i className="fas fa-times" onClick={() => setShowPage1(false)}></i></div>
                            <div className="admin_page1_info">
                                <input type="text"  className="elemen_admin  elemen_admin_input" placeholder="Заголовок"/>
                                <textarea name="text" className="elemen_admin elemen_admin_textarea" id=""  placeholder="Текст"></textarea>
                             </div>
                             <div className="admin_page1_buttons">
                                <input type="file" />
                                <button>Зберегти</button>
                            </div>
                        </div>
                  </div>
                </div>
                <div className="button_admin">
                      
                                    <div
                                    class="background"
                                    style={{
                                        transform: `scale(${
                                            showForm ? 1 : 0
                                        })`,
                                    }}>    
                                  
                                  <div id="cancel-btn" ><i className="fas fa-times" onClick={() => setShowForm(false)}></i></div>
                                  
                                  <div className="popup">
                                   <div className="sub_buttons">
                                        <button onClick={() => setShowPage1(true)} >1</button>
                                        <button>2</button>
                                        <button>3</button>
                                    </div>
                                </div>       
                            </div>
                        
                          
                           <div className="buttons">  
                          <button className="butn " onClick={() => setShowForm(true)}>Додати</button>
                          <button className="butn">Видалити</button>
                          <button className="butn">Редагувати</button>
                          </div> 
                </div>
                          
            </div>
        </div>
            
        
    )
}

export default AdminPage

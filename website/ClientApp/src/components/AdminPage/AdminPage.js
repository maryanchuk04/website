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
    const [slider,setSlider] = useState([])
    const [showForm, setShowForm] = useState(false);
    const  [getFile,setFile] = useState();
    const [showPage1, setShowPage1] = useState(0);
    var bodyFormData = new FormData();

    useEffect(()=>{

        (async ()=>{
            const res1 = await axios.get("https://bsite.net/IvanovIvan/student")
            const res2 = await axios.get("https://bsite.net/IvanovIvan/speciality")
            const res7 = await axios.get("https://bsite.net/IvanovIvan/news")
            const res5 = await axios.get('https://bsite.net/IvanovIvan/advertisement')
            const res8 = await axios.get("https://bsite.net/IvanovIvan/slider/all")
            const res4 = await axios.get("https://bsite.net/IvanovIvan/employerspage")
            
            console.log(res1.data)
            console.log(res2.data)
            console.log(res8.data)
            console.log(res7.data)
            console.log(res5.data)
            
            setEmployers(res4.data);
            setStudent(res1.data);
            setSpeciality(res2.data);
            setSlider(res8.data);
            setNews(res7.data);
            setWarnings(res5.data);
        })()
    },[])

    const DeleteClick=((i,id)=>{
        axios.get(`https://bsite.net/IvanovIvan/slider/delete/${id}`).then((result)=>{
            result.status==200 ? window.location.reload()
                : alert("Сталась помилка, повторіть будь ласка пізніше");  
        })
    })

    const DeleteNewsClick=((i,id)=>{
        axios.get(`https://bsite.net/IvanovIvan/news/delete/${id}`).then((result)=>{
            result.status==200 ? window.location.reload()
                : alert("Сталась помилка, повторіть будь ласка пізніше");  
        })
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
    const ActiviesClick=((e)=>{
        setState(5);
    })

    const AdministrationClick = ((e)=>{
        setState(6);
    })

    const NewsClick = ((e)=>{
        setState(7);
    })   

    const SliderClick = ((e)=>{
        setState(8);
    })

    const AttentionClick = ((e)=>{
        setState(9);
    })

    const AddClick = ((e)=>{
        if(state === 8 ) {
            
        }else{
            setShowForm(true)
        }
        
    })
    
    
    const SliderAddClick=((e)=>{
        bodyFormData.append('file',getFile);
        axios({
            method: 'POST',
            url : "http://localhost:5000/slider/upload",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
          }
          ).then((res)=>{
            console.log(getFile);
            console.log(res.data);
            window.location.reload();
            
    })})

    const handleFileSelected = (e) => {
        const files = Object(e.currentTarget.files)[0]
        console.log(files)
        setFile(files);
        console.log("Файл :",getFile)
      } 
      
    
    return (
        <div className = "">
            <div className="admin_title">
                    <h1>Ласкаво просимо адміністраторе!</h1>
            </div>
            <div className="all_admin">
                <div className="menu_admin">
                    <div className="main_menu">
                        <div className="admin_menu_title">
                            <p>Меню</p> 
                        </div>
                      <ul>
                          <li onClick={(i)=>StudentClick(i)}>Студенту</li>
                          <li onClick={(i)=>AbiturientClick(i)}>Абітурієнту</li>
                          <li onClick={(i)=>SpecialityClick(i)}>Спеціальності</li>
                          <li onClick={(i)=>AdministrationClick(i)}>Адміністація</li>
                          <li onClick={(i)=>NewsClick(i)}>Новини</li>
                          <li onClick={(i)=>AttentionClick(i)}>Розділ Увага</li>
                          <li onClick={(i)=>SliderClick(i)}>Слайдер</li>
                          <li onClick={(i)=>EmployersClick(i)}>Колектив</li>
                          <li onClick={(i)=>EmployersClick(i)}>Діяльність</li>
                      </ul>
                    </div>
                    <div className="sub_menu">
                        <div className="pidmenu">
                            <ul>
                                    {state === 1 ? 
                                    student.map((s, index)=><li>{s.name}</li>
                                    ):<li></li>
                                }
                                    {state === 2 ? 
                                    speciality.map((s, index)=><li>{s.name}</li>
                                    ):<li></li>
                                }
                                {
                                    state ===4 ?
                                    employers.map((s,index)=><li>{s.name}</li> ): <li></li>
                                }
                                {
                                    state ===5 ? 
                                    activies.map((i,index)=><li>{i.name}</li>) : <li></li>                         
                                }
                            </ul>
                        </div>
                        <div className="buttons">
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
                                        <button onClick={() => setShowPage1(1)} >1</button>
                                        <button onClick={() => setShowPage1(2)} >2</button>
                                        <button onClick={() => setShowPage1(3)} >3</button>
                                    </div>
                                </div>       
                            </div>
                             <button className="butn" onClick={(i) => AddClick(i)}> Додати</button>

                         </div>
                        </div>

                    </div>
                  
                </div>
                <div className="other_admin">
                    <div className = "slider_all">
                    <div className = "slider_image">
                        {   
                        state === 8 ? (
                           <div className = "slider_image">
                            
                            {slider.map((s,index)=> (
                                <div className = "image_with_delete">
                                <img src={s.image}></img>
                                <i class="fas fa-minus-circle" onClick = {(i)=>DeleteClick(i,s.id)}></i>
                            
                            </div>
                            ))
                            }
                            <div className = 'upload'>
                                <input type="file"  id= "selectFile" onChange={(i)=>handleFileSelected(i)} />
                            <button    id = "slideradd" onClick={(i)=>SliderAddClick(i) }>Додати</button>
                            </div>
                           
                            </div>
                            ) : <h1></h1>    
                                  
                        }                   
                        </div>
                       
                    </div>        
                  <div className="admin_page1">
                        <div
					          class="background_page1"
					           style={{
					        	display: showPage1 == 1 ? "block" : "none"                     
		                        }}>
                                <div id="cancel-btn" ><i className="fas fa-times" onClick={() => setShowPage1(0)}></i></div>
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
                  <div className="admin_page2">
                        <div
					          class="background_page2"
					           style={{
					        	display: 
					        		showPage1 == 2 ? "block" : "none"        
					        }}>
                                <div id="cancel-btn" ><i className="fas fa-times" onClick={() => setShowPage1(0)}></i></div>
                            <div className="admin_page2_info">
                                <input type="text"  className="elemen_admin  elemen_admin_input" placeholder="Заголовок"/>
                                <textarea name="text" className="elemen_admin elemen_admin_textarea" id=""  placeholder="Текст"></textarea>
                                <input type="text"  className="elemen_admin  elemen_admin_input" placeholder="Посилання"/>
                             </div>
                             <div className="admin_page2_buttons">
                                
                                <button>Зберегти</button>
                            </div>
                        </div>
                  </div>
                  <div className="news_admin">
                        {
                            state === 7 ? 
                                news.map((n,index)=>(
                                    <div className = "one_admin_news">
                                        <h1>{n.title}</h1>
                                        <div className="area_with_text">
                                            <img src={`data:image/gif;base64,${n.image}`}/>
                                            <p>{n.short_text}</p>
                                        </div>
                                        <i class="fas fa-minus-circle" onClick = {(i)=>DeleteNewsClick(i,n.id)}></i>
                                    </div>     
                                )): <h1></h1>                
                        }
                    </div>


                </div>
                
                          
            </div>
        </div>
            
        
    )
}

export default AdminPage

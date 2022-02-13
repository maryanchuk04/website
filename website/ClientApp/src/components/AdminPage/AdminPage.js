import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../AdminPage/AdminPage.css'
import Chudo from './Chudo'

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
    const [titlepage,setTitlepage] = useState("");


    const [showChudo,setShowChudo] = useState(false);


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
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const AbiturientClick=((e)=>{
        setState(2);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })
    const SpecialityClick=((e)=>{
        setState(3);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })
    
    const EmployersClick=((e)=>{
        setState(4);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })
    const ActiviesClick=((e)=>{
        setState(5);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const AdministrationClick = ((e)=>{
        setState(6);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const NewsClick = ((e)=>{
        setState(7);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })   

    const SliderClick = ((e)=>{
        setState(8);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

    const AttentionClick = ((e)=>{
        setState(9);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const AddClick = ((e)=>{
        setShowChudo(true);
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
      
    const SaveButton = ()=>{

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
                                    student.map((s, index)=>(
                                    
                                    <div>
                                    <li>{s.name}</li>
                                    
                                    
                                    </div>
                                    )):<li></li>
                                
                                    
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
                        <button id = "add" style ={{display : "none"}} onClick = {(i)=>AddClick(i)}>Додати</button>

                    </div>
                  
                </div>
                <div className="other_admin">
                {
                 showChudo === true ?
                (
                <div>
                    <div className="input_block">
                        <form>
                            <input placeholder = "Назва сторінки" required></input>
                            <button onSubmit={(i)=>SaveButton(i)} >Зберегти</button>
                            <button onClick={(i) =>setShowChudo(false)}>Закрити </button>

                            <input type ="file" > ./userfile/</input>
                        </form>
                     </div>
                    <Chudo/>
                        
                    </div> 

                 ): <div></div>
                 }

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

                </div>
                
                          
            
             </div>
            
        </div>
            
        
    )
}

export default AdminPage

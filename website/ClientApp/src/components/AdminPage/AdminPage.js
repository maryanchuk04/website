import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../AdminPage/AdminPage.css'
import Chudo from './Chudo'
import SpecialEditor from './components/SpecialEditor'
function AdminPage() {
    const [history,setHistory] = useState([])
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
    const [getFile,setFile] = useState();
    const [showPage1, setShowPage1] = useState(0);
    const [titlepage,setTitlepage] = useState("");
    const [showChudo,setShowChudo] = useState(false);

    const [numberfield, setNumberfield] = useState("");
    const [number,setNumber] = useState(0);
    const [element,setElement] = useState(false);
    const [linkres,setLinkres] = useState("")
    const [titlePage,setTitlePage] = useState("")
    var setBarabulya = ""
    var bodyFormData = new FormData();

    const [res,setRes] = useState({});

    useEffect(()=>{
        (async ()=>{
            const res1 = await axios.get("https://bsite.net/IvanovIvan/student")
            const res2 = await axios.get("https://bsite.net/IvanovIvan/speciality")
            const res7 = await axios.get("https://bsite.net/IvanovIvan/news")
            const res5 = await axios.get('https://bsite.net/IvanovIvan/advertisement')
            const res8 = await axios.get("https://bsite.net/IvanovIvan/slider/all")
            const res4 = await axios.get("https://bsite.net/IvanovIvan/employerspage")
            const res10 = await axios.get("https://bsite.net/IvanovIvan/collegeactivity")
            const res11 =await axios.get("https://bsite.net/IvanovIvan/history")
            console.log(res1.data)
            console.log(res2.data)
            console.log(res8.data)
            console.log(res7.data)
            console.log(res5.data)
            console.log(res10.data)
            console.log(res11.data)
            setEmployers(res4.data);
            setStudent(res1.data);
            setSpeciality(res2.data);
            setSlider(res8.data);
            setNews(res7.data);
            setWarnings(res5.data);
            setActivies(res10.data)
            setHistory(res11.data)
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
        setShowChudo(false);
        setElement(false);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const AbiturientClick=((e)=>{
        setState(2);
        setShowChudo(false);
        setElement(false);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })
    const SpecialityClick=((e)=>{
        setState(3);
        setShowChudo(false);
        setElement(false);
        
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })
    
    const EmployersClick=((e)=>{
        setState(4);
        setShowChudo(false);
        setElement(false);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })
    const ActiviesClick=((e)=>{
        setState(5);
        setShowChudo(false);
        setElement(false);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const AdministrationClick = ((e)=>{
        setState(11);
        setShowChudo(false);
        setElement(false);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const NewsClick = ((e)=>{
        setState(7);
        setShowChudo(false);
        setElement(false);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })   

    const SliderClick = ((e)=>{
        setShowChudo(false);
        setState(8);
        setElement(false);
        
    })

    const AttentionClick = ((e)=>{
        setState(9);
        setShowChudo(false);
        setElement(false);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const HistoryClick = ((e)=>{
        setState(6);
        var x = document.getElementById("add");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
         }
    })

    const AddClick = ((e)=>{
        setElement(false);
        setShowChudo(true);
        setLinkres("");
        console.log(state)
    })
    
    const seterForHTML=(i)=>{
        setBarabulya = i;
        console.log(setBarabulya);
    }


    const SliderAddClick=((e)=>{
        bodyFormData.append('file',getFile);
        axios({
            method: 'POST',
            url : "https://bsite.net/IvanovIvan/slider/upload",
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
     
     const SaveSliderClick = (i,id,number) =>{
        axios.post(`https://bsite.net/IvanovIvan/slider/save/${id}`,{
            number : number
        }).then((result)=>{
           
        })
     }
    const SaveButton = (i)=>{
        i.preventDefault()
        if(state === 1){
            axios.post(`https://bsite.net/IvanovIvan/student/add`,{
                name : titlePage,
                page : setBarabulya
            }).then((result)=>{
                console.log(result.data)  
                window.location.reload();               
            })
        }
        
        if(state === 2){
            axios.post(`https://bsite.net/IvanovIvan/entrant/add`,{
            name : titlePage,
            page : setBarabulya
        }).then((result)=>{
            window.location.reload();   
        })
        }
        if(state ===3){
            axios.post(`https://bsite.net/IvanovIvan/speciality/add`,{
            name : titlePage,
            page : setBarabulya
        }).then((result)=>{
            window.location.reload();   
        })
        }
        if(state ==5){
            axios.post(`https://bsite.net/IvanovIvan/collegeactivity/add`,{
            name : titlePage,
            page : setBarabulya
        }).then((result)=>{
            window.location.reload();   
        })
        }
    }

    const clickElement  = (i,value,id) =>{
        setRes({})
        if(value == "student") {
            axios.get(`https://bsite.net/IvanovIvan/student/${id}`).then((result)=>{
                setElement(false);
                setRes(result.data);
                console.log(result.data);
                setElement(true);
            })
        }
        if(value == "collegeactivity") {
            axios.get(`https://bsite.net/IvanovIvan/collegeactivity/${id}`).then((result)=>{
                setElement(false);
                setRes(result.data);
                console.log(result.data);
                setElement(true);
            })
        }
        if(value == "speciality") {
            axios.get(`https://bsite.net/IvanovIvan/speciality/${id}`).then((result)=>{
                setElement(false);
                setRes(result.data);
                console.log(result.data);
                setElement(true);
            })
        }
        
    }
    const SavePage = (i,id)=>{
        
    }




    
    const file = (e)=>{
        const files = Object(e.currentTarget.files)[0]
        console.log(files)
        setFile(files);
        console.log("Файл :",getFile)
        bodyFormData.append('file',files);
        axios({
            method: 'POST',
            url : "http://localhost:5000/upload",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
          }
          ).then((res)=>{
            console.log();
            console.log(res.data);
            setLinkres(res.data)
    })
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
                          <li onClick={(i)=>ActiviesClick(i)}>Діяльність</li>
                          <li onClick={(i)=>AbiturientClick(i)}>Абітурієнту</li>
                          <li onClick={(i)=>SpecialityClick(i)}>Спеціальності</li>
                          
                          <li onClick={(i)=>NewsClick(i)}>Новини</li>
                          <li onClick={(i)=>AttentionClick(i)}>Розділ Увага</li>
                          <li onClick={(i)=>SliderClick(i)}>Слайдер</li>
                          <li onClick={(i)=>EmployersClick(i)}>Колектив</li>
                          <li onClick={(i)=>HistoryClick(i)}>Історія</li>
                          <li onClick={(i)=>HistoryClick(i)}>Галерея</li>

                      </ul>
                    </div>
                    <div className="sub_menu">
                        <div className="pidmenu">
                            <ul>
                                    {state === 1 ? 
                                    student.map((s, index)=>(
                                    <div>
                                        <li onClick = {(i)=>clickElement(i,"student",s.id)}>{s.name}</li>
                                    </div>
                                    )):<li></li>
                                
                                    
                                }
                                    {state === 2 ? 
                                    speciality.map((s, index)=>(
                                    <div>
                                        <li onClick = {(i)=>clickElement(i,"speciality",s.id)}>{s.name}</li>
                                    </div>
                                    )
                                    ):<li></li>
                                }
                                {
                                    state ===4 ?
                                    employers.map((s,index)=>(<div>

                                        <li  >{s.name}</li>
                                        </div> )): <li></li>
                                }
                                {
                                    state === 5 ? 
                                    activies.map((a,index)=>(
                                    <div>
                                        <li onClick = {(i)=>clickElement(i,"collegeactivity",a.id)}>{a.name}</li>
                                    </div>
                                    
                                    )) : <li></li>                         
                                }
                                {
                                    state === 6 ? 
                                    history.map((h,index)=>(
                                    <div>
                                        <li onClick = {(i)=>clickElement(i,"history",h.id)}>{h.name}</li>
                                    </div>)) : <></>
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
                        
                        <form onSubmit={(i)=>SaveButton(i)}>
                            <input placeholder = "Назва сторінки" onChange={(i)=>setTitlePage(i.target.value)} required></input>
                            <p>{linkres}</p>
                            <input id = "fileinput" type ="file" onChange = {(i)=>file(i)} ></input>
                            <div className="but">
                                <button type ="submit">Зберегти</button>
                                <button onClick={(i) =>setShowChudo(false)}>Закрити </button>
                            </div>
                            
                            
                        </form>
                     </div>
                    <Chudo  seterForHTML = {seterForHTML}/>          
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
                                            <img src={n.image}/>
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
                        //СЛАЙДЕР
                        state === 8 ? (
                            <div>
                           <div className = "slider_image">
                            {slider.map((s,index)=> (
                                <div className = "image_with_delete">
                                    
                                    <img src={s.image}></img>
                                    <div className="knopku">
                                        <input type="number" placeholder ={s.number} onChange = {(i)=>setNumber(i.target.value)}/>
                                        <button onClick = {(i)=>SaveSliderClick(i,s.id,number)}>Зберегти</button>
                                        <button onClick = {(i)=>DeleteClick(i,s.id)}>Видалити</button>
                                    </div>
                                </div>
                            ))
                            }
                            
                           
                            </div>
                            <div className = 'upload'>
                                <input type="file"  id= "selectFile" onChange={(i)=>handleFileSelected(i)} />
                                <button  id = "slideradd" onClick={(i)=>SliderAddClick(i) }>Додати</button>
                                </div>
                            </div>
                            ) : <h1></h1>    
                                  
                        }                   
                        </div>
                    </div> 
                    {
                        element  ? (
                        <div>
                            <button onClick={(i)=>SavePage(i,res.id)}></button>
                            <SpecialEditor text={res.page}/>)
                        </div>
                        )
                         : <p></p>
                    }
                </div>
                
                          
            
             </div>
            
        </div>
            
        
    )
}

export default AdminPage

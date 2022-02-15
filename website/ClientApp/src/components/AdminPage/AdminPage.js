import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../AdminPage/AdminPage.css'
import Chudo from './Chudo'
import News from './components/News'
import SpecialEditor from './components/SpecialEditor'
import Uvaha from './components/Uvaha'
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
    const [temp,setTemp] = useState("")
    const [numberfield, setNumberfield] = useState("");
    const [number,setNumber] = useState(0);
    const [element,setElement] = useState(false);
    const [linkres,setLinkres] = useState("")
    const [titlePage,setTitlePage] = useState("")
    const [gallery,setGallery] = useState([]);
    const [opp,setOpp] = useState([])
    const [suboppfield,setSubOppField] = useState("");
    const [obj,setObj] = useState({});
    const [imagelinkemp,setImagelinkemp] = useState("");

    //для форми колектив
    const [fullname,setFullname] = useState("");
    const [posada,setPosada] = useState("");
    const [phone,setPhone] = useState("");
    const [kval,setKval] = useState("");
    const [pred,setPred] = useState("");

    //для сабменю
    const [one,setOne] = useState("")
    const [two,setTwo] = useState("")
    const [three,setThree] = useState("")
    const [four,setFour] = useState("")
    const [five,setFive] = useState("")


    var setBarabulya = ""
    var bodyFormData = new FormData();

    var barabulya2 = ""
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
            const res12 = await axios.get("https://bsite.net/IvanovIvan/gallery")
            const res13 = await axios.get("https://bsite.net/IvanovIvan/opp")
            setEmployers(res4.data);
            setStudent(res1.data);
            setSpeciality(res2.data);
            setSlider(res8.data);
            setNews(res7.data);
            setWarnings(res5.data);
            setActivies(res10.data)
            setHistory(res11.data)
            setGallery(res12.data)
            setOpp(res13.data)
        })()
    },[])

    const DeleteClick=((i,id)=>{
        axios.get(`https://bsite.net/IvanovIvan/slider/delete/${id}`).then((result)=>{
            result.status==200 ? window.location.reload()
                : alert("Сталась помилка, повторіть будь ласка пізніше");  
        })
    })

    const DeleteNewsClick=((i,id)=>{
        axios.get(`http://localhost:5000/news/delete/${id}`).then((result)=>{
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
    
    const GalleryClick = (e) =>{
        setState(12);

    }
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

    const setBarabulya2=(i)=>{
        barabulya2 = i;
        console.log(barabulya2)
    }   

    const OppClick = (i)=>{
        setState(13);
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
    const SavePage = (i,id,text)=>{
        console.log(state);
        console.log(temp)
        console.log(res)
        console.log("Barabulya " +  text);
        switch(state){
            case 1: {
                axios.post(`https://bsite.net/IvanovIvan/student/update/${id}`,{
                   name : res.name,
                   page : text,
                   number : res.number
                }).then((result)=>{
                    console.log(result.data);
                })
                break;
            }
            case 2:{
                axios.post(`https://bsite.net/IvanovIvan/entrant/update/${id}`,{
                    name : res.name,
                    page : text,
                    number : res.number
                }).then((result)=>{
                    console.log(result.data);
                })
                break;
            }
            case 3:{
                axios.post(`https://bsite.net/IvanovIvan/speciality/update/${id}`,{
                    name : res.name,
                    page : text,
                    number : res.number
            }).then((result)=>{
                    console.log(result.data);
                })
                break;
            }
            case 5:{
                axios.post(`https://bsite.net/IvanovIvan/collegeactivity/update/${id}`,{
                    name : res.name,
                    page : text,
                    number : res.number
                }).then((result)=>{
                    console.log(result.data);
                })
                break;
            }
            case 6:{
                axios.post(`https://bsite.net/IvanovIvan/history/update/${id}`,{
                    name : res.name,
                    page : text,
                    number : res.number
                }).then((result)=>{
                    console.log(result.data);
                })
                break;
            }
        }   
    }
    const EmpSubClick=(i,id)=>{
        axios.get(`https://bsite.net/IvanovIvan/employerspage/${id}`).then((result)=>{
            console.log(result.data);
            setObj(result.data);
        })
        setState(15);  
    }
    const DeletePage = (i,id)=>{
        switch(state){
            case 1: {
                axios.delete(`https://bsite.net/IvanovIvan/student/delete/${id}`).then((result)=>{
                    console.log(result.data);
                    window.location.reload();
                })
                break;
            }
            case 2:{
                axios.delete(`https://bsite.net/IvanovIvan//entrant/delete/${id}`).then((result)=>{
                    console.log(result.data);
                    window.location.reload();
                })
                break;
            }
            case 3:{
                axios.delete(`https://bsite.net/IvanovIvan/speciality/delelte/${id}`).then((result)=>{
                    console.log(result.data);
                    window.location.reload();
                })
                break;
            }
            case 5:{
                axios.delete(`https://bsite.net/IvanovIvan/collegeactivity/delete/${id}`).then((result)=>{
                    console.log(result.data);
                    window.location.reload();
                })
                break;
            }
            case 6:{
                axios.delete(`https://bsite.net/IvanovIvan/history/delete/${id}`).then((result)=>{
                    console.log(result.data);
                    window.location.reload();
                })
                break;
            }
        }   
    }

    const DeleteGallery =(i,id)=>{
        axios.get(`https://bsite.net/IvanovIvan/gallery/delete/${id}`).then((result)=>{
            
            window.location.reload();
        })
    }
    
    const file = (e)=>{
        const files = Object(e.currentTarget.files)[0]
        console.log(files)
        setFile(files);
        console.log("Файл :",getFile)
        bodyFormData.append('file',files);
        axios({
            method: 'POST',
            url : "https://bsite.net/IvanovIvan/upload",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
          }
          ).then((res)=>{
            console.log();
            console.log(res.data);
            setLinkres(res.data)
            setImagelinkemp(res.data);
          })
    }


    //1 - СТудент 
    //2 - abiturient
    //3 - speciality
    //4 - employerspage
    //5 - activity
    //6 - history
    //7- news
    //8 - slider
    //9 - Attention
   
    const AddGalleryFile = (i) =>{
        bodyFormData.append('file',getFile);
        axios({
            method: 'POST',
            url : "https://bsite.net/IvanovIvan/gallery/add",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
          }
          ).then((res)=>{
            console.log(getFile);
            console.log(res.data);
            window.location.reload();
            
    })
    }

    const AddSubOpp = (i,id,text)=>{
        i.preventDefault()
        console.log(text)
        axios.post(`https://bsite.net/IvanovIvan/opp/sub/${id}`,{
           text : text
        }).then((result)=>{
        
             window.location.reload()
            
        })
    }

    const DeleteEmployer = (i,id,empid)=>{
        axios.delete(`http://localhost:5000/employerspage/deleteemployer/${id}/${empid}`).then((result)=>{
            console.log(`http://localhost:5000/employerspage/deleteemployer/${id}/${empid}`)
            console.log(result.data);
            
        })
    }


    const SubmitFormEmp = (i,id,fullname,posada,kval,number,pred)=>{
        i.preventDefault()
        bodyFormData.append('file',getFile);
        file(i);

        axios.post(`https://bsite.net/IvanovIvan/employerspage/addemployer/${id}`,{
            full_name : fullname,
            posada : posada,
            status : kval,
            number : number,
            lesson : pred,
            image : imagelinkemp
        }).then((result)=>{

            console.log(result.data)
            
            /*
            if(result.status ==200)
               // window.location.reload();
            
            else 
             alert("Помилка")*/
        })
    }

    const doneNumeration = (i,one,id)=>{
        switch(state){
            case 1: {
                axios.post(`https://bsite.net/IvanovIvan/student/update/number/${id}`,{
                    number : parseInt(one)
                }).then((result)=>{
                    console.log(result.data)
                })
                break;
            }
            case 2: {
                axios.post(`https://bsite.net/IvanovIvan/speciality/update/number/${id}`,{
                    number : parseInt(one)
                }).then((result)=>{
                    console.log(result.data)
                })
                break;
            }
            case 4: {
                axios.post(`https://bsite.net/IvanovIvan/employerspage/update/number/${id}`,{
                    number : parseInt(one)
                }).then((result)=>{
                    console.log(result.data)
                })
                break;
            }
            case 5: {
                axios.post(`https://bsite.net/IvanovIvan/collegeactivity/update/number/${id}`,{
                    number : parseInt(one)
                }).then((result)=>{
                    console.log(result.data)
                })
                break;
            }
            case 6: {
                axios.post(`https://bsite.net/IvanovIvan/history/update/number/${id}`,{
                    number : parseInt(one)
                }).then((result)=>{
                    console.log(result.data)
                })
                break;
            }
        }
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
                          <li onClick={(i)=>GalleryClick(i)}>Галерея</li>
                          <li onClick={(i)=>OppClick(i)}>ОПП</li>
                      </ul>
                    </div>
                    <div className="sub_menu">
                        <div className="pidmenu">
                            <ul>
                                    {
                                    state === 1 ? 
                                    student.map((s, index)=>(
                                    <div className = "qwert">
                                        <li onClick = {(i)=>clickElement(i,"student",s.id)}>{s.name}</li>
                                        <input type="number" placeholder = {s.number} onChange={(i)=>setOne(i.target.value)}/>
                                        <button onClick = {(i)=>doneNumeration(i,one,s.id)}>Зберегти нумерацію</button>
                                    </div>
                                    )):<li></li>
                                
                                    
                                }
                                    {state === 2 ? 
                                    speciality.map((s, index)=>(
                                    <div className = "qwert">
                                        <li onClick = {(i)=>clickElement(i,"speciality",s.id)}>{s.name}</li>
                                        <input type="number" placeholder = {s.number} onChange={(i)=>setTwo(i.target.value)}/>
                                        <button onClick = {(i)=>doneNumeration(i,two,s.id)}>Зберегти нумерацію</button>
                                        
                                    </div>
                                    )
                                    ):<li></li>
                                }
                                {
                                    state ===4 ?
                                    employers.map((s,index)=>(<div className = "qwert">
                                        <li onClick={(i)=>EmpSubClick(i,s.id)}>{s.name}</li>
                                        <input type="number" placeholder = {s.number} onChange={(i)=>setThree(i.target.value)}/>
                                        <button onClick = {(i)=>doneNumeration(i,three,s.id)}>Зберегти</button>
                                        </div> )): <li></li>
                                }
                                {
                                    state === 5 ? 
                                    activies.map((a,index)=>(
                                    <div className = "qwert">
                                        <li onClick = {(i)=>clickElement(i,"collegeactivity",a.id)}>{a.name}</li>
                                        <input type="number" placeholder = {a.number} onChange={(i)=>setFour(i.target.value)} />
                                        <button onClick = {(i)=>doneNumeration(i,four,a.id)}>Зберегти нумерацію</button>
                                    </div>
                                    
                                    )) : <li></li>                         
                                }
                                {
                                    state === 6 ? 
                                    history.map((h,index)=>(
                                    <div>
                                        <li onClick = {(i)=>clickElement(i,"history",h.id)}>{h.name}</li>
                                        <input type="number" placeholder = {h.number} onChange={(i)=>setFive(i.target.value)}/>
                                       
                                       
                                        <button onClick = {(i)=>doneNumeration(i,five,h.id)}>Зберегти нумерацію</button>
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
                            <input placeholder = "Назва сторінки" onChange={(i)=>setTitlePage(i.target.value)} value = {titlePage} required></input>
                            <p>{linkres}</p>
                            <input id = "fileinput" type ="file" onChange = {(i)=>file(i)} ></input>
                            <div className="but">
                                <button type ="submit">Зберегти</button>
                                <button onClick={(i) =>setShowChudo(false)}>Закрити </button>
                            </div>                            
                        </form>
                     </div>
                    <Chudo html ={setBarabulya}  seterForHTML = {seterForHTML}/>          
                    </div> 

                 ): <div></div>
                 }
                {
                state === 7 ? ( 
                <div>
                 <div className = "news_add_block">
                    <News/>

                 </div>     
                  <div className="news_admin">
                                {
                                news.map((n,index)=>(
                                    <div className = "one_admin_news">
                                        <h1>{n.title}</h1>
                                        <div className="area_with_text">
                                            <img src={n.image}/>
                                            <p>{n.short_text}</p>
                                        </div>
                                        <i class="fas fa-minus-circle" onClick = {(i)=>DeleteNewsClick(i,n.id)}></i>   
                                    </div>     
                                ) 
                                )}             
                        

                    </div>
                    </div> 
                    ) : <></>   

                    }
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
                            <div className="special_editor_buttons">
                                <button onClick={(i)=>SavePage(i,res.id,barabulya2)}>Зберегти</button>
                                <button onClick={(i)=>DeletePage(i,res.id)}>Видалити</button>
                            </div>
                            <SpecialEditor text={res.page} setBarabulya2 = {setBarabulya2}/>
                        </div>
                        )
                         : <p></p>
                    }
                    {
                        state === 12 ? ( 
                        <div>

                        
                        <div className = "title_galery">
                            <input type="file" onChange ={(i)=>handleFileSelected(i)} />
                            <button onClick = {(i)=>AddGalleryFile(i)}>Додати</button>
                        </div>
                            <div className = "admin_gallery">
                            {
                            gallery.map((g,index)=>(
                            <div className = "gallery_item">
                                <img src={g.image}/>
                                <div className="knopku_gallery">
                                    <button onClick={((i)=>DeleteGallery(i,g.id))}>Видалити</button>
                                </div>
                            </div>
                            )) 
                            }
                            </div> 
                        </div>
                        ):<></>
                        
                    }
                    {
                        state ===13 ? (
                            <div className = "opp_admin">
                                
                                {
                                    opp?.map((o,index)=>(
                                        <div className="one_opp_admin">
                                            <h2>{o.name}</h2>
                                            <ul>
                                                
                                                <div className = "input_for_opp">
                                                {o?.opp?.map((i,index)=><li>{i}</li>)}
                                                    <form onSubmit = {(i)=>AddSubOpp(i,o.id,suboppfield)}>
                                                        <input type = "text" onChange ={(i)=>setSubOppField(i.target.value)} required/>
                                                        <button type="submit">Додати Опп</button>
                                                    </form>
                                                </div>
                                                
                                                
                                            </ul>
                                        </div>
                                    ))
                                
                                }
                            </div>
                        ) : <></>
                    }
                    {
                        state === 9 ? (
                           <Uvaha/>
                        ):<></>
                    }
                    {
                        state === 15  ? (
                            <div className = "admin_employers"> 
                                <div className="forma_add_emp">
                                    <form onSubmit={(i)=>SubmitFormEmp(i,obj.id,fullname,posada,kval,number,pred)}>
                                        <input type="text" placeholder = "Повне ім`я" required onChange ={(i)=>setFullname(i.target.value)} value ={fullname}/>
                                        <input type="text" placeholder = "Посада" required onChange ={(i)=>setPosada(i.target.value)} value ={posada}/>
                                        <input type="text" placeholder = "Кваліфікація" onChange ={(i)=>setKval(i.target.value)} value ={kval}/>
                                        <input type="text" placeholder = "Номер телефону" onChange ={(i)=>setNumber(i.target.value)} value ={number}/>
                                        <input type="text" placeholder = "Предмети" onChange ={(i)=>setPred(i.target.value)} value ={pred}/>
                                        <input type="file" onChange = {(i)=>handleFileSelected(i)} />
                                        <button type="submit">Додати</button>
                                    </form>
                                </div>
                            { 
                                obj.employers?.map((e,index)=>(
                                <div className="one_admin_emp">
                                    <h2>{e.full_name}</h2>
                                    <p>{e.posada}</p>
                                    <button onClick={(i)=>DeleteEmployer(i,obj.id,e.id)}>Видалити</button>
                                </div>
                            ))
                            }
                           </div>
                        ) : <></>
                    }
                    
                </div>
                
                          
            
             </div>
            
        </div>
            
        
    )
}

export default AdminPage

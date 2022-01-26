import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../Shared/Header';
import '../components/News.css'
function News() {

  const [areatext,setareatext] = useState("")
  const [areashort_text,setAreashort_text] = useState("")
  const [titlearea,settitlearea] = useState("")


  const [news,setnews] = useState({})
  const [titlefield,settitlefield] = useState("")
  const [short_textfield,setshort_textfield] = useState("")
  const [textfield,settextfield] = useState("")
  const  [getFile,setFile] = useState();
  const [allnews, setallNews] = useState([]);


  useEffect(()=>{
    axios.get("http://localhost:5000/news").then((result)=>{
      setallNews(result.data);
      console.log(result.data);
    });
}, []);




  var bodyFormData = new FormData();
  const HandleClick=(i)=>{
    if(titlefield === "" || textfield === "" || short_textfield ==="" ){
      alert("Помилка введіть данні які хочете додати");
    }
    else{
    axios.post("http://localhost:5000/news/add",{
      title: titlefield,
      short_text: short_textfield,
      text: textfield    
    }).then((result)=>{
      console.log(result);
      console.log(result.data);
      bodyFormData.append('file',getFile);
      axios({
        method: 'POST',
        url : `http://localhost:5000/news/upload/${result.data.id}`,
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' }
      }
      ).then((res)=>{
        console.log(getFile);
        console.log(res.data);
        setnews(res.data);
        console.log("news",news)
    }).catch(function (response) {
      console.log(response);
  });
    })
  }   
  }
  const SaveClick = (e,id,image)=>{
    e.preventDefault();
    e.persist();
    if(e.target[0].value.trim()!=="" &&  e.target[1].value.trim()!=="" &&  e.target[2].value.trim()!=="")
    {
    axios.post(`http://localhost:5000/news/replace/`,{
      id:id,
      title: e.target[0].value,
      short_text: e.target[1].value,
      text:e.target[2].value,
      image: image

    }).then((result2)=>{
      console.log(result2.data);
      //window.location.reload();
      console.log(e);
    })   
    }
  }




  const handleFileSelected = (e) => {
    const files = Object(e.currentTarget.files)[0]
    console.log(files)
    setFile(files);
    console.log("Файл :",getFile)
  } 
  
  const imgselectHendler=(e)=>{
    document.getElementById('selectFile').click();
    
  }
  
  const CancelClick=(e) => {
    settitlefield("");
    settextfield("");
    setshort_textfield("");
    news.image = "";
  }

  return (
    <div>
        <Header/>
        <div className="container_all">
          <div className="add_news">
              <h1>Нова Новина</h1>
              <div className="info">
                <div className="all_for_file">
                  <div className="container_for_krasota">
                    <div className="wrappers">                
                      <div className="kartinka">
                        <img src={`data:image/gif;base64,${news.image}`} alt="" />
                      </div>
                        <div className="krasota">
                          <div className="icon"><i className = "fas fa-cloud-upload-alt"></i></div>
                          <div className="nadpus">Виберіть будь ласка файл!</div>                       
                        </div>
                      <div id="cancel-btn" ><i className="fas fa-times" onClick={(i)=>CancelClick(i)}></i></div>
                      <div className ="file-name" placeholder=">Ім`я файлу тут!">{news.title}</div>
                    </div>
                  </div>
                  <input type="file"  id= "selectFile" onChange={(i)=>handleFileSelected(i)}  hidden/>
                  <button id ="custom-btn"onClick={(i)=>imgselectHendler(i)} >Виберіть файл</button>
                </div>

                 <div className="text"> 
                   <form >
                     <input type="text" placeholder="Заголовок"  onChange={(i)=>settitlefield(i.target.value)} value ={titlefield} />
                     <textarea type="text" placeholder = "Опис" onChange={(i)=>setshort_textfield(i.target.value)} value ={short_textfield} />
                     <textarea type="text" placeholder = "Вся інформація" onChange={(i)=>settextfield(i.target.value)} value ={textfield}  />
                   </form>
                 </div>
                 
              </div>
              <button onClick={(i)=>HandleClick(i)}>Додати новину</button>

          </div>
          <div className="admin_all_news">
            <div className="header_admin_news">
              Всі новини
            </div>
            {allnews.map((n,index)=>(
          <form className="one_news" onSubmit = {(i)=>SaveClick(i,n.id,n.image)}>
              <div className="title_news">
                <input type="text"  placeholder={n.title}  />
              </div>

              <div className="shos_with_news">
                  <div className="image_in_news">
                    <img src={`data:image/gif;base64,${n.image}`}/>
                  </div>
                    <div className="text">                     
                        <textarea type="text" placeholder ={n.short_text}  />
                        <textarea type="text" placeholder = {n.text} />        
                    </div>
                  </div> 
                  <div className="button_done">
                      <button id ="done">Видалити</button>
                      <button type = "submit" id = "done">Зберегти</button>
                  </div>                 
          </form>
          ))}
        </div>
        </div>
        
    </div>
  );
}

export default News;

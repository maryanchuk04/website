import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../Shared/Header';
import '../components/News.css'
function News() {

  const [areatext,setareatext] = useState("")
  const [areashort_text,setAreashort_text] = useState("")
  const [titlearea,settitlearea] = useState("")

  const [data, setData] = useState("");
  const [news,setnews] = useState({})
  const [titlefield,settitlefield] = useState("")
  const [short_textfield,setshort_textfield] = useState("")
  const [textfield,settextfield] = useState("")
  const  [getFile,setFile] = useState();
  const [allnews, setallNews] = useState([]);


  useEffect(()=>{
    axios.get("https://bsite.net/IvanovIvan/news").then((result)=>{
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
    axios.post("https://bsite.net/IvanovIvan/news/add",{
      title: titlefield,
      short_text: short_textfield,
      text: textfield,
      date:   data
    }).then((result)=>{
      console.log(result);
      console.log(result.data);
      bodyFormData.append('file',getFile);
      axios({
        method: 'POST',
        url : `https://bsite.net/IvanovIvan/news/upload/${result.data.id}`,
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' }
      }
      ).then((res)=>{
        console.log(getFile);
        console.log(res.data);
        setnews(res.data);
        console.log("news",news)
        if(res.status ==200){
          window.location.reload();
        }
        else{
          alert("Виникла помилка!")
        }
    }).catch(function (response) {
      console.log(response);
  });
    })
  }   
  }
  /*
  const SaveClick = (e,id,image)=>{
    e.preventDefault();
    e.persist();
    if(e.target[0].value.trim()!=="" &&  e.target[1].value.trim()!=="" &&  e.target[2].value.trim()!=="")
    {
    axios.post(`https://bsite.net/IvanovIvan/news/replace/`,{
      id:id,
      title: e.target[0].value,
      short_text: e.target[1].value,
      text:e.target[2].value,
      image: image

    }).then((result2)=>{
      console.log(result2.data);
      window.location.reload();
      console.log(e);
    })   
    }
  }*/




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
    
        
          <div className="add_news">
              <h1>Нова Новина</h1>
              <div className="info">
                 <div className="text"> 
                   <form >
                     <input type="text" placeholder="Заголовок"  onChange={(i)=>settitlefield(i.target.value)} value ={titlefield} />
                     <textarea type="text" placeholder = "Опис" onChange={(i)=>setshort_textfield(i.target.value)} value ={short_textfield} />
                     <textarea type="text" placeholder = "Вся інформація" onChange={(i)=>settextfield(i.target.value)} value ={textfield}  />
                     <input type="date" placeholder = "Дата" onChange={(i)=>setData(i.target.value)} value ={data} />
                   </form>
                 </div>
                 
              </div>
              <button  onClick={(i)=>HandleClick(i)}>Додати новину</button>
              <input type="file"  id= "selectFile" onChange={(i)=>handleFileSelected(i)}  hidden/>
                  <button onClick={(i)=>imgselectHendler(i)} >Виберіть файл</button>
          </div>
          
        
        
    
  );
}

export default News;

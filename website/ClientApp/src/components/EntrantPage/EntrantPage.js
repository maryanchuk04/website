import React, { useEffect,useState } from 'react';
import axios from 'axios'
import '../EntrantPage/EntrantPage.css'

function EntrantPage() {

  const [info,setInfo] = useState({})
  
  const [res,setres] = useState([])


  useEffect(()=>{
    axios.get('http://localhost:5000/entrantpage').then((result)=>{
      console.log(result.data);
      setres(result.data);
      console.log(result.data[0].documents)
      setInfo(result.data[0])
      console.log(result.data[0].pdf_link)
    })
  },[])

  return (
  <div className = 'entrant'>
    <div className="entrant_title">
      <h1>{info.title}</h1>
    </div>
    <div className="container_all">
       
          <img src={`data:image/gif;base64,${info.image}`}/> 
        
        <div className="entrant_text_info">
        <ul> 
          <h1>Документи для вступу</h1>
            {info?.documents?.map((i,index)=>(
              <li>{i}</li>
            ))}
        </ul>
          <div className="rules"> 
              <a href = {info.pdf_link} target="_blank">Правила прийому 2022</a>
          </div>
        </div>
    </div>
  </div>
  );
}

export default EntrantPage;

import React, { useEffect,useState } from 'react';
import axios from 'axios'
import '../EntrantPage/EntrantPage.css'

function EntrantPage() {

  const [info,setInfo] = useState({})
  
  const [res,setres] = useState([])


  useEffect(()=>{
    axios.get('https://bsite.net/IvanovIvan/entrantpage').then((result)=>{
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
      <h1>Абітурієнту</h1>
    </div>
    <div className="container_all">
      
          <img className="entrant_image" src="https://i.ibb.co/D1ScHfN/image.png"/> 
       
        <div className="konkurs_link">
          <a href="https://vstup.osvita.ua/" target="_blank"><img src="https://designcollege.cv.ua/wp-content/uploads/2021/04/KONKURS.png" alt="" /></a>
        </div>
    </div>
  </div>
  );
}

export default EntrantPage;

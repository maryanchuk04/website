import React, { useEffect,useState } from 'react';
import axios from 'axios'
import '../EntrantPage/EntrantPage.css'

function EntrantPage() {


/*
  useEffect(()=>{
    axios.get('https://bsite.net/IvanovIvan/entrantpage').then((result)=>{
      console.log(result.data);
      setres(result.data);
      console.log(result.data[0].documents)
      setInfo(result.data[0])
      console.log(result.data[0].pdf_link)
    })
  },[])
*/
  return (
  <div className = 'entrant'>
    <div className="entrant_title">
      <h1>Абітурієнту</h1>
    </div>
    <div className="container_all">

       
        <div className="entrant_page_text">
          <h1>Ласкаво просимо майбутніх студенті!</h1>
        <div className="picture">
          <img src="https://i.ibb.co/f9BdBzs/272209740-995965604686552-1594141176407780600-n.jpg" alt="272209740-995965604686552-1594141176407780600-n" border="0"/>
          <img src="https://i.ibb.co/5j3hqhY/272889206-995965614686551-8105454289040192190-n.jpg" alt="272889206-995965614686551-8105454289040192190-n" border="0"/>
        </div>
       
       
        </div>
        <div className="konkurs_link">
          <div className="ulli">
            <ul><p>Система конкурс</p>
              <li>Все про вступ </li>
              <li> ЗНО-онлайн </li>
              <li>Рейтинги ВНЗ </li>
              <li>Все про ЗНО </li>
            </ul>
          </div>
         
           
              
             
           
           <a href="https://vstup.osvita.ua/" target="_blank"><img src="https://designcollege.cv.ua/wp-content/uploads/2021/04/KONKURS.png" alt="" /></a>
        </div>
        <h3>Телефон приймальної комісії ЧФКБХТ: <strong>(0372) 54 19 01</strong></h3>
    </div>
  </div>
  );
}

export default EntrantPage;

import React from 'react';
import axios from 'axios';
import Header from '../../Shared/Header';
import '../components/News.css'
function News() {
  return (
    <div>
        <Header/>
        <div className="container_all">
          <div className="add_news">
              <h1>Нова Новина</h1>
              <div className="info">
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="image" />
                 <div className="text"> 
                   <form >
                     <input type="text" placeholder="Заголовок"/>
                     <textarea type="text" placeholder = "Опис" />
                     <textarea type="text" placeholder = "Вся інформація"  />
                   </form>
                 </div>
                 
              </div>
              <button>Додати новину</button>
              <button>Завантажити фото</button>
          </div>
        </div>
    </div>
  );
}

export default News;

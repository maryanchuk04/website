import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../Shared/Header';
import '../components/News.css'
function News() {
  const  [getFile,setFile] = useState();
 
  const handleFileSelected = (e) => {
    const files = Object(e.currentTarget.files)[0]
    console.log(files)
    setFile(files);
    console.log("Файл :",getFile)
  } 
  
  const imgselectHendler=(e)=>{
    document.getElementById('selectFile').click();
    
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
                    <div className="wrapper">                
                      <div className="kartinka">
                        <img src={getFile} alt={getFile} />
                      </div>
                        <div className="krasota">
                          <div className="icon"><i className = "fas fa-cloud-upload-alt"></i></div>
                          <div className="nadpus">Виберіть будь ласка файл!</div>                       
                        </div>
                      <div id="cancel-btn"><i className="fas fa-times"></i></div>
                      <div className ="file-name">Ім`я файлу тут!</div>
                    </div>
                  </div>
                  <input type="file"  id= "selectFile" onChange={(i)=>handleFileSelected(i)}  hidden/>
                  <button id ="custom-btn"onClick={(i)=>imgselectHendler(i)} >Виберіть файл</button>
                </div>



                 <div className="text"> 
                   <form >
                     <input type="text" placeholder="Заголовок"/>
                     <textarea type="text" placeholder = "Опис" />
                     <textarea type="text" placeholder = "Вся інформація"  />
                   </form>
                 </div>
                 
              </div>
              <button>Додати новину</button>

          </div>
        </div>
    </div>
  );
}

export default News;

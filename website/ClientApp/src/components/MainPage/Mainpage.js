



import React from 'react'
import Header from "../Shared/Header";
import Menu from "../Shared/Menu";
import './Mainpage.css';
import ImageCarousel from './components/Carousel';
import Main_news from './components/Main_news';
function Main() {
    
    return (
        
       <div className="main">
           <div className="banner">
              
                <Header/>
                <Menu/>
                <ImageCarousel/>
                <div className="shedule">
                    <div className="container_all">
                         <div className="shedul_text">
                             
                         </div>
                    </div>
                </div>
                <div className="news_preview">
                    <div className="container_all">
                        <h1>Новини</h1>
                    </div>
                </div>
                <Main_news/>
                
           </div>           
       </div>
    )
}

export default Main
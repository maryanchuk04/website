import React from 'react'
import Header from "../Shared/Header";
import Menu from "../Shared/Menu";
import './Mainpage.css';
import ImageCarousel from './components/Carousel';
import WarningMain from './components/WarningMain';
import Main_news from './components/Main_news';
function Main() {
    
    return (
        
       <div className="main">
           <div className="banner">
              
                <Header/>
                <Menu/>
                <ImageCarousel/>
                <WarningMain/>
                <div className="news_preview">
                    <img src="https://www.swissinfo.ch/resource/image/44116874/landscape_ratio16x9/1920/1080/d0cad06f4f78b31a8d4b1c322a97ca7b/6FE8C0CB637D9DFE8DF51CCFC2AAF56C/323405930-jpg.jpg" alt="" />
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
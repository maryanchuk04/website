



import React from 'react'
import Header from "../Shared/Header";
import './Mainpage.css';
import ImageCarousel from './components/Carousel';
function Main() {
    
    return (
        
       <div className="main">
           <div className="banner">
                <Header/>
                <ImageCarousel/>
           </div>           
       </div>
    )
}

export default Main
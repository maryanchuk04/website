



import React from 'react'

import './Mainpage.css';
import Slider from 'react-slick'

function Main() {
    const settings = {
        dots: true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true
    };
    return (
        
       <div className="main">
       <Slider
        
            {...settings}
        

        >
            <div className="slider slider1"><p>1</p></div>
            <div className="slider slider2"><p>2</p></div>
            <div className="slider slider3"><p>3</p></div>
            
        </Slider>
       </div>
    )
}

export default Main
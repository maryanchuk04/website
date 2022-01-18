import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {

  const sliderSettings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  }

  const hotelCards = [
    {
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2zWws5ARkXyYCsXlXcUohPw5EEr7ZNWhBQ&usqp=CAU',
      
    },
    {
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2zWws5ARkXyYCsXlXcUohPw5EEr7ZNWhBQ&usqp=CAU',
      
    },
    {
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2zWws5ARkXyYCsXlXcUohPw5EEr7ZNWhBQ&usqp=CAU',
      
    },
    {
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2zWws5ARkXyYCsXlXcUohPw5EEr7ZNWhBQ&usqp=CAU',
      
    },
  ]

  return (
    <div className='content'>
      <Slider {...sliderSettings}>
          
        {hotelCards.map((card, index) => (
          <div className="image_info" key={index}>
           
            <img src={card.imageSrc}  />
            <button className='btn'>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}
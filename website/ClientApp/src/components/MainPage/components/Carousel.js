import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../components/Carousel.css'
export default function Carousel() {

  const sliderSettings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  }

  const hotelCards = [
    {
      
       imageSrc:  'https://nevseoboi.com.ua/uploads/posts/2011-09/1316735818_2_www.nevseoboi.com.ua.jpg',
      
    },
    {
      
       imageSrc:  'https://web.kpi.kharkov.ua/emmb/wp-content/uploads/sites/185/2018/08/ucheba-za-rubezom-1080x480.jpg',
      
    },
    {
     
      imageSrc:  'http://molbuk.ua/uploads/posts/2013-03/1363095587_tehn.jpg',
     
    },
    {
      
       imageSrc:  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fweb.kpi.kharkov.ua%2Femmb%2F2018%2F08%2F28%2Fposvyachennya-v-studenti%2F&psig=AOvVaw2oLztEH4cLPeMa6vadQEVD&ust=1642623924127000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjTyo-RvPUCFQAAAAAdAAAAABAD',
      
    },
  ]

  return (
    <div className='content'>
      <Slider {...sliderSettings}>
          
        {hotelCards.map((card, index) => (
          <div className="image_info" key={index}>
            <img src={card.imageSrc}  />
          </div>
        ))}
      </Slider>
    </div>
  )
}

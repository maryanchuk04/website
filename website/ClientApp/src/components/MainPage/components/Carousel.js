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
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    pauseOnHover:false,
  }

  const hotelCards = [
    {
      
       imageSrc:  'https://osvitavukraini.com/components/com_rsdirectory/files/cache/800x800/695f8088b93351123af18c9550879421.jpg',
      
    },
    {
      
       imageSrc:  'https://web.kpi.kharkov.ua/emmb/wp-content/uploads/sites/185/2018/08/ucheba-za-rubezom-1080x480.jpg',
      
    },
    {
     
      imageSrc:  'https://osvitavukraini.com/components/com_rsdirectory/files/cache/800x800/1a47e4aaf8d9bedfecea59b261ad192e.jpg',
     
    },
    {
        imageSrc : 'https://kiyavia.com/files/TravelProviderInUkraine/ekskursii-po-ukraini/chernivtsy/Chernovtsy_1000.jpg'
    }
   
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

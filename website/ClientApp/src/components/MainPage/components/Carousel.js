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
      
      imageSrc:  'https://scontent.fcwc1-1.fna.fbcdn.net/v/t1.6435-9/188588260_830940474522400_2949950336629571301_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=xgHdjLMVUC4AX__LUwZ&_nc_ht=scontent.fcwc1-1.fna&oh=00_AT-S3pT0XJ_vpllFG8U-iAux_yvZ9CPtoHY-m6MSaDBCdA&oe=6217F119',
     
   },
    {
      
       imageSrc:  'https://osvitavukraini.com/components/com_rsdirectory/files/cache/800x800/695f8088b93351123af18c9550879421.jpg',
      
    },
    {
      
      imageSrc:  'https://scontent.fcwc1-1.fna.fbcdn.net/v/t39.30808-6/271891638_987761205506992_5947814027223867228_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=HtvfujYovo8AX_0NXr5&_nc_ht=scontent.fcwc1-1.fna&oh=00_AT-BytFfClpvFBumXepoYPzf7WANJltLzpVCa5xTG2pidQ&oe=61F7A86D',
     
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

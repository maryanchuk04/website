import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Carousel.css';

import axios from 'axios';
export default function Carousel() {
	//http://freeasphosting.net/cp/fileManager.aspx
	const sliderSettings = {
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		infinite: true,
		pauseOnHover: false,
	};

	const [slider, setSlider] = useState([]);

	useEffect(() => {
		axios.get('http://college-backend.somee.com/slider/all').then((result) => {
			console.log(result.data);
			setSlider(result.data);
		});
	}, []);

	return (
		<div className='content'>
			<Slider {...sliderSettings}>
				{slider.map((s, index) => (
					<div className='image_info' key={index}>
						<img src={s.image} />
					</div>
				))}
			</Slider>
		</div>
	);
}

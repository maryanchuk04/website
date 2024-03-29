import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-gallery-carousel';
import useMedia from 'use-media';
import 'react-gallery-carousel/dist/index.css';

import '../GaleryPage/Galery.css';
function Galery() {
	const isWide = useMedia({ maxWidth: 800 });
	const [data, setData] = useState([]);
	useEffect(() => {
		async function fetchdate() {
			const result = await axios.get('http://college-backend.somee.com/gallery');
			console.log(result.data.map((i, index) => i.image));
			setData(result.data.map((i, index) => ({ src: i.image })));
		}
		fetchdate();
	}, []);
	const a = [];

	return (
		<div className='container_all'>
			<div className='gallery'>
				<div className='title_gallery'>
					<h1>Галерея</h1>
				</div>
				<div className='carusel'>
					<Carousel
						className='carousel'
						images={data}
						hasThumbnails={isWide ? false : true}
						style={{ height: '80vh', width: '100%', margin: '40px 0' }}
						canAutoPlay={true}
						hasMediaButton={false}
					/>
				</div>
			</div>
		</div>
	);
}

export default Galery;

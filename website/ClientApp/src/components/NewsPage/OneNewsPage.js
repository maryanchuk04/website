import React, { useEffect, useState } from 'react';
import '../NewsPage/OneNewsPage.css';
import axios from 'axios';
import { useParams } from 'react-router';
function OneNewsPage() {
	const [news, setNews] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://college-backend.somee.com/news/${id}`).then((result) => {
			setNews({ ...result.data, date: result.data.date.substr(0, 10) });
		});
	}, []);

	return (
		<div>
			<div className='container_all'>
				<div className='news_page'>
					<div className='newspage_title'>
						<h1>{news.title}</h1>
					</div>
					<div className='newspage_info'>
						<div className='short'>
							<div className='im'>
								<img src={news.image} alt={news.title} />
							</div>
							<div className='txt'>
								<div className='short_txt'>
									<p>{news.short_text}</p>
								</div>
							</div>
						</div>
						<div
							className='all_text'
							dangerouslySetInnerHTML={{ __html: news.text }}
						></div>
						<div className='short_date'>
							<p>Дата: {news.date}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OneNewsPage;

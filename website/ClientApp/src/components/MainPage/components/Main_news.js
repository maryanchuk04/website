import React, { useEffect, useState } from 'react';
import './Main_news.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Main_news() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		axios.get('http://college-backend.somee.com/news').then((result) => {
			setNews(result.data);
		});
	}, []);

	return (
		<div className='main_news'>
			<div className='container_all'>
				<div className='grid_news'>
					{news.map(
						(n, index) =>
							index < 4 && (
								<div className='info_news'>
									<div className='one_news_main'>
										<div className='news_title_main'>
											<h3>
												<Link key={n.id} to={`/news/${n.id}`}>
													{n.title.length > 40
														? n.title.substr(0, 40) + '...'
														: n.title}
												</Link>
											</h3>
										</div>
										<div className='imagen'>
											<img src={n.image} alt={n.title} />
										</div>
										<div className='news_short_text_main'>
											<p>{n.short_text}</p>
										</div>
									</div>
								</div>
							)
					)}
				</div>
			</div>
		</div>
	);
}

export default Main_news;

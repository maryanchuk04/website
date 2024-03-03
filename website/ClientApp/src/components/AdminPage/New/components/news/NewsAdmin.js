import React, { useEffect, useState } from 'react';
import './news.css';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import NewsItem from './NewsItem';
import { showAlert } from '../../../../Shared/Alert';
import Modal from '../../modal/Modal';
import CreateNews from './CreateNews';

const NewsAdmin = ({ toDefault }) => {
	const [open, setOpen] = useState(false);
	const [news, setNews] = useState(null);

	useEffect(() => {
		(async () => {
			await refreshNews();
		})();
	}, []);

	const refreshNews = async () => {
		try {
			setNews(null);
			const { data } = await axios.get('http://college-backend.somee.com/news');
			setNews(data);
		} catch (error) {
			showAlert('Неможливо завантажити данні з сервера!', 'error');
		}
	};

	return !news ? (
		<div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
			<ClipLoader size={70} />
		</div>
	) : (
		<div className='news_admin_container'>
			<div className='news_main_buttons'>
				<button onClick={() => setOpen(true)}>Створити новину</button>
			</div>
			<div className='news_admin_wrapper'>
				{news.map((item) => (
					<NewsItem news={item} key={item.id} refreshNews={refreshNews} />
				))}
			</div>
			{open && (
				<Modal close={() => setOpen(false)}>
					<CreateNews close={() => setOpen(false)} />
				</Modal>
			)}
		</div>
	);
};

export default NewsAdmin;

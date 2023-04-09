import React from 'react'
import './news.css'
import axios from 'axios';
import { showAlert } from '../../../../Shared/Alert';

const NewsItem = ({ news, refreshNews }) => {
	const { id, short_text, title, image } = news;

	const handleDelete = async () => {
		try {
			const { status } = await axios.get(`https://bsite.net/IvanovIvan/news/delete/${id}`);
			if (status === 200) {
				showAlert("Новину успішно було видалено!", "success");
				refreshNews();
			}
		} catch (error) {
			showAlert("Щось пішло не так!", "error");
		}
	}

	return (
		<div className='news_item'>
			<div>
				<h5>{title}</h5>
				<div className='news_picture'>
					<img src={image} alt={title} />
				</div>
				<p>{short_text}</p>
			</div>
			<div className='news_button_controll'>
				<button onClick={handleDelete}>
					<i className='fas fa-trash' style={{ color: "#FF0000" }}></i>
				</button>
			</div>
		</div>
	)
}

export default NewsItem
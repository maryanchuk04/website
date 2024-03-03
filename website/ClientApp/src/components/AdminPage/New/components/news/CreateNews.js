import React, { useState, useRef } from 'react';
import './news.css';
import QuillEditor from '../Editor/QuillEditor';
import axios from 'axios';
import { showAlert } from '../../../../Shared/Alert';

const CreateNews = ({ close }) => {
	const editorRef = useRef(null);
	const [getFile, setFile] = useState(null);
	const [news, setNews] = useState({
		title: '',
		short_text: '',
		text: null,
		date: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const bodyFormData = new FormData();
		axios
			.post('http://college-backend.somee.com/news/add', {
				...news,
				text: editorRef.current.value,
			})
			.then((result) => {
				bodyFormData.append('file', getFile);
				axios({
					method: 'POST',
					url: `http://college-backend.somee.com/news/upload/${result.data.id}`,
					data: bodyFormData,
					headers: { 'Content-Type': 'multipart/form-data' },
				})
					.then(({ data, status }) => {
						setNews(data);
						if (status === 200) {
							close();
							showAlert('Новину успішно створено!', 'success');
						} else {
							showAlert('Щось пішло не так!', 'error');
						}
					})
					.catch(() => {
						showAlert('Щось пішло не так!', 'error');
					});
			});
	};

	const handleFileSelected = (e) => {
		setFile(Object(e.currentTarget.files)[0]);
	};

	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			[{ font: [] }],
			[{ align: [] }],
			[{ color: [] }, { background: [] }],
			['blockquote', 'code-block'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ script: 'sub' }, { script: 'super' }],
			[{ indent: '-1' }, { indent: '+1' }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			['image'],
			['clean'],
			['link'],
		],
		imageUploader: {
			upload: (file) => {
				return new Promise((resolve, reject) => {
					const formData = new FormData();
					formData.append('image', file);
					fetch('https://api.imgbb.com/1/upload?key=4b76823349508cfe6987b62ea7b72eb8', {
						method: 'POST',
						body: formData,
					})
						.then((response) => response.json())
						.then((result) => {
							resolve(result.data.url);
						})
						.catch((error) => {
							reject('Upload failed');
							console.error('Error:', error);
						});
				});
			},
		},
	};

	return (
		<form className='create_news_container' onSubmit={handleSubmit}>
			<div className='create_news_buttons'>
				<button>Створити</button>
			</div>
			<div className='create_news'>
				<input
					type='text'
					placeholder='Заголовок новини'
					required
					onChange={({ target }) => setNews({ ...news, title: target.value })}
				/>
				<input
					type='text'
					placeholder='Короткий опис новини'
					required
					onChange={({ target }) => setNews({ ...news, short_text: target.value })}
				/>
				<input
					type='date'
					placeholder='Дата'
					required
					onChange={({ target }) => setNews({ ...news, date: target.value })}
				/>
				<input type='file' id='selectFile' onChange={(i) => handleFileSelected(i)} />
				<QuillEditor value={news.text} quillRef={editorRef} options={modules} />
			</div>
		</form>
	);
};

export default CreateNews;

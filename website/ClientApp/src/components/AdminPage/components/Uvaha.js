import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../components/Uvaha.css';
import { showAlert } from '../../Shared/Alert';

function Uvaha({ toDefault }) {
	const [uvaha, setUvaha] = useState([]);
	const [title, setTitle] = useState('');
	const [short, setShort] = useState('');
	const [link, setLink] = useState('');
	const [ImageLink, setImageLink] = useState('');
	var bodyFormData = new FormData();

	useEffect(() => {
		axios.get('http://college-backend.somee.com/advertisement').then((result) => {
			console.log(result.data);
			setUvaha(result.data);
		});
	}, []);

	const handleFileSelected = (e) => {
		const files = Object(e.currentTarget.files)[0];
		console.log(files);
		bodyFormData.append('file', files);
		axios({
			method: 'POST',
			url: 'http://college-backend.somee.com/upload',
			data: bodyFormData,
			headers: { 'Content-Type': 'multipart/form-data' },
		}).then((res) => {
			setImageLink(res.data);
		});
	};

	const DeleteWarning = (i, id) => {
		axios
			.delete(`http://college-backend.somee.com/advertisement/delete/${id}`)
			.then((result) => {
				showAlert('Данні успішно видалено', 'info');
				toDefault();
			})
			.catch(() => {
				showAlert('Щось пішло не так!', 'error');
			});
	};

	const SubmitAdd = (i, title, short, link, image) => {
		i.preventDefault();

		axios
			.post('http://college-backend.somee.com/advertisement/add', {
				title: title,
				short_text: short,
				link: link,
				image: image,
			})
			.then((result) => {
				showAlert('Данні успішно збережено', 'info');
				toDefault();
			})
			.catch(() => {
				showAlert('Щось пішло не так!', 'error');
			});
	};

	return (
		<div>
			<div className='add_warning'>
				<form onSubmit={(i) => SubmitAdd(i, title, short, link, ImageLink)}>
					<input
						className='input_uvaha elem_warn'
						type='text'
						onChange={(i) => {
							setTitle(i.target.value);
						}}
						value={title}
						placeholder='Заголовок'
						required
					/>
					<input
						className='input_uvaha elem_warn'
						type='text'
						onChange={(i) => {
							setLink(i.target.value);
						}}
						value={link}
						placeholder='Посилання'
					/>
					<textarea
						className='elem_warn'
						onChange={(i) => setShort(i.target.value)}
						value={short}
						placeholder='Текст'
						required
					></textarea>
					<input
						className='elem_warn'
						type='file'
						onChange={(i) => handleFileSelected(i)}
					/>
					<button className='butn_warn' type='submit'>
						Додати
					</button>
				</form>
			</div>
			{uvaha.map((u, index) => (
				<div className='one_uvaha'>
					<div className='warning_block'>
						<div className='text_warning'>
							<h3>
								<a href={u.link} target='_blank'>
									{u.title}{' '}
								</a>
							</h3>
							<p>{u.short_text}</p>
						</div>
						<div className='image_warning'>
							{u.image == null ? (
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOE1GLo_CmChhIjgJqAh-9fPcxJIQBnxQeQ&usqp=CAU'
									alt=''
								/>
							) : (
								<img src={u.image} alt={u.title} />
							)}
						</div>
					</div>
					<button onClick={(i) => DeleteWarning(i, u.id)}>Видалити</button>
					<hr />
				</div>
			))}
		</div>
	);
}

export default Uvaha;

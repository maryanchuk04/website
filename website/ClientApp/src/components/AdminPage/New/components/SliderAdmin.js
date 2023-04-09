import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { showAlert } from '../../../Shared/Alert';
import "./SliderAdmin.css";

const SliderAdmin = () => {
	const bodyFormData = new FormData();
	const [slider, setSlider] = useState(null);
	const [number, setNumber] = useState(0);
	const [getFile, setFile] = useState();

	const handleFileSelected = (e) => {
		setFile(Object(e.currentTarget.files)[0]);
	};


	useEffect(() => {
		(async () => {
			await refresh();
		})()
	}, [])

	const refresh = async () => {
		const { data } = await axios.get("https://bsite.net/IvanovIvan/slider/all");
		setSlider(data);
	}

	const SliderAddClick = (e) => {
		bodyFormData.append("file", getFile);
		axios({
			method: "POST",
			url: "https://bsite.net/IvanovIvan/slider/upload",
			data: bodyFormData,
			headers: { "Content-Type": "multipart/form-data" },
		})
			.then(async () => {
				showAlert("Нове фото було успішно додано", "success");
				await refresh();
			})
			.catch(() => showAlert("Щось пішло не так!", "error"));
	};

	const saveSliderClick = (i, id, number) => {
		axios
			.post(`https://bsite.net/IvanovIvan/slider/save/${id}`, {
				number: number,
			})
			.then(async () => {
				showAlert("Дані успішно збережено!", "success");
				await refresh();
			})
			.catch(() => showAlert("Щось пішло не так!", "error"));
	};

	const deleteClick = (i, id) => {
		axios
			.delete(`https://bsite.net/IvanovIvan/slider/delete/${id}`)
			.then(async () => {
				showAlert("Фото було успішно видалено!", "success")
				await refresh();
			})
			.catch(() => showAlert("Щось пішло не так!", "error"));
	};

	return (
		!slider ? (
			<div style={{ display: "grid", placeItems: "center", height: "100%" }}>
				<ClipLoader size={70} />
			</div>
		) : (
			<div>
				<div className="slider_admin_container">
					{slider.map((s, index) => (
						<div className="slider_item">
							<div className='picture'>
								<img src={s.image}></img>
							</div>
							<div className="knopku">
								<input
									type="number"
									placeholder={s.number}
									onChange={(i) => setNumber(i.target.value)}
								/>
								<button
									onClick={(i) => saveSliderClick(i, s.id, number)}
								>
									Зберегти
								</button>
								<button onClick={(i) => deleteClick(i, s.id)}>
									Видалити
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="upload">
					<input
						type="file"
						id="selectFile"
						onChange={(i) => handleFileSelected(i)}
					/>
					<button id="slideradd" onClick={(i) => SliderAddClick(i)}>
						Додати
					</button>
				</div>
			</div>
		)
	)
}

export default SliderAdmin
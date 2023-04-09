import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { showAlert } from '../../../Shared/Alert';

const Galery = ({ toDefault }) => {
	const bodyFormData = new FormData();
	const [getFile, setFile] = useState(null);
	const [galery, setGalery] = useState(null);

	const refresh = async () => {
		const { data } = await axios.get("https://bsite.net/IvanovIvan/gallery");
		setGalery(data);
	}

	useEffect(() => {
		(async () => {
			await refresh();
		})()
	}, [])

	const handleFileSelected = (e) => {
		setFile(Object(e.currentTarget.files)[0]);
	};

	const AddGalleryFile = (i) => {
		bodyFormData.append("file", getFile);
		axios({
			method: "POST",
			url: "https://bsite.net/IvanovIvan/gallery/add",
			data: bodyFormData,
			headers: { "Content-Type": "multipart/form-data" },
		})
			.then(async () => {
				showAlert("Фото успішно додано!", "success");
				await refresh();
			})
			.catch(() => showAlert("Щось пішло не так!", "error"));
	};

	const DeleteGallery = (i, id) => {
		axios
			.delete(`https://bsite.net/IvanovIvan/gallery/delete/${id}`)
			.then(async () => {
				showAlert("Фото успішно видалено!", "success");
				await refresh();
			})
			.catch(() => showAlert("Щось пішло не так!", "error"));
	};


	return (
		!galery ? (
			<div style={{ display: "grid", placeItems: "center", height: "100%" }}>
				<ClipLoader size={70} />
			</div>
		) : (
			<div style={{ margin: "20px auto" }}>
				<div className="title_galery">
					<input type="file" onChange={(i) => handleFileSelected(i)} />
					<button onClick={(i) => AddGalleryFile(i)}>Додати</button>
				</div>
				<div className="admin_gallery" >
					{galery.map((g, index) => (
						<div className="gallery_item">
							<img src={g.image} alt={index} />
							<div className="knopku_gallery">
								<button onClick={(i) => DeleteGallery(i, g.id)}>
									Видалити
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	)
}

export default Galery
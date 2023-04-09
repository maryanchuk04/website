import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import SubSidebar from './SubSidebar';
import './employers.css';
import { showAlert } from '../../../Shared/Alert';
import Modal from '../modal/Modal';

const Employers = () => {
	const bodyFormData = new FormData();
	const [getFile, setFile] = useState(null);
	const [employers, setEmployers] = useState(null);
	const [activeEmployers, setActiveEmployers] = useState(null);
	const [open, setOpen] = useState(false);
	const [employer, setEmployer] = useState({
		full_name: "",
		posada: "",
		kval: "",
		pred: "",
		number: ""
	});

	const handleFileSelected = (e) => {
		setFile(Object(e.currentTarget.files)[0]);
	};

	useEffect(() => {
		(async () => {
			await refresh();
		})()
	}, [])

	const refresh = async () => {
		setActiveEmployers(null)
		setEmployers(null);
		const { data } = await axios.get("https://bsite.net/IvanovIvan/employerspage");
		setEmployers(data);
	}

	const chooseMenu = (item) => {
		setActiveEmployers(item);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		bodyFormData.append("file", getFile);
		axios(
			{
				method: "POST",
				url: "https://bsite.net/IvanovIvan/upload",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
			.then((result) => {
				axios
					.post(`https://bsite.net/IvanovIvan/employerspage/addemployer/${activeEmployers.id}`, {
						...employer,
						image: result.data
					})
					.then(async () => {
						showAlert("Дані успішно збережено", "success");
						await refresh();
					});
			})
			.catch(() => showAlert("Щось пішло не так!", "error"));
	}

	const deleteEmployer = (id, empid) => {
		axios
			.delete(
				`https://bsite.net/IvanovIvan/employerspage/deleteemployer/${id}/${empid}`,
			)
			.then(async () => {
				showAlert("Працівника було успішно видалено!", "success");
				await refresh();
				setOpen(false);
			})
			.catch(() => showAlert("Щось пішло не так!", "error"));
	};

	return (
		!employers ? (
			<div style={{ display: "grid", placeItems: "center", height: "100%" }}>
				<ClipLoader size={70} />
			</div>
		) : (
			<div className='employers_wrapper'>
				<SubSidebar elements={employers} handleClick={chooseMenu} activeItem={activeEmployers?.name || ""} />
				<div className="employers_container">
					{activeEmployers && <div>
						<div className=''>
							<button className='create_emp' onClick={() => setOpen(true)}>Додати спеціаліста</button>
						</div>
						<div>
							{
								activeEmployers.employers.map((item) => (
									<div className='emp_item'>
										<h5>{item.full_name}</h5>
										<p>Посада: {item.posada}</p>
										<button onClick={() => deleteEmployer(activeEmployers.id, item.id)}>
											<i className='fas fa-trash'></i>
										</button>
									</div>
								))
							}
						</div>
					</div>
					}
				</div>
				{open && <Modal close={() => setOpen(false)}>
					<form className='emp_create_model' onSubmit={handleSubmit}>
						<button className='create_emp'>Додати Працівника</button>
						<div className='fields'>
							<input
								type="text"
								placeholder="Повне ім`я"
								required
								onChange={(i) => setEmployer({ ...employer, full_name: i.target.value })}
								value={employer.fullname}
							/>
							<input
								type="text"
								placeholder="Посада"
								required
								onChange={(i) => setEmployer({ ...employer, posada: i.target.value })}
								value={employer.posada}
							/>
							<input
								type="text"
								placeholder="Кваліфікація"
								onChange={(i) => setEmployer({ ...employer, kval: i.target.value })}
								value={employer.kval}
							/>
							<input
								type="text"
								placeholder="Номер телефону"
								value={employer.number}
								onChange={(i) => setEmployer({ ...employer, number: i.target.value })}
							/>
							<input
								type="text"
								placeholder="Предмети"
								onChange={(i) => setEmployer({ ...employer, pred: i.target.value })}
								value={employer.pred}
							/>
							<input type="file" required onChange={(i) => handleFileSelected(i)} />
						</div>
					</form>
				</Modal>}
			</div>
		)
	)
}

export default Employers
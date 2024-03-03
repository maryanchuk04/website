import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { showAlert } from '../../../Shared/Alert';
import { ClipLoader } from 'react-spinners';

const OppAdmin = () => {
	const [opps, setOpps] = useState(null);
	const [oppField, setOppField] = useState('');

	useEffect(() => {
		(async () => {
			await refresh();
		})();
	}, []);

	const refresh = async () => {
		const { data } = await axios.get('http://college-backend.somee.com/opp');
		setOpps(data);
	};

	const AddSubOpp = (i, id, text) => {
		i.preventDefault();
		axios
			.post(`http://college-backend.somee.com/opp/sub/${id}`, {
				text: text,
			})
			.then(async () => {
				showAlert('Дані успішно додані!', 'success');
				await refresh();
			})
			.catch(() => showAlert('Щось пішло не так!', 'error'));
	};

	return !opps ? (
		<div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
			<ClipLoader size={70} />
		</div>
	) : (
		<div className='opp_admin' style={{ width: '95%', margin: '20px auto' }}>
			{opps?.map((o, index) => (
				<div className='one_opp_admin'>
					<h2>{o.name}</h2>
					<ul>
						<div className='input_for_opp'>
							{o?.opp?.map((i, index) => (
								<li>{i}</li>
							))}
							<form onSubmit={(i) => AddSubOpp(i, o.id, oppField)}>
								<input
									type='text'
									onChange={(i) => setOppField(i.target.value)}
									required
								/>
								<button type='submit'>Додати Опп</button>
							</form>
						</div>
					</ul>
				</div>
			))}
		</div>
	);
};

export default OppAdmin;

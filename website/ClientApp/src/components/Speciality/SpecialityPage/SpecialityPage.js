import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import './SpecialityPage.css';
function SpecialityPage() {
	const [opp, setOpp] = useState([]);
	useEffect(() => {
		axios.get('http://college-backend.somee.com/opp').then((result) => {
			console.log(result.data);
			setOpp(result.data);
		});
	}, []);
	return (
		<div className='speciality'>
			<div className='title'>
				<p>
					Перелік спеціальностей та освітньо-професійних програм <br />
					за якими здійснюється підготовка у закладі освіти
				</p>
			</div>
			<div className='container_all'>
				{opp?.map((o, index) => (
					<div className='about_opp'>
						<p className='name_speciality'>
							<Link to={o.link}>{o.name}</Link>
						</p>
						{o?.opp?.map((i, index) => (
							<ul>
								<li className='opp_speciality'>{i}</li>
							</ul>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default SpecialityPage;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../Shared/Page.css'
import "react-quill/dist/quill.core.css";
import { ClipLoader } from 'react-spinners';

function Page() {
	const [pageinfo, setPageinfo] = useState(null);
	const [all, setAll] = useState({})
	const { id, name } = useParams()

	useEffect(() => {
		setPageinfo(null);
		axios.get(`https://bsite.net/IvanovIvan/${name}/${id}`)
			.then((result) => {
				setPageinfo(result.data.page)
				setAll(result.data)
			})
	}, [id, name]);


	return (
		!pageinfo ? (
			<div style={{ display: "grid", placeItems: "center", height: "100%", padding: "30px 0" }} >
				<ClipLoader size={70} color='#396fc5' />
			</div>
		) : (
			<div className="page">
				<h1 style={{ textAlign: "center", margin: "20px" }}>{all?.name}</h1>
				<div className="container_all">
					<div className="view ql-editor" dangerouslySetInnerHTML={{ __html: pageinfo }} ></div>
				</div>

			</div>
		)
	)
}

export default Page;

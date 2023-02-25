import axios from "axios";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Chudo from "../../Chudo";

const CommonStateItem = ({ name }) => {
	const [items, setItems] = useState([]);
	const [editorContent, setEditorContent] = useState("");

	useEffect(() => {
		(async () => {
			const response = await axios.get(
				`https://bsite.net/IvanovIvan/${name}`,
			);
			setItems(response.data);
		})();
	}, []);

	return items.length === 0 ? (
		<div style={{ display: "grid", placeItems: "center", height: "100%" }}>
			<ClipLoader size={70} />
		</div>
	) : (
		<div>
			<div></div>
			<div>
				<Chudo html={editorContent} seterForHTML={setEditorContent} />
			</div>
		</div>
	);
};

export default CommonStateItem;

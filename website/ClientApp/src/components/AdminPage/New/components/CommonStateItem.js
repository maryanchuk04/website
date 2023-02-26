import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import Chudo from "../../Chudo";
import SubSidebar from "./SubSidebar";
import "./CommonStateItem.css";
import QuillEditor from "./Editor/QuillEditor";

const CommonStateItem = ({ name }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [items, setItems] = useState(null);
	const [editor, setEditor] = useState(null);
	const [title, setTitle] = useState(null);
	const [uploadLink, setUploadLink] = useState("");

	const editorRef = useRef(null);

	useEffect(() => {
		(async () => {
			const response = await axios.get(
				`https://bsite.net/IvanovIvan/${name}`,
			);
			setIsOpen(false);
			setItems(response.data);
		})();
	}, [name]);

	useEffect(() => {
		setIsOpen(true);
	}, [editor]);

	const uploadFile = (e) => {
		const files = Object(e.currentTarget.files)[0];
		const bodyFormData = new FormData();
		bodyFormData.append("file", files);
		axios({
			method: "POST",
			url: "https://bsite.net/IvanovIvan/upload",
			data: bodyFormData,
			headers: { "Content-Type": "multipart/form-data" },
		}).then((result) => {
			console.log(result);
			setUploadLink(result.data);
		});
	};

	const handleClick = (item) => {
		setIsOpen(false);
		setEditor(item.page);
		setTitle(item.name);
	};

	const submitEditor = (e) => {
		e.preventDefault();

		console.log(editorRef.current.value);
		setEditor(editorRef.current.value);
		//save
		// TODO add ability update page
		axios
			.post(`https://bsite.net/IvanovIvan/${name}/add`, {
				name: title,
				page: editorRef.current.value,
			})
			.then((result) => {
				console.log(result.data);
			});
	};

	return items === null ? (
		<div style={{ display: "grid", placeItems: "center", height: "100%" }}>
			<ClipLoader size={70} />
		</div>
	) : (
		<div className="comm_state">
			<SubSidebar
				activeItem={title}
				elements={items}
				handleClick={handleClick}
			/>
			{isOpen && (
				<div className="editor_container">
					<div className="controll">
						<form onSubmit={submitEditor}>
							<input
								id="title"
								placeholder={title === "" && `Назва сторінки`}
								onChange={(i) => setTitle(i.target.value)}
								value={title}
								required
							></input>
							<div className="btns">
								<button>Зберегти</button>
								<button>Видалити</button>
							</div>
						</form>
						<div>
							<p>Посилання на файл буде тут: {uploadLink}</p>
							<input
								id="fileinput"
								type="file"
								onChange={uploadFile}
							></input>
						</div>
					</div>
					<div className="editor">
						<QuillEditor value={editor} quillRef={editorRef} />
					</div>
				</div>
			)}
		</div>
	);
};

export default CommonStateItem;

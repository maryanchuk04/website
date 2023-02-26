import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({ value, quillRef }) => {
	useEffect(() => {}, [quillRef]);

	const handleImageUpload = (e) => {
		const file = e.target.files[0];

		if (file && file.type.startsWith("image/")) {
			const reader = new FileReader();
			reader.onload = () => {
				const range = quillRef.current.getEditor().getSelection();
				const imageUrl = reader.result;
				quillRef.current
					.getEditor()
					.insertEmbed(range.index, "image", imageUrl);
			};
			reader.readAsDataURL(file);
		}
	};

	const modules = {
		toolbar: [
			["bold", "italic", "underline", "strike"],
			[{ font: [] }],
			[{ align: [] }],
			[{ color: [] }, { background: [] }],
			["blockquote", "code-block"],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ script: "sub" }, { script: "super" }],
			[{ indent: "-1" }, { indent: "+1" }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			["image"],
			["clean"],
			["link"],
		],
		imageUploader: {
			upload: (file) => {
				return new Promise((resolve, reject) => {
					const formData = new FormData();
					formData.append("image", file);
					fetch(
						"https://api.imgbb.com/1/upload?key=4b76823349508cfe6987b62ea7b72eb8",
						{
							method: "POST",
							body: formData,
						},
					)
						.then((response) => response.json())
						.then((result) => {
							console.log(result);
							resolve(result.data.url);
						})
						.catch((error) => {
							reject("Upload failed");
							console.error("Error:", error);
						});
				});
			},
		},
	};

	return <ReactQuill ref={quillRef} defaultValue={value} modules={modules} />;
};

export default QuillEditor;

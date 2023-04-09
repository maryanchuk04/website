import React from "react";
import "./SubSidebar.css";

const SubSidebar = ({ activeItem, elements, handleClick }) => {
	return (
		<div className="sub_sidebar">
			<div className="sub_header">
				<h3>Сторінки</h3>
			</div>
			<div className="list">
				{elements.map((item) => (
					<li
						key={item.id}
						className={`${activeItem === item.name ? "active " : ""
							}`}
						onClick={() => handleClick(item)}
					>
						<h6>{item.name}</h6>
					</li>
				))}
			</div>
			<button
				id="new_page"
				onClick={() =>
					handleClick({
						page: "",
						title: "",
					})
				}
			>
				Додати нову сторінку
			</button>
		</div>
	);
};

export default SubSidebar;

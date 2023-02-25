import React from "react";
import "./AdminSidebar.css";
const AdminSidebar = ({ menuState, menuChange }) => {
	const menu = [
		"Студенту",
		"Діяльність",
		"Абітурієнту",
		"Спеціальності",
		"Новини",
		"Розділ Увага",
		"Слайдер",
		"Колектив",
		"Історія",
		"Галерея",
		"ОПП",
	];

	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<h2>Меню</h2>
			</div>
			<div className="sidebar_menu">
				{menu.map((item, index) => (
					<li
						key={index}
						className={`${menuState === index && "active"}`}
						onClick={() => menuChange(index)}
					>
						<h5>{item}</h5>
					</li>
				))}
			</div>
		</div>
	);
};

export default AdminSidebar;

import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./NewAdmin.css";
import Wrapper from "./Wrapper";

const NewAdmin = () => {
	const [menuState, setMenuState] = useState(null);

	useEffect(() => {
		if (!localStorage.getItem("AdminValue") || localStorage.getItem("AdminValue") === false) {
			window.location = "/login"
		}
	}, [])

	return (
		<div className="admin">
			<header className="header-admin">
				<h1>Ласкаво просимо адміністраторе!</h1>
			</header>
			<div className="admin_content">
				<AdminSidebar menuState={menuState} menuChange={setMenuState} />
				<div className="wrapper_content">
					<Wrapper menuState={menuState} setMenuState={setMenuState} />
				</div>
			</div>
		</div>
	);
};

export default NewAdmin;

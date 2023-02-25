import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./NewAdmin.css";
import Wrapper from "./Wrapper";

const NewAdmin = () => {
	const [menuState, setMenuState] = useState(null);

	return (
		<div className="admin">
			<header className="header">
				<h1>Ласкаво просимо адміністраторе!</h1>
			</header>
			<div className="admin_content">
				<AdminSidebar menuState={menuState} menuChange={setMenuState} />
				<Wrapper menuState={menuState} />
			</div>
		</div>
	);
};

export default NewAdmin;

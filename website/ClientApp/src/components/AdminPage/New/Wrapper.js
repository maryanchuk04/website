import React from "react";
import CommonStateItem from "./components/CommonStateItem";
import "./Wrapper.css";

const Wrapper = ({ menuState }) => {
	const render = () => {
		switch (menuState) {
			case 0: {
				return <CommonStateItem name={"student"} />;
			}
			default:
				return <></>;
		}
	};

	return menuState === null ? (
		<div className="null_state">
			<h2>Виберіть що ви хочете змінити!</h2>
		</div>
	) : (
		<div className="admin_wrapper">{render()}</div>
	);
};

export default Wrapper;

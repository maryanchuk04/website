import React from "react";
import CommonStateItem from "./components/CommonStateItem";
import "./Wrapper.css";
import NewsAdmin from "./components/news/NewsAdmin";
import Uvaha from "../components/Uvaha";
import SliderAdmin from "./components/SliderAdmin";
import Galery from "./components/Galery";
import OppAdmin from "./components/OppAdmin";
import Employers from "./components/Employers";

const Wrapper = ({ menuState, setMenuState }) => {
	const toDefault = () => {
		setMenuState(-1);
	}

	const render = () => {
		switch (menuState) {
			case 0: {
				return <CommonStateItem name={"student"} toDefault={toDefault} />;
			}
			case 1: {
				return <CommonStateItem name={"collegeactivity"} toDefault={toDefault} />;
			}
			case 2: {
				return <CommonStateItem name={"entrant"} toDefault={toDefault} />;
			}
			case 3: {
				return <CommonStateItem name={"speciality"} toDefault={toDefault} />;
			}
			case 4: {
				return <CommonStateItem name={"history"} toDefault={toDefault} />;
			}
			case 5: {
				return <NewsAdmin toDefault={toDefault} />
			}
			case 6: {
				return <Uvaha toDefault={toDefault} />
			}
			case 7: {
				return <SliderAdmin />
			}
			case 8: {
				return <Employers />
			}
			case 9: {
				return <Galery toDefault={toDefault} />
			}
			case 10: {
				return <OppAdmin />
			}
			default:
				return <div className="null_state">
					<h2>Виберіть що ви хочете змінити!</h2>
				</div>;
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

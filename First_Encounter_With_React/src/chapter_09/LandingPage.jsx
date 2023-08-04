import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onClickLogin = () => {
		setIsLoggedIn(true);
	};

	const onClickLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<div>
			<Toolbar
				isLoggedIn={isLoggedIn}
				onClickLogin={onClickLogin}
				onClickLogout={onClickLogout}
			/>
			<div className="padding">은비가 만든 리액트 페이지!</div>
		</div>
	);
}

export default LandingPage;
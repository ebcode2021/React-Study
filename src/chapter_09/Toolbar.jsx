import "./styles.css"

function Toolbar(props) {
	const { isLoggedIn, onClickLogin, onClickLogout } = props;

	return (
		<div className="wrapper">
			{isLoggedIn && <span className="greeting">Welcome!</span>}

			{isLoggedIn ? (
				<button onClick={onClickLogout}>Logout</button>
			) : (
				<button onClick={onClickLogin}>Login</button>
			)}
		</div>
	);
}

export default Toolbar;
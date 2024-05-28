import React, {useState} from "react";
import {useAuthContext, authActions} from "../contexts/AuthContextBetterV2";
import {apiLogin} from "../services/api";
import {useNavigate, Navigate} from "react-router-dom";


export default function Login() {

	const {auth, dispatch} = useAuthContext();
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	// const navigate = useNavigate();

	// if (auth.isLoggedIn) return navigate('/todos');
	if (auth.isLoggedIn) return <Navigate to="todos" />;

	// Handle login here
	async function handleLogin() {

		setLoading(true);

		try {
			const user = await apiLogin(name);
			setLoading(false);
			dispatch(authActions.loginSuccess(user));

		} catch (error) {
			setLoading(false);
			dispatch(authActions.loginFail(error.message));
		}
	}


	if (loading) return <p>Loading..</p>;

	return (
		<header className="App-header">
			<h2>Login</h2>
			<form className="Item">
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<button onClick={handleLogin}>Login</button>
			</form>
			{auth.error && <p>{auth.error}</p>}
		</header>
	);
}
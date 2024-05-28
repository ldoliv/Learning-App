import React from "react";
import {useAuthContext, authActions} from '../contexts/AuthContextBetterV2';

export default function Greeting() {

	const {auth, dispatch} = useAuthContext();

	if (auth.isLoggedIn) {
		return (
			<p>
				Hello, {auth.user.name}!
				<button className="btn btn-primary" onClick={() => dispatch(authActions.logout())}>Logout</button>
			</p>
		)
	}

	return (
		<p>You are not logged in.</p>
	);
}
import React from "react";
import {Route, useNavigate, useLocation, Navigate} from "react-router-dom";
import {useAuthContext} from "../contexts/AuthContext";


export default function PrivateRoute(props) {

	const {auth} = useAuthContext();
	// const navigate = useNavigate();
	const loca = useLocation();

	return <Route {...props} />

	// if (auth.isLoggedIn) {
	// 	return <Route {...props} />
	// } else {
	// 	return <Navigate to="/" state={{from: loca}} replace />
	// }

}
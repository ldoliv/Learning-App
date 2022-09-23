/*

https://betterprogramming.pub/build-a-redux-like-store-with-react-context-hooks-234e3774495f

. Use Context and Hooks for global state management.
. Implement authentication using global state.
. Configure routing with public and private routes.

*/

import {Outlet, useLocation} from 'react-router-dom';
import {useAddChildren} from 'contexts/RoutesContext';


// import React from "react";
import "./App.scss";

// with useState
// import {TodoProvider, TodoContext} from "./contexts/TodoContext_useState";

// with useReducer
import {TodoProvider} from "./contexts/TodoContext_useReducer";

import Greeting from "./components/Greeting";
import Todos from './components/Todos';
import Login from './components/Login';
import {AuthProvider} from './contexts/AuthContextBetterV2';
// import PrivateRoute from "./components/PrivateRoute";
import RequireAuth from "./components/RequireAuth";





function ReduxLikeContext() {

	const location = useLocation();
	const {pathname} = location;

	useAddChildren([
		{
			index: true,
			element: <>
				<Login />
			</>
		},
		{
			path: 'todos',
			element: <>
				<RequireAuth basePath={pathname}>
					<TodoProvider>
						<Todos />
					</TodoProvider>
				</RequireAuth>
			</>
		}
	]);


	return (
		<div className="redux-like-context-hooks">
			<AuthProvider>
				<Greeting />

				<Outlet />

			</AuthProvider>
		</div>
	);
}

export default ReduxLikeContext;
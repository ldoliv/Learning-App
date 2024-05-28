import React, {createContext, useContext, useReducer} from 'react';
import {getUser, saveUser, removeUser} from '../components/store';



// STATE REDUCER
// -------------------------------------------------------

// Actions
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";


// Action creators
const authActions = {

	loginSuccess: (user) => {
		return {type: LOGIN_SUCCESS, user};
	},
	loginFail: (error) => {
		return {type: LOGIN_FAIL, error};
	},
	logout: () => {
		return {type: LOGOUT};
	}
};

// Reducer
function authReducer(state, action) {

	switch (action.type) {
		case LOGIN_SUCCESS:

			const user = action.user;
			saveUser(user);

			return {isLoggedIn: true, user, error: null};

		case LOGIN_FAIL:
			return {isLoggedIn: false, user: null, error: action.error};

		case LOGOUT:

			removeUser();
			return {isLoggedIn: false};

		default:
			return state;
	}
}
// -------------------------------------------------------


const AuthContext = createContext();

function AuthProvider(props) {

	const user = getUser();

	// Initial state
	const initialState = {
		isLoggedIn: user ? true : false,
		user,
		error: null
	};

	const [auth, dispatch] = useReducer(authReducer, initialState);

	const authData = {auth, dispatch};

	return <AuthContext.Provider value={authData} {...props} />
}

function useAuthContext() {
	return useContext(AuthContext);
}

export {AuthProvider, useAuthContext, authActions}